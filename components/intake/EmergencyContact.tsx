"use client";

import { useFormContext } from "react-hook-form";
import SectionHeader from "./SectionHeader";

export default function EmergencyContact() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <section className="rounded-2xl bg-white p-5 shadow-xl sm:rounded-3xl sm:p-8 lg:p-10">

      {/* =====================================================
          PRIMARY EMERGENCY CONTACT
      ===================================================== */}

      <SectionHeader
        title="Emergency Contact"
        description="Who should we contact in case of an emergency?"
      />

      <div className="grid gap-6 md:grid-cols-2">

        {/* Name */}

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Emergency Contact Name
            <span className="ml-1 text-red-500">*</span>
          </label>

          <input
            {...register("emergencyName")}
            autoComplete="name"
            className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
            placeholder="John Smith"
          />

          {errors.emergencyName && (
            <p className="mt-2 text-sm text-red-500">
              {errors.emergencyName.message as string}
            </p>
          )}
        </div>

        {/* Relationship */}

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Relationship to Client
          </label>

          <input
            {...register("emergencyRelationship")}
            autoComplete="off"
            className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
            placeholder="Son, Daughter, Spouse..."
          />
        </div>

        {/* Phone */}

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Phone Number
            <span className="ml-1 text-red-500">*</span>
          </label>

          <input
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            {...register("emergencyPhone")}
            className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
            placeholder="(555) 555-5555"
          />

          {errors.emergencyPhone && (
            <p className="mt-2 text-sm text-red-500">
              {errors.emergencyPhone.message as string}
            </p>
          )}
        </div>

        {/* Email */}

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Email Address
          </label>

          <input
            type="email"
            inputMode="email"
            autoComplete="email"
            {...register("emergencyEmail")}
            className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
            placeholder="email@example.com"
          />

          {errors.emergencyEmail && (
            <p className="mt-2 text-sm text-red-500">
              {errors.emergencyEmail.message as string}
            </p>
          )}
        </div>

        {/* Address */}

        <div className="md:col-span-2">
          <label className="mb-2 block font-medium text-slate-800">
            Address
          </label>

          <input
            {...register("emergencyAddress")}
            autoComplete="street-address"
            className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
            placeholder="Street Address"
          />
        </div>

      </div>

      {/* =====================================================
          SECONDARY EMERGENCY CONTACT
      ===================================================== */}

      <div className="my-10 border-t border-slate-200" />

      <SectionHeader
        title="Secondary Emergency Contact"
        description="Optional backup contact."
      />

      <div className="grid gap-6 md:grid-cols-2">

        {/* Name */}

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Name
          </label>

          <input
            {...register("secondaryEmergencyName")}
            className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
            placeholder="Jane Smith"
          />
        </div>

        {/* Relationship */}

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Relationship to Client
          </label>

          <input
            {...register("secondaryEmergencyRelationship")}
            className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
            placeholder="Son, Daughter, Friend..."
          />
        </div>

        {/* Phone */}

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Phone Number
          </label>

          <input
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            {...register("secondaryEmergencyPhone")}
            className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
            placeholder="(555) 555-5555"
          />
        </div>

        {/* Email */}

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Email Address
          </label>

          <input
            type="email"
            inputMode="email"
            autoComplete="email"
            {...register("secondaryEmergencyEmail")}
            className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
            placeholder="email@example.com"
          />

          {errors.secondaryEmergencyEmail && (
            <p className="mt-2 text-sm text-red-500">
              {errors.secondaryEmergencyEmail.message as string}
            </p>
          )}
        </div>

      </div>

      {/* =====================================================
          MEDICAL CONTACTS
      ===================================================== */}

      <div className="my-10 border-t border-slate-200" />

      <SectionHeader
        title="Medical Contacts"
        description="Information about your healthcare providers."
      />

      <div className="grid gap-6 md:grid-cols-2">

        {/* Physician */}

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Primary Care Physician
          </label>

          <input
            {...register("physicianName")}
            className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
            placeholder="Dr. Jane Smith"
          />
        </div>

        {/* Physician Phone */}

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Physician Phone
          </label>

          <input
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            {...register("physicianPhone")}
            className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
            placeholder="(555) 555-5555"
          />
        </div>

        {/* Hospital */}

        <div className="md:col-span-2">
          <label className="mb-2 block font-medium text-slate-800">
            Preferred Hospital
          </label>

          <input
            {...register("preferredHospital")}
            className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
            placeholder="Preferred hospital or medical facility"
          />
        </div>

      </div>

      {/* =====================================================
          INSURANCE
      ===================================================== */}

      <div className="my-10 border-t border-slate-200" />

      <SectionHeader
        title="Insurance Information"
        description="This information helps us coordinate services when needed."
      />

      <div className="grid gap-6 md:grid-cols-2">

        {/* Insurance Provider */}

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Insurance Provider
          </label>

          <input
            {...register("insuranceProvider")}
            className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
            placeholder="Insurance company name"
          />
        </div>

        {/* Policy Number */}

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Policy Number
          </label>

          <input
            {...register("policyNumber")}
            className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
            placeholder="Policy number"
          />
        </div>

      </div>

    </section>
  );
}