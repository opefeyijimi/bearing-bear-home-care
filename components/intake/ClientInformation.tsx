"use client";

import { useFormContext } from "react-hook-form";
import SectionHeader from "./SectionHeader";

export default function ClientInformation() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <section className="rounded-3xl bg-white p-10 shadow-xl">

      <SectionHeader
        title="Client Information"
        description="Tell us about the individual receiving care."
      />

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <label className="block mb-2 font-medium">

            Full Name

          </label>

          <input
            {...register("clientName")}
            className="w-full rounded-xl border border-slate-300 p-4 focus:border-sky-600 focus:outline-none"
          />

          <p className="mt-2 text-sm text-red-500">
            {errors.clientName?.message as string}
          </p>

        </div>

        <div>

          <label className="block mb-2 font-medium">

            Date of Birth

          </label>

          <input
            type="date"
            {...register("dateOfBirth")}
            className="w-full rounded-xl border border-slate-300 p-4"
          />

        </div>

        <div>

          <label className="block mb-2 font-medium">

            Phone Number

          </label>

          <input
            {...register("phone")}
            className="w-full rounded-xl border border-slate-300 p-4"
          />

        </div>

        <div>

          <label className="block mb-2 font-medium">

            Email

          </label>

          <input
            type="email"
            {...register("email")}
            className="w-full rounded-xl border border-slate-300 p-4"
          />

        </div>

        <div className="md:col-span-2">

          <label className="block mb-2 font-medium">

            Home Address

          </label>

          <input
            {...register("address")}
            className="w-full rounded-xl border border-slate-300 p-4"
          />

        </div>

        <div>

          <label className="block mb-2 font-medium">

            Preferred Language

          </label>

          <input
            {...register("language")}
            className="w-full rounded-xl border border-slate-300 p-4"
          />

        </div>

        <div>

          <label className="block mb-2 font-medium">

            Marital Status

          </label>

          <select
            {...register("maritalStatus")}
            className="w-full rounded-xl border border-slate-300 p-4"
          >
            <option value="">Select</option>
            <option>Single</option>
            <option>Married</option>
            <option>Widowed</option>
            <option>Divorced</option>
          </select>

        </div>

      </div>

    </section>
  );
}