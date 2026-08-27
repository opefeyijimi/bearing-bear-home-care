"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import {
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "@/lib/firebase";

interface Application {
  [key: string]: any;
}

export default function ApplicationDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;

  const [application, setApplication] =
    useState<Application | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingStatus, setUpdatingStatus] =
  useState(false);

  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(
        auth,
        async (user) => {
          if (!user) {
            router.replace("/admin/login");
            return;
          }

          try {
            const idToken =
              await user.getIdToken();

            const response =
              await fetch(
                `/api/admin/applications/${id}`,
                {
                  headers: {
                    Authorization:
                      `Bearer ${idToken}`,
                  },
                }
              );

            const result =
              await response.json();

            if (!response.ok) {
              throw new Error(
                result?.message ||
                  "Unable to load application."
              );
            }

            setApplication(
              result.application
            );

          } catch (error) {
            console.error(
              "Application details error:",
              error
            );

            setError(
              "Unable to load this application."
            );
          } finally {
            setLoading(false);
          }
        }
      );

    return () => unsubscribe();
  }, [id, router]);


  async function updateStatus(
  newStatus: string
) {
  if (!auth.currentUser || !application) {
    return;
  }

  try {
    setUpdatingStatus(true);

    const idToken =
      await auth.currentUser.getIdToken();

    const response = await fetch(
      `/api/admin/applications/${application.id}`,
      {
        method: "PATCH",

        headers: {
          "Content-Type": "application/json",
          Authorization:
            `Bearer ${idToken}`,
        },

        body: JSON.stringify({
          status: newStatus,
        }),
      }
    );

    const result =
      await response.json();

    if (!response.ok) {
      throw new Error(
        result?.message ||
          "Unable to update status."
      );
    }

    setApplication((previous) => ({
      ...previous,
      status: result.status,
    }));

  } catch (error) {
    console.error(
      "Status update error:",
      error
    );

    alert(
      "Unable to update the application status."
    );

  } finally {
    setUpdatingStatus(false);
  }
}

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-slate-600">
          Loading application...
        </p>
      </main>
    );
  }

  if (error || !application) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-10">

        <div className="mx-auto max-w-4xl">

          <button
            onClick={() =>
              router.push("/admin")
            }
            className="mb-6 text-sm font-medium text-sky-600 hover:text-sky-700"
          >
            ← Back to Applications
          </button>

          <div className="rounded-2xl bg-red-50 p-6 text-red-700">
            {error || "Application not found."}
          </div>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}

      <header className="border-b border-slate-200 bg-white">

        <div className="mx-auto max-w-6xl px-6 py-5">

          <button
            onClick={() =>
              router.push("/admin")
            }
            className="text-sm font-medium text-sky-600 hover:text-sky-700"
          >
            ← Back to Applications
          </button>

        
        <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

  <div>

    <h1 className="text-3xl font-bold text-slate-900">
      {application.clientName ||
        "Client Application"}
    </h1>

    <p className="mt-1 text-slate-500">
      Intake Application
    </p>

  </div>

  <div className="flex flex-wrap items-center gap-3">

    <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
      {formatStatus(
        application.status
      )}
    </span>

    <select
      value={
        application.status || "new"
      }
      disabled={updatingStatus}
      onChange={(event) =>
        updateStatus(
          event.target.value
        )
      }
      className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 outline-none focus:border-sky-600"
    >

      <option value="new">
        New
      </option>

      <option value="under_review">
        Under Review
      </option>

      <option value="approved">
        Approved
      </option>

      <option value="archived">
        Archived
      </option>

    </select>

  </div>

