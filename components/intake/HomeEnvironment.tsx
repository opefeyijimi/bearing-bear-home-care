"use client";

import { useFormContext } from "react-hook-form";
import SectionHeader from "./SectionHeader";

export default function HomeEnvironment() {
  const { register } = useFormContext();

  return (
    <section className="rounded-3xl bg-white p-5 shadow-xl sm:p-8 lg:p-10">

      <SectionHeader
        title="Home Environment"
        description="Tell us about the client's home and living environment so we can provide safe and comfortable companion care."
      />

      {/* Living Arrangement */}

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Living Arrangement
          </label>

          <select
            {...register("livingArrangement")}
            className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-700 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
          >
            <option value="">Select</option>
            <option value="alone">Lives Alone</option>
            <option value="spouse">Lives With Spouse/Partner</option>
            <option value="family">Lives With Family</option>
            <option value="caregiver">Lives With Caregiver</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Home Type */}

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Home Type
          </label>

          <select
            {...register("homeType")}
            className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-700 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
          >
            <option value="">Select</option>
            <option value="single-family">Single-Family Home</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condominium</option>
            <option value="townhouse">Townhouse</option>
            <option value="assisted-living">Assisted Living</option>
            <option value="other">Other</option>
          </select>
        </div>

      </div>

      {/* Accessibility */}

      <div className="my-10 border-t border-slate-200" />

      <SectionHeader
        title="Accessibility"
        description="Please let us know about features that may affect movement around the home."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-4 hover:bg-slate-50">
          <input
            type="checkbox"
            {...register("hasStairs")}
            className="h-5 w-5 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
          />

          <span className="text-sm font-medium text-slate-700">
            Stairs
          </span>
        </label>

        <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-4 hover:bg-slate-50">
          <input
            type="checkbox"
            {...register("hasRamp")}
            className="h-5 w-5 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
          />

          <span className="text-sm font-medium text-slate-700">
            Wheelchair Ramp
          </span>
        </label>

        <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-4 hover:bg-slate-50">
          <input
            type="checkbox"
            {...register("hasElevator")}
            className="h-5 w-5 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
          />

          <span className="text-sm font-medium text-slate-700">
            Elevator
          </span>
        </label>

        <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-4 hover:bg-slate-50">
          <input
            type="checkbox"
            {...register("accessibleBathroom")}
            className="h-5 w-5 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
          />

          <span className="text-sm font-medium text-slate-700">
            Accessible Bathroom
          </span>
        </label>

      </div>

      {/* Existing Safety / Support Equipment */}

      <div className="my-10 border-t border-slate-200" />

      <SectionHeader
        title="Home Safety & Support Features"
        description="Select any features currently available in the home."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-4 hover:bg-slate-50">
          <input
            type="checkbox"
            {...register("grabBars")}
            className="h-5 w-5 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
          />

          <span className="text-sm font-medium text-slate-700">
            Grab Bars
          </span>
        </label>

        <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-4 hover:bg-slate-50">
          <input
            type="checkbox"
            {...register("showerChair")}
            className="h-5 w-5 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
          />

          <span className="text-sm font-medium text-slate-700">
            Shower Chair
          </span>
        </label>

        <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-4 hover:bg-slate-50">
          <input
            type="checkbox"
            {...register("emergencyAlert")}
            className="h-5 w-5 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
          />

          <span className="text-sm font-medium text-slate-700">
            Emergency Alert
          </span>
        </label>

        <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-4 hover:bg-slate-50">
          <input
            type="checkbox"
            {...register("hospitalBed")}
            className="h-5 w-5 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
          />

          <span className="text-sm font-medium text-slate-700">
            Hospital Bed
          </span>
        </label>

      </div>

      {/* Mobility Aids */}

      <div className="mt-8">

        <label className="mb-2 block font-medium text-slate-800">
          Mobility Aids
        </label>

        <input
          {...register("mobilityAids")}
          placeholder="Examples: walker, wheelchair, cane, rollator..."
          className="w-full rounded-xl border border-slate-300 p-4 text-slate-700 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
        />

      </div>

      {/* Safety Concerns */}

      <div className="mt-6">

        <label className="mb-2 block font-medium text-slate-800">
          Home Safety Concerns
        </label>

        <textarea
          {...register("homeSafetyConcerns")}
          rows={4}
          placeholder="Please describe any safety concerns, areas that may require attention, or potential hazards in the home."
          className="w-full resize-y rounded-xl border border-slate-300 p-4 text-slate-700 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
        />

      </div>

      {/* Additional Notes */}

      <div className="mt-6">

        <label className="mb-2 block font-medium text-slate-800">
          Additional Home Information
        </label>

        <textarea
          {...register("homeNotes")}
          rows={4}
          placeholder="Please provide any other information about the client's home environment that may help us prepare for care."
          className="w-full resize-y rounded-xl border border-slate-300 p-4 text-slate-700 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
        />

      </div>

      {/* Notice */}

      <div className="mt-8 rounded-2xl bg-sky-50 p-5">
        <p className="text-sm leading-6 text-sky-800">
          This information helps us understand the client's living
          environment and identify ways to make companion care safe,
          comfortable, and supportive.
        </p>
      </div>

    </section>
  );
}