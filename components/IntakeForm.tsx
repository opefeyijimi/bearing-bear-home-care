"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import {
  FormProvider,
  useForm,
  FieldPath,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  intakeSchema,
  IntakeFormValues,
} from "@/components/schemas/intakeSchema";

import ClientInformation from "./intake/ClientInformation";
import EmergencyContact from "./intake/EmergencyContact";
import MedicalBackground from "./intake/MedicalBackground";
import DailyLiving from "./intake/DailyLiving";
import Preferences from "./intake/Preferences";
import HomeEnvironment from "./intake/HomeEnvironment";
import PaymentInformation from "./intake/PaymentInformation";
import Consent from "./intake/Consent";

import ProgressBar from "./intake/ProgressBar";
import StepIndicator from "./intake/StepIndicator";
import StepNavigation from "./intake/StepNavigation";
import { useRouter } from "next/navigation";


const stepTitles = [
  "Client",
  "Emergency",
  "Medical",
  "Daily Living",
  "Preferences",
  "Home",
  "Payment",
  "Consent",
];

const getSteps = (
  setTurnstileToken: (token: string) => void
) => [
  <ClientInformation key="client" />,

  <EmergencyContact key="emergency" />,

  <MedicalBackground key="medical" />,

  <DailyLiving key="daily-living" />,

  <Preferences key="preferences" />,

  <HomeEnvironment key="home" />,

  <PaymentInformation key="payment" />,

  <Consent
    key="consent"
    onTurnstileSuccess={setTurnstileToken}
    onTurnstileExpire={() => setTurnstileToken("")}
  />,
];

/**
 * These are the fields validated before moving to the next step.
 * Add/remove fields here as your schema evolves.
 */
const stepFields: FieldPath<IntakeFormValues>[][] = [
  ["clientName", "age", "phone", "email"],
  ["emergencyName", "emergencyPhone"],
  [],
  [],
  [],
  [],
  [],
  [
    "informationAccurate",
    "privacyConsent",
    "serviceConsent",
    "signatureName",
    "relationshipToClient",
    "signatureDate",
    "finalAgreement",
  ],
];

export default function IntakeForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  
  const steps = getSteps(setTurnstileToken);
  const methods = useForm<IntakeFormValues>({
    resolver: zodResolver(intakeSchema),

    mode: "onTouched",

    defaultValues: {
      hobbies: "",

      informationAccurate: false,
      privacyConsent: false,
      serviceConsent: false,
      electronicCommunication: false,
      finalAgreement: false,
    },
  });

  const {
    trigger,
    handleSubmit,
    reset,
  } = methods;

  async function nextStep() {
    const fields = stepFields[currentStep];

    if (fields.length > 0) {
      const valid = await trigger(fields);

      if (!valid) return;
    }

    setCurrentStep((prev) =>
      Math.min(prev + 1, steps.length - 1)
    );
  }

  function previousStep() {
    setCurrentStep((prev) =>
      Math.max(prev - 1, 0)
    );
  }

  
 async function onSubmit(data: IntakeFormValues) {
  if (!turnstileToken) {
    setSubmitError(
      "Please complete the security verification before submitting."
    );
    return;
  }

  setIsSubmitting(true);
  setSubmitError("");

  try {
    const response = await fetch("/api/intake", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        turnstileToken,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result?.message || "Unable to submit application."
      );
    }

    reset();
    setCurrentStep(0);
    setTurnstileToken("");

    router.push("/intake/success");

  } catch (error) {
    console.error("Submission error:", error);

    setSubmitError(
      error instanceof Error
        ? error.message
        : "We were unable to submit your application. Please try again."
    );
  } finally {
    setIsSubmitting(false);
  }

      try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          client_name: data.clientName,
          client_email: data.email,
          client_phone: data.phone,
          // Report this 
          //application_id: result.applicationId,
        },
        {
          publicKey:
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      );
    } catch (emailError) {
      // Email notification failure should NOT
      // invalidate the Firestore submission.

      console.error(
        "Email notification failed:",
        emailError
      );
    }



}



  return (
    <section className="w-full bg-slate-50 py-8 sm:py-12 lg:py-16">

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">

        <div className="rounded-2xl bg-white p-5 shadow-xl sm:rounded-3xl sm:p-8 lg:p-10">

          {/* =====================================================
              HEADER
          ===================================================== */}

          <div className="mb-8 text-center sm:mb-10 lg:mb-12">

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Client Intake Form
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
              Complete the form below so we can prepare
              personalized home care services.
            </p>

          </div>

          {/* =====================================================
              PROGRESS BAR
          ===================================================== */}

          <div className="mb-6">
            <ProgressBar
              currentStep={currentStep}
              totalSteps={steps.length}
            />
          </div>

          {/* =====================================================
              STEP INDICATOR

              Wrapped in a container that allows horizontal
              scrolling on small screens.
          ===================================================== */}

          <div className="mb-8 w-full overflow-x-auto pb-3 sm:mb-10">
            <div className="min-w-[760px]">
              <StepIndicator
                currentStep={currentStep}
                totalSteps={steps.length}
                titles={stepTitles}
              />
            </div>
          </div>

          {/* =====================================================
              FORM
          ===================================================== */}

          <FormProvider {...methods}>

            <form
              onSubmit={handleSubmit(onSubmit,
                (errors) => {
      console.log("FORM VALIDATION ERRORS:", errors);
    }
              )}
              className="w-full"
            >

              {/* Current step */}

              <div className="w-full">
                {steps[currentStep]}
              </div>

              {/* Navigation */}

              <div className="mt-8 border-t border-slate-200 pt-6 sm:mt-10 sm:pt-8">

  {submitError && (
    <div
      role="alert"
      className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
    >
      {submitError}
    </div>
  )}

  <StepNavigation
    currentStep={currentStep}
    totalSteps={steps.length}
    previousStep={previousStep}
    nextStep={nextStep}
    isSubmitting={isSubmitting}
  />

</div>
            </form>

          </FormProvider>

        </div>

      </div>

    </section>
  );
}