</div>
















        </div>

      </header>

      {/* Content */}

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">

        <InformationSection
          title="Client Information"
          fields={[
            ["Full Name", application.clientName],
            ["Age", application.age],
            ["Phone", application.phone],
            ["Email", application.email],
            ["Home Address", application.address],
            ["Preferred Language", application.language],
            [
              "Marital Status",
              application.maritalStatus,
            ],
          ]}
        />

        <InformationSection
          title="Emergency Contact"
          fields={[
            [
              "Name",
              application.emergencyName,
            ],
            [
              "Relationship",
              application.emergencyRelationship,
            ],
            [
              "Phone",
              application.emergencyPhone,
            ],
            [
              "Email",
              application.emergencyEmail,
            ],
            [
              "Address",
              application.emergencyAddress,
            ],
          ]}
        />

        <InformationSection
          title="Secondary Emergency Contact"
          fields={[
            [
              "Name",
              application.secondaryEmergencyName,
            ],
            [
              "Relationship",
              application.secondaryEmergencyRelationship,
            ],
            [
              "Phone",
              application.secondaryEmergencyPhone,
            ],
            [
              "Email",
              application.secondaryEmergencyEmail,
            ],
          ]}
        />

        <InformationSection
          title="Medical Contacts"
          fields={[
            [
              "Primary Care Physician",
              application.physicianName,
            ],
            [
              "Physician Phone",
              application.physicianPhone,
            ],
            [
              "Preferred Hospital",
              application.preferredHospital,
            ],
          ]}
        />

        <InformationSection
          title="Insurance Information"
          fields={[
            [
              "Insurance Provider",
              application.insuranceProvider,
            ],
            [
              "Policy Number",
              application.policyNumber,
            ],
          ]}
        />

        <InformationSection
          title="Medical Background"
          fields={[
            [
              "Medical Conditions",
              application.medicalConditions,
            ],
            [
              "Allergies",
              application.allergies,
            ],
            [
              "Medications",
              application.medications,
            ],
            [
              "Mobility",
              application.mobility,
            ],
            [
              "Falls",
              application.falls,
            ],
            [
              "Vision",
              application.vision,
            ],
            [
              "Hearing",
              application.hearing,
            ],
            [
              "Memory",
              application.memory,
            ],
            [
              "Orientation",
              application.orientation,
            ],
            [
              "Hospitalizations",
              application.hospitalizations,
            ],
            [
              "Diet",
              application.diet,
            ],
            [
              "Medical Notes",
              application.medicalNotes,
            ],
          ]}
        />

        <InformationSection
          title="Daily Living"
          fields={[
            [
              "Bathing Assistance",
              application.adlBathing,
            ],
            [
              "Dressing Assistance",
              application.adlDressing,
            ],
            [
              "Grooming Assistance",
              application.adlGrooming,
            ],
            [
              "Toileting Assistance",
              application.adlToileting,
            ],
            [
              "Eating Assistance",
              application.adlEating,
            ],
            [
              "Mobility Assistance",
              application.adlMobility,
            ],
            [
              "Transfer Assistance",
              application.adlTransfers,
            ],
            [
              "Meal Preparation",
              application.iadlMeals,
            ],
            [
              "Medication Assistance",
              application.iadlMedication,
            ],
            [
              "Laundry",
              application.iadlLaundry,
            ],
            [
              "Housekeeping",
              application.iadlHousekeeping,
            ],
            [
              "Shopping",
              application.iadlShopping,
            ],
            [
              "Transportation",
              application.iadlTransportation,
            ],
            [
              "Companionship",
              application.iadlCompanionship,
            ],
            [
              "Notes",
              application.dailyLivingNotes,
            ],
          ]}
        />

        <InformationSection
          title="Preferences"
          fields={[
            [
              "Preferred Caregiver Gender",
              application.preferredGender,
            ],
            [
              "Preferred Language",
              application.preferredLanguage,
            ],
            [
              "Hobbies",
              application.hobbies,
            ],
            [
              "Pets",
              application.pets,
            ],
            [
              "Smoking",
              application.smoking,
            ],
            [
              "Preferred Days",
              application.preferredDays,
            ],
            [
              "Preferred Time",
              application.preferredTime,
            ],
            [
              "Religious Needs",
              application.religiousNeeds,
            ],
            [
              "Notes",
              application.preferencesNotes,
            ],
          ]}
        />

        <InformationSection
          title="Home Environment"
          fields={[
            [
              "Living Arrangement",
              application.livingArrangement,
            ],
            [
              "Home Type",
              application.homeType,
            ],
            [
              "Has Stairs",
              application.hasStairs,
            ],
            [
              "Has Ramp",
              application.hasRamp,
            ],
            [
              "Has Elevator",
              application.hasElevator,
            ],
            [
              "Accessible Bathroom",
              application.accessibleBathroom,
            ],
            [
              "Grab Bars",
              application.grabBars,
            ],
            [
              "Shower Chair",
              application.showerChair,
            ],
            [
              "Hospital Bed",
              application.hospitalBed,
            ],
            [
              "Emergency Alert",
              application.emergencyAlert,
            ],
            [
              "Mobility Aids",
              application.mobilityAids,
            ],
            [
              "Safety Concerns",
              application.homeSafetyConcerns,
            ],
            [
              "Notes",
              application.homeNotes,
            ],
          ]}
        />

        <InformationSection
          title="Payment Information"
          fields={[
            [
              "Responsible Party",
              application.responsibleParty,
            ],
            [
              "Relationship",
              application.responsibleRelationship,
            ],
            [
              "Billing Address",
              application.billingAddress,
            ],
            [
              "Service Start Date",
              application.serviceStartDate,
            ],
            [
              "Service Schedule",
              application.serviceSchedule,
            ],
            [
              "Payment Method",
              application.paymentMethod,
            ],
            [
              "Billing Frequency",
              application.billingFrequency,
            ],
            [
              "Billing Contact Method",
              application.billingContactMethod,
            ],
            [
              "Billing Notes",
              application.billingNotes,
            ],
          ]}
        />

        <InformationSection
          title="Consent"
          fields={[
            [
              "Information Accurate",
              application.informationAccurate,
            ],
            [
              "Privacy Consent",
              application.privacyConsent,
            ],
            [
              "Service Consent",
              application.serviceConsent,
            ],
            [
              "Electronic Communication",
              application.electronicCommunication,
            ],
            [
              "Signature Name",
              application.signatureName,
            ],
            [
              "Relationship to Client",
              application.relationshipToClient,
            ],
            [
              "Signature Date",
              application.signatureDate,
            ],
            [
              "Final Agreement",
              application.finalAgreement,
            ],
          ]}
        />

      </section>

    </main>
  );
}

function InformationSection({
  title,
  fields,
}: {
  title: string;
  fields: [string, any][];
}) {
  return (
    <section className="mb-6 overflow-hidden rounded-2xl bg-white shadow-sm">

      <div className="border-b border-slate-200 bg-slate-50 px-6 py-5">

        <h2 className="text-xl font-bold text-slate-900">
          {title}
        </h2>

      </div>

      <div className="grid gap-0 md:grid-cols-2">

        {fields.map(([label, value]) => (

          <div
            key={label}
            className="border-b border-slate-100 px-6 py-5"
          >

            <p className="text-sm font-medium text-slate-500">
              {label}
            </p>

            <p className="mt-1 whitespace-pre-wrap text-slate-900">
              {formatValue(value)}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

function formatValue(value: any) {
  if (
    value === undefined ||
    value === null ||
    value === ""
  ) {
    return "—";
  }

  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  if (Array.isArray(value)) {
    return value.join(", ");
  }

  return String(value);
}

function formatStatus(
  status?: string
) {
  switch (status) {
    case "under_review":
      return "Under Review";

    case "approved":
      return "Approved";

    case "archived":
      return "Archived";

    case "new":
    default:
      return "New";
  }
}