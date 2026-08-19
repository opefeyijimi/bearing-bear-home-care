"use client";

import { useFormContext } from "react-hook-form";
import SectionHeader from "./SectionHeader";

interface ActivityItemProps {
  name: string;
  label: string;
  description: string;
}

function ActivityItem({
  name,
  label,
  description,
}: ActivityItemProps) {
  const { register } = useFormContext();

  return (
    <label className="flex cursor-pointer items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-sky-300 hover:bg-sky-50/50">
      <input
        type="checkbox"
        {...register(name)}
        className="mt-1 h-5 w-5 shrink-0 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
      />

      <span>
        <span className="block font-medium text-slate-800">
          {label}
        </span>

        <span className="mt-1 block text-sm leading-5 text-slate-500">
          {description}
        </span>
      </span>
    </label>
  );
}

export default function DailyLiving() {
    const { register } = useFormContext();

  return (
    <section className="rounded-2xl bg-white p-5 shadow-xl sm:rounded-3xl sm:p-8 lg:p-10">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <SectionHeader
        title="Daily Living Assistance"
        description="Tell us which daily activities the client may need assistance with."
      />

      {/* =====================================================
          ACTIVITIES OF DAILY LIVING
      ===================================================== */}

      <div>
        <div className="mb-5">
          <h3 className="text-xl font-bold text-slate-900">
            Activities of Daily Living
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Select the activities where the client may need assistance.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">

          <ActivityItem
            name="adlBathing"
            label="Bathing"
            description="Assistance with bathing or showering."
          />

          <ActivityItem
            name="adlDressing"
            label="Dressing"
            description="Assistance selecting or putting on clothing."
          />

          <ActivityItem
            name="adlGrooming"
            label="Grooming"
            description="Assistance with personal grooming and hygiene."
          />

          <ActivityItem
            name="adlToileting"
            label="Toileting"
            description="Assistance related to bathroom routines."
          />

          <ActivityItem
            name="adlEating"
            label="Eating"
            description="Assistance with eating or meal-related activities."
          />

          <ActivityItem
            name="adlMobility"
            label="Mobility"
            description="Assistance moving safely around the home."
          />

          <ActivityItem
            name="adlTransfers"
            label="Transfers"
            description="Assistance moving between beds, chairs, or other surfaces."
          />

        </div>
      </div>

      {/* =====================================================
          DIVIDER
      ===================================================== */}

      <div className="my-10 border-t border-slate-200" />

      {/* =====================================================
          INSTRUMENTAL ACTIVITIES OF DAILY LIVING
      ===================================================== */}

      <div>
        <div className="mb-5">
          <h3 className="text-xl font-bold text-slate-900">
            Instrumental Activities of Daily Living
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Select the activities where additional support may be helpful.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">

          <ActivityItem
            name="iadlMeals"
            label="Meal Preparation"
            description="Preparing meals and assisting with meal routines."
          />

          <ActivityItem
            name="iadlMedication"
            label="Medication Reminders"
            description="Providing reminders to take medications as directed."
          />

          <ActivityItem
            name="iadlLaundry"
            label="Laundry"
            description="Assistance with washing, drying, folding, or organizing clothing."
          />

          <ActivityItem
            name="iadlHousekeeping"
            label="Light Housekeeping"
            description="Assistance maintaining a clean and comfortable living environment."
          />

          <ActivityItem
            name="iadlShopping"
            label="Shopping"
            description="Assistance with grocery or essential-item shopping."
          />

          <ActivityItem
            name="iadlTransportation"
            label="Transportation Assistance"
            description="Assistance with transportation to appointments, errands, or activities."
          />

          <ActivityItem
            name="iadlCompanionship"
            label="Companionship"
            description="Conversation, social interaction, activities, and meaningful engagement."
          />

        </div>
      </div>

      {/* =====================================================
          NOTES
      ===================================================== */}

      <div className="my-10 border-t border-slate-200" />

      <div>
        <label
          htmlFor="dailyLivingNotes"
          className="mb-2 block font-medium text-slate-800"
        >
          Additional Daily Living Notes
        </label>

        <p className="mb-3 text-sm text-slate-500">
          Tell us anything else about the client's daily routine,
          assistance needs, or preferences that may help us provide
          appropriate companion care.
        </p>

        <textarea
          id="dailyLivingNotes"
          {...register("dailyLivingNotes")}
          rows={5}
          className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
          placeholder="Describe any additional assistance the client may need..."
        />
      </div>

      {/* =====================================================
          INFORMATION NOTICE
      ===================================================== */}

      <div className="mt-8 rounded-2xl border border-sky-100 bg-sky-50 p-5">
        <p className="text-sm leading-6 text-slate-600">
          Selecting an activity does not necessarily mean that the
          client requires medical assistance. These selections help us
          understand the type of companionship and daily living support
          that may be appropriate.
        </p>
      </div>

    </section>
  );
}