"use client";

import { useFormContext } from "react-hook-form";
import SectionHeader from "./SectionHeader";

export default function HomeEnvironment() {
  const { register } = useFormContext();

  return (
    <section className="rounded-3xl bg-white p-10 shadow-xl">

      <SectionHeader
        title="Home Environment"
        description="Please tell us about the client's living environment so we can prepare our caregivers appropriately."
      />

      {/* Living Arrangement */}

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <label className="mb-2 block font-medium">
            Living Arrangement
          </label>

          <select
            {...register("livingArrangement")}
            className="w-full rounded-xl border border-slate-300 p-4"
          >
            <option value="">Select</option>
            <option>Lives Alone</option>
            <option>Lives with Spouse</option>
            <option>Lives with Family</option>
            <option>Assisted Living Facility</option>
            <option>Retirement Community</option>
            <option>Other</option>
          </select>

        </div>

        <div>

          <label className="mb-2 block font-medium">
            Home Type
          </label>

          <select
            {...register("homeType")}
            className="w-full rounded-xl border border-slate-300 p-4"
          >
            <option value="">Select</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Condominium</option>
            <option>Retirement Home</option>
            <option>Other</option>
          </select>

        </div>

      </div>

      {/* Accessibility */}

      <div className="mt-12 border-t pt-10">

        <h3 className="mb-6 text-2xl font-semibold">
          Accessibility
        </h3>

        <div className="grid gap-5 md:grid-cols-2">

          <label className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 hover:bg-sky-50 transition">

            <input
              type="checkbox"
              {...register("hasStairs")}
              className="h-5 w-5 accent-sky-600"
            />

            Stairs in Home

          </label>

          <label className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 hover:bg-sky-50 transition">

            <input
              type="checkbox"
              {...register("hasRamp")}
              className="h-5 w-5 accent-sky-600"
            />

            Wheelchair Ramp

          </label>

          <label className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 hover:bg-sky-50 transition">

            <input
              type="checkbox"
              {...register("hasElevator")}
              className="h-5 w-5 accent-sky-600"
            />

            Elevator Available

          </label>

          <label className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 hover:bg-sky-50 transition">

            <input
              type="checkbox"
              {...register("accessibleBathroom")}
              className="h-5 w-5 accent-sky-600"
            />

            Accessible Bathroom

          </label>

        </div>

      </div>

      {/* Safety Equipment */}

      <div className="mt-12 border-t pt-10">

        <h3 className="mb-6 text-2xl font-semibold">
          Safety Equipment
        </h3>

        <div className="grid gap-5 md:grid-cols-2">

          <label className="flex items-center gap-4 rounded-xl border border-slate-200 p-4">

            <input
              type="checkbox"
              {...register("grabBars")}
              className="h-5 w-5 accent-sky-600"
            />

            Grab Bars Installed

          </label>

          <label className="flex items-center gap-4 rounded-xl border border-slate-200 p-4">

            <input
              type="checkbox"
              {...register("showerChair")}
              className="h-5 w-5 accent-sky-600"
            />

            Shower Chair

          </label>

          <label className="flex items-center gap-4 rounded-xl border border-slate-200 p-4">

            <input
              type="checkbox"
              {...register("hospitalBed")}
              className="h-5 w-5 accent-sky-600"
            />

            Hospital Bed

          </label>

          <label className="flex items-center gap-4 rounded-xl border border-slate-200 p-4">

            <input
              type="checkbox"
              {...register("emergencyAlert")}
              className="h-5 w-5 accent-sky-600"
            />

            Emergency Alert System

          </label>

        </div>

      </div>

      {/* Mobility Aids */}

      <div className="mt-12 border-t pt-10">

        <label className="mb-2 block text-lg font-semibold">
          Mobility Aids Used
        </label>

        <textarea
          rows={3}
          {...register("mobilityAids")}
          placeholder="Walker, wheelchair, cane, scooter..."
          className="w-full rounded-xl border border-slate-300 p-4"
        />

      </div>

      {/* Safety Concerns */}

      <div className="mt-12 border-t pt-10">

        <label className="mb-2 block text-lg font-semibold">
          Safety Concerns
        </label>

        <textarea
          rows={4}
          {...register("homeSafetyConcerns")}
          placeholder="Loose rugs, poor lighting, pets, firearms, trip hazards..."
          className="w-full rounded-xl border border-slate-300 p-4"
        />

      </div>

      {/* Additional Notes */}

      <div className="mt-12 border-t pt-10">

        <label className="mb-2 block text-lg font-semibold">
          Additional Home Notes
        </label>

        <textarea
          rows={5}
          {...register("homeNotes")}
          placeholder="Anything else our caregivers should know about the home?"
          className="w-full rounded-xl border border-slate-300 p-4"
        />

      </div>

    </section>
  );
}