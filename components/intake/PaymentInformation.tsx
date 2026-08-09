"use client";

import { useFormContext } from "react-hook-form";
import SectionHeader from "./SectionHeader";

export default function PaymentInformation() {
  const { register } = useFormContext();

  return (
    <section className="rounded-3xl bg-white p-10 shadow-xl">

      <SectionHeader
        title="Payment & Service Information"
        description="Please provide billing and service preferences so we can prepare your care agreement."
      />

      {/* Responsible Party */}

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <label className="mb-2 block font-medium">
            Responsible Party
          </label>

          <input
            {...register("responsibleParty")}
            placeholder="Person responsible for payment"
            className="w-full rounded-xl border border-slate-300 p-4 focus:border-sky-600 focus:outline-none"
          />

        </div>

        <div>

          <label className="mb-2 block font-medium">
            Relationship to Client
          </label>

          <input
            {...register("responsibleRelationship")}
            placeholder="Son, Daughter, Spouse..."
            className="w-full rounded-xl border border-slate-300 p-4"
          />

        </div>

      </div>

      {/* Billing Address */}

      <div className="mt-10">

        <label className="mb-2 block font-medium">
          Billing Address
        </label>

        <textarea
          rows={3}
          {...register("billingAddress")}
          className="w-full rounded-xl border border-slate-300 p-4"
        />

      </div>

      {/* Service Information */}

      <div className="mt-12 border-t pt-10">

        <h3 className="mb-6 text-2xl font-semibold">

          Service Information

        </h3>

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <label className="mb-2 block font-medium">
              Requested Start Date
            </label>

            <input
              type="date"
              {...register("serviceStartDate")}
              className="w-full rounded-xl border border-slate-300 p-4"
            />

          </div>

          <div>

            <label className="mb-2 block font-medium">
              Preferred Schedule
            </label>

            <select
              {...register("serviceSchedule")}
              className="w-full rounded-xl border border-slate-300 p-4"
            >
              <option value="">Select</option>
              <option>Hourly</option>
              <option>Daily</option>
              <option>Weekdays</option>
              <option>Weekends</option>
              <option>24-Hour Care</option>
              <option>Live-In Care</option>
            </select>

          </div>

        </div>

      </div>

      {/* Payment */}

      <div className="mt-12 border-t pt-10">

        <h3 className="mb-6 text-2xl font-semibold">

          Payment Method

        </h3>

        <div className="grid gap-5 md:grid-cols-2">

          <label className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 hover:bg-sky-50">

            <input
              type="radio"
              value="Private Pay"
              {...register("paymentMethod")}
            />

            Private Pay

          </label>

          <label className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 hover:bg-sky-50">

            <input
              type="radio"
              value="Long Term Care Insurance"
              {...register("paymentMethod")}
            />

            Long-Term Care Insurance

          </label>

          <label className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 hover:bg-sky-50">

            <input
              type="radio"
              value="Veterans Benefits"
              {...register("paymentMethod")}
            />

            Veterans Benefits

          </label>

          <label className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 hover:bg-sky-50">

            <input
              type="radio"
              value="Other"
              {...register("paymentMethod")}
            />

            Other

          </label>

        </div>

      </div>

      {/* Billing */}

      <div className="mt-12 border-t pt-10">

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <label className="mb-2 block font-medium">
              Billing Frequency
            </label>

            <select
              {...register("billingFrequency")}
              className="w-full rounded-xl border border-slate-300 p-4"
            >
              <option>Weekly</option>
              <option>Bi-Weekly</option>
              <option>Monthly</option>
            </select>

          </div>

          <div>

            <label className="mb-2 block font-medium">
              Preferred Contact Method
            </label>

            <select
              {...register("billingContactMethod")}
              className="w-full rounded-xl border border-slate-300 p-4"
            >
              <option>Email</option>
              <option>Phone</option>
              <option>Mail</option>
            </select>

          </div>

        </div>

      </div>

      {/* Notes */}

      <div className="mt-12 border-t pt-10">

        <label className="mb-2 block text-lg font-semibold">
          Additional Billing Notes
        </label>

        <textarea
          rows={5}
          {...register("billingNotes")}
          className="w-full rounded-xl border border-slate-300 p-4"
          placeholder="Anything we should know regarding billing or payment?"
        />

      </div>

    </section>
  );
}