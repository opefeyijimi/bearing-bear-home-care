"use client";

import { useFormContext } from "react-hook-form";
import SectionHeader from "./SectionHeader";

const assistanceItems = [
  { label: "Bathing", name: "adlBathing" },
  { label: "Dressing", name: "adlDressing" },
  { label: "Grooming", name: "adlGrooming" },
  { label: "Toileting", name: "adlToileting" },
  { label: "Eating", name: "adlEating" },
  { label: "Walking / Mobility", name: "adlMobility" },
  { label: "Transfers (Bed / Chair)", name: "adlTransfers" },
];

const householdItems = [
  { label: "Meal Preparation", name: "iadlMeals" },
  { label: "Medication Reminders", name: "iadlMedication" },
  { label: "Laundry", name: "iadlLaundry" },
  { label: "Light Housekeeping", name: "iadlHousekeeping" },
  { label: "Shopping / Errands", name: "iadlShopping" },
  { label: "Transportation", name: "iadlTransportation" },
  { label: "Companionship", name: "iadlCompanionship" },
];

export default function DailyLiving() {
  const { register } = useFormContext();

  return (
    <section className="rounded-3xl bg-white p-10 shadow-xl">

      <SectionHeader
        title="Activities of Daily Living"
        description="Tell us which daily activities the client needs assistance with."
      />

      {/* Personal Care */}

      <div className="mb-12">

        <h3 className="mb-6 text-2xl font-semibold text-slate-900">
          Personal Care (ADLs)
        </h3>

        <div className="grid gap-5 md:grid-cols-2">

          {assistanceItems.map((item) => (
            <label
              key={item.name}
              className="flex items-center gap-4 rounded-xl border border-slate-200 p-5 hover:border-sky-500 hover:bg-sky-50 transition cursor-pointer"
            >
              <input
                type="checkbox"
                {...register(item.name)}
                className="h-5 w-5 accent-sky-600"
              />

              <span className="text-slate-700 font-medium">
                {item.label}
              </span>
            </label>
          ))}

        </div>

      </div>

      {/* Household */}

      <div className="border-t pt-10">

        <h3 className="mb-6 text-2xl font-semibold text-slate-900">
          Household Assistance (IADLs)
        </h3>

        <div className="grid gap-5 md:grid-cols-2">

          {householdItems.map((item) => (
            <label
              key={item.name}
              className="flex items-center gap-4 rounded-xl border border-slate-200 p-5 hover:border-sky-500 hover:bg-sky-50 transition cursor-pointer"
            >
              <input
                type="checkbox"
                {...register(item.name)}
                className="h-5 w-5 accent-sky-600"
              />

              <span className="text-slate-700 font-medium">
                {item.label}
              </span>
            </label>
          ))}

        </div>

      </div>

      {/* Notes */}

      <div className="mt-12 border-t pt-10">

        <label className="mb-3 block text-lg font-semibold">
          Additional Assistance Notes
        </label>

        <textarea
          rows={5}
          {...register("dailyLivingNotes")}
          placeholder="Describe any specific routines, limitations, or assistance required."
          className="w-full rounded-xl border border-slate-300 p-4 focus:border-sky-600 focus:outline-none"
        />

      </div>

    </section>
  );
}