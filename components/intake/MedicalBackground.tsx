"use client";

import { useFormContext } from "react-hook-form";
import SectionHeader from "./SectionHeader";

export default function MedicalBackground() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <section className="rounded-2xl bg-white p-5 shadow-xl sm:rounded-3xl sm:p-8 lg:p-10">

      {/* =====================================================
          MEDICAL CONDITIONS
      ===================================================== */}

      <SectionHeader
        title="Medical Background"
        description="Please provide information about the client's current and past medical background."
      />

      <div className="space-y-8">

        {/* Medical Conditions */}

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Medical Conditions
          </label>

          <textarea
            {...register("medicalConditions")}
            rows={4}
            className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
            placeholder="Please list any medical conditions, diagnoses, or chronic health concerns."
          />

          {errors.medicalConditions && (
            <p className="mt-2 text-sm text-red-500">
              {errors.medicalConditions.message as string}
            </p>
          )}
        </div>

        {/* Allergies */}

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Allergies
          </label>

          <textarea
            {...register("allergies")}
            rows={3}
            className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
            placeholder="List any known allergies, including medication, food, or environmental allergies. If none, enter 'None'."
          />
        </div>

        {/* Medications */}

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Current Medications
          </label>

          <textarea
            {...register("medications")}
            rows={4}
            className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
            placeholder="List current medications if known, including medication names and dosage information."
          />
        </div>

      </div>

      {/* =====================================================
          MOBILITY & FALLS
      ===================================================== */}

      <div className="my-10 border-t border-slate-200" />

      <SectionHeader
        title="Mobility & Fall History"
        description="Help us understand the client's mobility and safety needs."
      />

      <div className="grid gap-6 md:grid-cols-2">

        {/* Mobility */}

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Mobility
          </label>

          <select
            {...register("mobility")}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
          >
            <option value="">Select mobility level</option>
            <option value="independent">
              Independent
            </option>
            <option value="cane">
              Uses a cane
            </option>
            <option value="walker">
              Uses a walker
            </option>
            <option value="wheelchair">
              Uses a wheelchair
            </option>
            <option value="assistance">
              Requires assistance
            </option>
            <option value="limited">
              Severely limited mobility
            </option>
          </select>
        </div>

        {/* Falls */}

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Fall History
          </label>

          <select
            {...register("falls")}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
          >
            <option value="">Select an option</option>
            <option value="none">
              No known falls
            </option>
            <option value="past">
              Previous falls
            </option>
            <option value="recent">
              Recent fall
            </option>
            <option value="frequent">
              Frequent falls
            </option>
            <option value="unknown">
              Unknown
            </option>
          </select>
        </div>

      </div>

      {/* =====================================================
          VISION & HEARING
      ===================================================== */}

      <div className="my-10 border-t border-slate-200" />

      <SectionHeader
        title="Vision & Hearing"
        description="Tell us about any vision or hearing considerations."
      />

      <div className="grid gap-6 md:grid-cols-2">

        {/* Vision */}

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Vision
          </label>

          <select
            {...register("vision")}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
          >
            <option value="">Select an option</option>
            <option value="normal">
              No significant difficulty
            </option>
            <option value="glasses">
              Uses glasses
            </option>
            <option value="limited">
              Limited vision
            </option>
            <option value="blind">
              Blind
            </option>
            <option value="unknown">
              Unknown
            </option>
          </select>
        </div>

        {/* Hearing */}

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Hearing
          </label>

          <select
            {...register("hearing")}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
          >
            <option value="">Select an option</option>
            <option value="normal">
              No significant difficulty
            </option>
            <option value="hearing-aid">
              Uses hearing aid
            </option>
            <option value="limited">
              Limited hearing
            </option>
            <option value="deaf">
              Deaf
            </option>
            <option value="unknown">
              Unknown
            </option>
          </select>
        </div>

      </div>

      {/* =====================================================
          MEMORY & ORIENTATION
      ===================================================== */}

      <div className="my-10 border-t border-slate-200" />

      <SectionHeader
        title="Memory & Orientation"
        description="Please provide any information that may help the caregiver understand the client's cognitive needs."
      />

      <div className="grid gap-6 md:grid-cols-2">

        {/* Memory */}

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Memory
          </label>

          <select
            {...register("memory")}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
          >
            <option value="">Select an option</option>
            <option value="normal">
              No significant concerns
            </option>
            <option value="occasional">
              Occasional memory difficulties
            </option>
            <option value="frequent">
              Frequent memory difficulties
            </option>
            <option value="significant">
              Significant memory impairment
            </option>
            <option value="unknown">
              Unknown
            </option>
          </select>
        </div>

        {/* Orientation */}

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Orientation
          </label>

          <select
            {...register("orientation")}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
          >
            <option value="">Select an option</option>
            <option value="fully-oriented">
              Fully oriented
            </option>
            <option value="occasionally-confused">
              Occasionally confused
            </option>
            <option value="frequently-confused">
              Frequently confused
            </option>
            <option value="requires-assistance">
              Requires assistance
            </option>
            <option value="unknown">
              Unknown
            </option>
          </select>
        </div>

      </div>

      {/* =====================================================
          HOSPITALIZATION & DIET
      ===================================================== */}

      <div className="my-10 border-t border-slate-200" />

      <SectionHeader
        title="Additional Medical Information"
        description="Provide any other relevant information about the client's health."
      />

      <div className="space-y-8">

        {/* Hospitalizations */}

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Recent Hospitalizations
          </label>

          <textarea
            {...register("hospitalizations")}
            rows={4}
            className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
            placeholder="Please describe any recent hospitalizations, surgeries, or major medical events."
          />
        </div>

        {/* Diet */}

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Dietary Needs
          </label>

          <textarea
            {...register("diet")}
            rows={3}
            className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
            placeholder="Describe any dietary restrictions, preferences, or special dietary requirements."
          />
        </div>

        {/* Medical Notes */}

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Additional Medical Notes
          </label>

          <textarea
            {...register("medicalNotes")}
            rows={5}
            className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
            placeholder="Please provide any additional medical information that may be important for providing safe and appropriate companion care."
          />
        </div>

      </div>

      {/* Informational notice */}

      <div className="mt-10 rounded-2xl border border-sky-100 bg-sky-50 p-5">
        <p className="text-sm leading-6 text-slate-600">
          Please provide information as accurately as possible. This
          information helps us understand the client's needs and prepare
          appropriate companion care services.
        </p>
      </div>

    </section>
  );
}