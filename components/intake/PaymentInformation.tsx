"use client";

import { useFormContext } from "react-hook-form";
import SectionHeader from "./SectionHeader";

export default function PaymentInformation() {
  const { register } = useFormContext();

  return (
    <section className="rounded-3xl bg-white p-5 shadow-xl sm:p-8 lg:p-10">

      <SectionHeader
        title="Payment & Billing Information"
        description="Please provide the information we need to coordinate billing and service arrangements."
      />

      {/* Responsible Party */}

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Responsible Party
          </label>

          <input
            {...register("responsibleParty")}
            placeholder="Full name of person responsible for payment"
            className="w-full rounded-xl border border-slate-300 p-4 text-slate-700 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Relationship to Client
          </label>

          <input
            {...register("responsibleRelationship")}
            placeholder="Example: Daughter, Son, Spouse, Self"
            className="w-full rounded-xl border border-slate-300 p-4 text-slate-700 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
          />
        </div>

      </div>

      {/* Billing Address */}

      <div className="mt-6">

        <label className="mb-2 block font-medium text-slate-800">
          Billing Address
        </label>

        <input
          {...register("billingAddress")}
          placeholder="Street address, city, state, ZIP code"
          className="w-full rounded-xl border border-slate-300 p-4 text-slate-700 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
        />

      </div>

      {/* Service Information */}

      <div className="my-10 border-t border-slate-200" />

      <SectionHeader
        title="Service Arrangements"
        description="Tell us when and how services are expected to begin."
      />

      <div className="grid gap-6 md:grid-cols-2">

        {/* Service Start Date */}

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Preferred Service Start Date
          </label>

          <input
            type="date"
            {...register("serviceStartDate")}
            className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-700 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
          />
        </div>

        {/* Service Schedule */}

        <div>
          <label className="mb-2 block font-medium text-slate-800">
            Expected Service Schedule
          </label>

          <select
            {...register("serviceSchedule")}
            className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-700 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
          >
            <option value="">Select</option>
            <option value="occasional">Occasional / As Needed</option>
            <option value="part-time">Part-Time</option>
            <option value="full-time">Full-Time</option>
            <option value="overnight">Overnight</option>
            <option value="flexible">Flexible</option>
            <option value="not-sure">Not Sure Yet</option>
          </select>
        </div>

      </div>

      {/* Payment Method */}

      <div className="mt-6">

        <label className="mb-2 block font-medium text-slate-800">
          Preferred Payment Method
        </label>

        <select
          {...register("paymentMethod")}
          className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-700 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
        >
          <option value="">Select</option>
          <option value="credit-card">Credit / Debit Card</option>
          <option value="ach">ACH / Bank Transfer</option>
          <option value="check">Check</option>
          <option value="other">Other</option>
          <option value="not-sure">Not Sure Yet</option>
        </select>

      </div>

      {/* Billing Frequency */}

      <div className="mt-6">

        <label className="mb-2 block font-medium text-slate-800">
          Billing Frequency
        </label>

        <select
          {...register("billingFrequency")}
          className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-700 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
        >
          <option value="">Select</option>
          <option value="weekly">Weekly</option>
          <option value="biweekly">Every Two Weeks</option>
          <option value="monthly">Monthly</option>
          <option value="other">Other</option>
          <option value="not-sure">Not Sure Yet</option>
        </select>

      </div>

      {/* Billing Contact Method */}

      <div className="mt-6">

        <label className="mb-2 block font-medium text-slate-800">
          Preferred Billing Contact Method
        </label>

        <select
          {...register("billingContactMethod")}
          className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-700 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
        >
          <option value="">Select</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="text">Text Message</option>
          <option value="mail">Postal Mail</option>
        </select>

      </div>

      {/* Billing Notes */}

      <div className="mt-6">

        <label className="mb-2 block font-medium text-slate-800">
          Additional Billing Information
        </label>

        <textarea
          {...register("billingNotes")}
          rows={4}
          placeholder="Please provide any additional information about billing, payment arrangements, or financial responsibility."
          className="w-full resize-y rounded-xl border border-slate-300 p-4 text-slate-700 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
        />

      </div>

      {/* Payment Security Notice */}

      <div className="mt-8 rounded-2xl bg-slate-50 p-5">

        <p className="text-sm leading-6 text-slate-600">
          For your security, please do not enter credit card numbers,
          bank account numbers, passwords, or other sensitive financial
          credentials into this form. Payment details can be collected
          through a secure payment process after your service arrangements
          have been confirmed.
        </p>

      </div>

    </section>
  );
}