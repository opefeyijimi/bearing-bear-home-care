"use client";

import { useFormContext } from "react-hook-form";
import SectionHeader from "./SectionHeader";

export default function ClientInformation() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <section className="w-full rounded-3xl bg-white p-5 shadow-xl sm:p-8 lg:p-10">
      <SectionHeader
        title="Client Information"
        description="Tell us about the individual receiving care."
      />

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Full Name */}
        <div>
          <label
            htmlFor="clientName"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Full Name <span className="text-red-500">*</span>
          </label>

          <input
            id="clientName"
            type="text"
            autoComplete="name"
            placeholder="Enter client's full name"
            {...register("clientName")}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
          />

          {errors.clientName && (
            <p className="mt-2 text-sm text-red-500">
              {errors.clientName.message as string}
            </p>
          )}
        </div>

        {/* Date of Birth */}
         <div>
  <label className="mb-2 block text-sm font-semibold text-slate-700">
    How old are you?<span className="text-red-500">*</span>
  </label>

  <input
    type="number"
    min="18"
    max="120"
    {...register("age", {
      valueAsNumber: true,
    })}
    className="w-full rounded-xl border border-slate-300 p-4 focus:border-sky-600 focus:outline-none"
    
    placeholder="Enter your age"
  />

  <p className="mt-2 text-sm text-red-500">
    {errors.age?.message as string}
  </p>

        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>

          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+1 (561) 660-4145"
            {...register("phone")}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
          />

          <p className="mt-2 text-xs text-slate-500">
            Include the country code, e.g. +1 for the United States.
          </p>

          {errors.phone && (
            <p className="mt-2 text-sm text-red-500">
              {errors.phone.message as string}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Email Address <span className="text-red-500">*</span>
          </label>

          <input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="name@example.com"
            {...register("email")}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
          />

          {errors.email && (
            <p className="mt-2 text-sm text-red-500">
              {errors.email.message as string}
            </p>
          )}
        </div>

        {/* Home Address */}
        <div className="md:col-span-2">
          <label
            htmlFor="address"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Home Address <span className="text-red-500">*</span>
          </label>

          <input
            id="address"
            type="text"
            autoComplete="street-address"
            placeholder="Enter client's home address"
            {...register("address")}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
          />

          {errors.address && (
            <p className="mt-2 text-sm text-red-500">
              {errors.address.message as string}
            </p>
          )}
        </div>

        {/* Preferred Language */}
        <div>
          <label
            htmlFor="language"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Preferred Language <span className="text-red-500">*</span>
          </label>

          <select
            id="language"
            autoComplete="language"
            {...register("language")}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 text-base text-slate-900 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
          >
            <option value="">Select a language</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="Other">Other</option>
          </select>

          {errors.language && (
            <p className="mt-2 text-sm text-red-500">
              {errors.language.message as string}
            </p>
          )}
        </div>

        {/* Marital Status */}
        <div>
          <label
            htmlFor="maritalStatus"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Marital Status
          </label>

          <select
            id="maritalStatus"
            autoComplete="off"
            {...register("maritalStatus")}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 text-base text-slate-900 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
          >
            <option value="">Select status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Widowed">Widowed</option>
            <option value="Divorced">Divorced</option>
          </select>

          {errors.maritalStatus && (
            <p className="mt-2 text-sm text-red-500">
              {errors.maritalStatus.message as string}
            </p>
          )}
        </div>
      </div>

      {/* Required field notice */}
      <p className="mt-8 text-sm text-slate-500">
        <span className="text-red-500">*</span> Required fields
      </p>
    </section>
  );
}