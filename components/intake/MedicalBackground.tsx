"use client";

import { useFormContext } from "react-hook-form";
import SectionHeader from "./SectionHeader";

export default function MedicalBackground() {
  const { register } = useFormContext();

  return (
    <section className="rounded-3xl bg-white p-10 shadow-xl">

      <SectionHeader
        title="Medical Background"
        description="Help us understand the client's health needs so we can provide safe, personalized care."
      />

      {/* Medical Conditions */}

      <div className="mb-10">

        <label className="mb-2 block text-lg font-semibold">
          Existing Medical Conditions
        </label>

        <textarea
          rows={4}
          {...register("medicalConditions")}
          placeholder="Diabetes, Hypertension, Arthritis, Dementia, Parkinson's Disease..."
          className="w-full rounded-xl border border-slate-300 p-4 focus:border-sky-600 focus:outline-none"
        />

      </div>

      {/* Allergies */}

      <div className="mb-10">

        <label className="mb-2 block text-lg font-semibold">
          Allergies
        </label>

        <textarea
          rows={3}
          {...register("allergies")}
          placeholder="Food allergies, medication allergies, environmental allergies..."
          className="w-full rounded-xl border border-slate-300 p-4"
        />

      </div>

      {/* Medications */}

      <div className="mb-10">

        <label className="mb-2 block text-lg font-semibold">
          Current Medications
        </label>

        <textarea
          rows={4}
          {...register("medications")}
          placeholder="Please list medications and dosages."
          className="w-full rounded-xl border border-slate-300 p-4"
        />

      </div>

      {/* Mobility */}

      <div className="border-t pt-10">

        <h3 className="text-2xl font-semibold mb-6">

          Mobility

        </h3>

        <div className="grid md:grid-cols-2 gap-6">

          <div>

            <label className="font-medium block mb-3">
              Mobility Status
            </label>

            <select
              {...register("mobility")}
              className="w-full rounded-xl border border-slate-300 p-4"
            >
              <option value="">Select</option>
              <option>Independent</option>
              <option>Uses Cane</option>
              <option>Uses Walker</option>
              <option>Wheelchair</option>
              <option>Bed Bound</option>
              <option>Requires Assistance</option>
            </select>

          </div>

          <div>

            <label className="font-medium block mb-3">
              Fall History
            </label>

            <select
              {...register("falls")}
              className="w-full rounded-xl border border-slate-300 p-4"
            >
              <option>No</option>
              <option>Yes</option>
            </select>

          </div>

        </div>

      </div>

      {/* Vision & Hearing */}

      <div className="border-t pt-10 mt-10">

        <h3 className="text-2xl font-semibold mb-6">

          Vision & Hearing

        </h3>

        <div className="grid md:grid-cols-2 gap-6">

          <div>

            <label className="font-medium block mb-3">

              Vision

            </label>

            <select
              {...register("vision")}
              className="w-full rounded-xl border border-slate-300 p-4"
            >
              <option>Normal</option>
              <option>Glasses</option>
              <option>Visually Impaired</option>
            </select>

          </div>

          <div>

            <label className="font-medium block mb-3">

              Hearing

            </label>

            <select
              {...register("hearing")}
              className="w-full rounded-xl border border-slate-300 p-4"
            >
              <option>Normal</option>
              <option>Hearing Aid</option>
              <option>Hearing Impaired</option>
            </select>

          </div>

        </div>

      </div>

      {/* Cognitive */}

      <div className="border-t pt-10 mt-10">

        <h3 className="text-2xl font-semibold mb-6">

          Cognitive Health

        </h3>

        <div className="grid md:grid-cols-2 gap-6">

          <div>

            <label className="font-medium block mb-3">

              Memory Status

            </label>

            <select
              {...register("memory")}
              className="w-full rounded-xl border border-slate-300 p-4"
            >
              <option>Normal</option>
              <option>Mild Memory Loss</option>
              <option>Dementia</option>
              <option>Alzheimer's Disease</option>
            </select>

          </div>

          <div>

            <label className="font-medium block mb-3">

              Orientation

            </label>

            <select
              {...register("orientation")}
              className="w-full rounded-xl border border-slate-300 p-4"
            >
              <option>Fully Oriented</option>
              <option>Sometimes Confused</option>
              <option>Frequently Confused</option>
            </select>

          </div>

        </div>

      </div>

      {/* Hospital */}

      <div className="border-t pt-10 mt-10">

        <label className="block mb-2 text-lg font-semibold">

          Recent Hospitalizations or Surgeries

        </label>

        <textarea
          rows={4}
          {...register("hospitalizations")}
          placeholder="Describe recent admissions, surgeries, or treatments."
          className="w-full rounded-xl border border-slate-300 p-4"
        />

      </div>

      {/* Diet */}

      <div className="border-t pt-10 mt-10">

        <label className="block mb-2 text-lg font-semibold">

          Dietary Restrictions

        </label>

        <textarea
          rows={3}
          {...register("diet")}
          placeholder="Low sodium, diabetic diet, allergies, vegetarian..."
          className="w-full rounded-xl border border-slate-300 p-4"
        />

      </div>

      {/* Notes */}

      <div className="border-t pt-10 mt-10">

        <label className="block mb-2 text-lg font-semibold">

          Additional Medical Notes

        </label>

        <textarea
          rows={5}
          {...register("medicalNotes")}
          placeholder="Anything else caregivers should know?"
          className="w-full rounded-xl border border-slate-300 p-4"
        />

      </div>

    </section>
  );
}