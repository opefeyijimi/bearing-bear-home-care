"use client";

import { useFormContext } from "react-hook-form";
import SectionHeader from "./SectionHeader";

export default function EmergencyContact() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <section className="rounded-3xl bg-white p-10 shadow-xl">

      <SectionHeader
        title="Emergency Contact"
        description="Who should we contact in case of an emergency?"
      />

      <div className="grid gap-6 md:grid-cols-2">

        {/* Primary Contact */}

        <div>

          <label className="mb-2 block font-medium">
            Emergency Contact Name
          </label>

          <input
            {...register("emergencyName")}
            className="w-full rounded-xl border border-slate-300 p-4 focus:border-sky-600 focus:outline-none"
            placeholder="John Smith"
          />

          <p className="mt-2 text-sm text-red-500">
            {errors.emergencyName?.message as string}
          </p>

        </div>

        <div>

          <label className="mb-2 block font-medium">
            Relationship
          </label>

          <input
            {...register("emergencyRelationship")}
            className="w-full rounded-xl border border-slate-300 p-4"
            placeholder="Son, Daughter, Spouse..."
          />

        </div>

        <div>

          <label className="mb-2 block font-medium">
            Phone Number
          </label>

          <input
            {...register("emergencyPhone")}
            className="w-full rounded-xl border border-slate-300 p-4"
            placeholder="(555) 555-5555"
          />

        </div>

        <div>

          <label className="mb-2 block font-medium">
            Email Address
          </label>

          <input
            type="email"
            {...register("emergencyEmail")}
            className="w-full rounded-xl border border-slate-300 p-4"
            placeholder="email@example.com"
          />

        </div>

        <div className="md:col-span-2">

          <label className="mb-2 block font-medium">
            Address
          </label>

          <input
            {...register("emergencyAddress")}
            className="w-full rounded-xl border border-slate-300 p-4"
            placeholder="Street Address"
          />

        </div>

      </div>

      {/* Divider */}

      <div className="my-10 border-t border-slate-200" />

      <SectionHeader
        title="Secondary Emergency Contact"
        description="Optional backup contact."
      />

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <label className="mb-2 block font-medium">
            Name
          </label>

          <input
            {...register("secondaryEmergencyName")}
            className="w-full rounded-xl border border-slate-300 p-4"
          />

        </div>

        <div>

          <label className="mb-2 block font-medium">
            Relationship
          </label>

          <input
            {...register("secondaryEmergencyRelationship")}
            className="w-full rounded-xl border border-slate-300 p-4"
          />

        </div>

        <div>

          <label className="mb-2 block font-medium">
            Phone Number
          </label>

          <input
            {...register("secondaryEmergencyPhone")}
            className="w-full rounded-xl border border-slate-300 p-4"
          />

        </div>

        <div>

          <label className="mb-2 block font-medium">
            Email Address
          </label>

          <input
            type="email"
            {...register("secondaryEmergencyEmail")}
            className="w-full rounded-xl border border-slate-300 p-4"
          />

        </div>

      </div>

      {/* Divider */}

      <div className="my-10 border-t border-slate-200" />

      <SectionHeader
        title="Medical Contacts"
        description="Information about your healthcare providers."
      />

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <label className="mb-2 block font-medium">
            Primary Care Physician
          </label>

          <input
            {...register("physicianName")}
            className="w-full rounded-xl border border-slate-300 p-4"
          />

        </div>

        <div>

          <label className="mb-2 block font-medium">
            Physician Phone
          </label>

          <input
            {...register("physicianPhone")}
            className="w-full rounded-xl border border-slate-300 p-4"
          />

        </div>

        <div>

          <label className="mb-2 block font-medium">
            Preferred Hospital
          </label>

          <input
            {...register("preferredHospital")}
            className="w-full rounded-xl border border-slate-300 p-4"
          />

        </div>

      </div>

      {/* Divider */}

      <div className="my-10 border-t border-slate-200" />

      <SectionHeader
        title="Insurance Information"
        description="This information helps us coordinate services when needed."
      />

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <label className="mb-2 block font-medium">
            Insurance Provider
          </label>

          <input
            {...register("insuranceProvider")}
            className="w-full rounded-xl border border-slate-300 p-4"
          />

        </div>

        <div>

          <label className="mb-2 block font-medium">
            Policy Number
          </label>

          <input
            {...register("policyNumber")}
            className="w-full rounded-xl border border-slate-300 p-4"
          />

        </div>

      </div>

    </section>
  );
}