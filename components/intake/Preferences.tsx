"use client";

import { useFormContext } from "react-hook-form";
import SectionHeader from "./SectionHeader";

const hobbies = [
  "Reading",
  "Music",
  "Gardening",
  "Cooking",
  "Walking",
  "Exercise",
  "Television",
  "Movies",
  "Church / Religious Activities",
  "Arts & Crafts",
  "Board Games",
  "Socializing",
];

export default function Preferences() {
  const { register } = useFormContext();

  return (
    <section className="rounded-3xl bg-white p-10 shadow-xl">

      <SectionHeader
        title="Personal Preferences"
        description="Understanding the client's preferences helps us provide care that feels familiar, comfortable, and enjoyable."
      />

      {/* Caregiver Preference */}

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <label className="mb-2 block font-medium">
            Preferred Caregiver Gender
          </label>

          <select
            {...register("preferredGender")}
            className="w-full rounded-xl border border-slate-300 p-4"
          >
            <option value="">No Preference</option>
            <option>Female</option>
            <option>Male</option>
          </select>

        </div>

        <div>

          <label className="mb-2 block font-medium">
            Preferred Language
          </label>

          <input
            {...register("preferredLanguage")}
            className="w-full rounded-xl border border-slate-300 p-4"
            placeholder="English"
          />

        </div>

      </div>

      {/* Hobbies */}

      <div className="mt-12 border-t pt-10">

        <h3 className="mb-6 text-2xl font-semibold">
          Hobbies & Interests
        </h3>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          {hobbies.map((hobby) => (

            <label
              key={hobby}
              className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 hover:bg-sky-50 hover:border-sky-500 transition cursor-pointer"
            >

              <input
                type="checkbox"
                value={hobby}
                {...register("hobbies")}
                className="h-5 w-5 accent-sky-600"
              />

              <span>{hobby}</span>

            </label>

          ))}

        </div>

      </div>

      {/* Pets */}

      <div className="mt-12 border-t pt-10">

        <h3 className="mb-6 text-2xl font-semibold">

          Home Environment

        </h3>

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <label className="mb-2 block font-medium">
              Pets in the Home?
            </label>

            <select
              {...register("pets")}
              className="w-full rounded-xl border border-slate-300 p-4"
            >
              <option>No</option>
              <option>Yes</option>
            </select>

          </div>

          <div>

            <label className="mb-2 block font-medium">
              Smoking in the Home?
            </label>

            <select
              {...register("smoking")}
              className="w-full rounded-xl border border-slate-300 p-4"
            >
              <option>No</option>
              <option>Yes</option>
            </select>

          </div>

        </div>

      </div>

      {/* Schedule */}

      <div className="mt-12 border-t pt-10">

        <h3 className="mb-6 text-2xl font-semibold">

          Preferred Schedule

        </h3>

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <label className="mb-2 block font-medium">
              Preferred Days
            </label>

            <input
              {...register("preferredDays")}
              className="w-full rounded-xl border border-slate-300 p-4"
              placeholder="Monday, Wednesday, Friday"
            />

          </div>

          <div>

            <label className="mb-2 block font-medium">
              Preferred Time
            </label>

            <select
              {...register("preferredTime")}
              className="w-full rounded-xl border border-slate-300 p-4"
            >
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
              <option>Overnight</option>
              <option>No Preference</option>
            </select>

          </div>

        </div>

      </div>

      {/* Religious / Cultural */}

      <div className="mt-12 border-t pt-10">

        <label className="mb-2 block text-lg font-semibold">
          Religious or Cultural Considerations
        </label>

        <textarea
          rows={4}
          {...register("religiousNeeds")}
          className="w-full rounded-xl border border-slate-300 p-4"
          placeholder="Dietary practices, holidays, traditions, customs..."
        />

      </div>

      {/* Notes */}

      <div className="mt-10">

        <label className="mb-2 block text-lg font-semibold">
          Additional Preferences
        </label>

        <textarea
          rows={5}
          {...register("preferencesNotes")}
          className="w-full rounded-xl border border-slate-300 p-4"
          placeholder="Anything else you'd like your caregiver to know?"
        />

      </div>

    </section>
  );
}