"use client";

import { useFormContext } from "react-hook-form";
import SectionHeader from "./SectionHeader";

export default function Consent() {
  const { register } = useFormContext();

  return (
    <section className="rounded-3xl bg-white p-10 shadow-xl">

      <SectionHeader
        title="Consent & Authorization"
        description="Please review the statements below and acknowledge your agreement before submitting this intake form."
      />

      {/* Information Accuracy */}

      <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">

        <label className="flex items-start gap-4">

          <input
            type="checkbox"
            {...register("informationAccurate")}
            className="mt-1 h-5 w-5 accent-sky-600"
          />

          <span className="leading-7">

            I certify that the information provided in this intake form is
            accurate and complete to the best of my knowledge.

          </span>

        </label>

      </div>

      {/* Privacy */}

      <div className="mt-6 rounded-2xl border border-slate-200 p-6 bg-slate-50">

        <label className="flex items-start gap-4">

          <input
            type="checkbox"
            {...register("privacyConsent")}
            className="mt-1 h-5 w-5 accent-sky-600"
          />

          <span className="leading-7">

            I understand that the personal information collected will be used
            solely for providing home care services and will be handled in
            accordance with applicable privacy regulations.

          </span>

        </label>

      </div>

      {/* Service Consent */}

      <div className="mt-6 rounded-2xl border border-slate-200 p-6 bg-slate-50">

        <label className="flex items-start gap-4">

          <input
            type="checkbox"
            {...register("serviceConsent")}
            className="mt-1 h-5 w-5 accent-sky-600"
          />

          <span className="leading-7">

            I authorize Bearing Bear Home Care to assess my care needs and
            contact me regarding the services requested.

          </span>

        </label>

      </div>

      {/* Electronic Communication */}

      <div className="mt-6 rounded-2xl border border-slate-200 p-6 bg-slate-50">

        <label className="flex items-start gap-4">

          <input
            type="checkbox"
            {...register("electronicCommunication")}
            className="mt-1 h-5 w-5 accent-sky-600"
          />

          <span className="leading-7">

            I consent to receive communication regarding my care by email,
            telephone, or SMS.

          </span>

        </label>

      </div>

      {/* Signature */}

      <div className="mt-12 border-t pt-10">

        <h3 className="mb-6 text-2xl font-semibold">

          Electronic Signature

        </h3>

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <label className="mb-2 block font-medium">

              Full Name

            </label>

            <input
              {...register("signatureName")}
              placeholder="Type your full legal name"
              className="w-full rounded-xl border border-slate-300 p-4"
            />

          </div>

          <div>

            <label className="mb-2 block font-medium">

              Relationship to Client

            </label>

            <select
              {...register("relationshipToClient")}
              className="w-full rounded-xl border border-slate-300 p-4"
            >
              <option value="">Select</option>
              <option>Self</option>
              <option>Spouse</option>
              <option>Son</option>
              <option>Daughter</option>
              <option>Parent</option>
              <option>Guardian</option>
              <option>Power of Attorney</option>
              <option>Other</option>
            </select>

          </div>

          <div>

            <label className="mb-2 block font-medium">

              Signature Date

            </label>

            <input
              type="date"
              {...register("signatureDate")}
              className="w-full rounded-xl border border-slate-300 p-4"
            />

          </div>

        </div>

      </div>

      {/* Final Declaration */}

      <div className="mt-12 rounded-2xl bg-sky-50 border border-sky-200 p-8">

        <label className="flex items-start gap-4">

          <input
            type="checkbox"
            {...register("finalAgreement")}
            className="mt-1 h-5 w-5 accent-sky-600"
          />

          <span className="leading-7">

            By checking this box, I acknowledge that I have read and understood
            this intake form and voluntarily agree to submit this information
            electronically.

          </span>

        </label>

      </div>

    </section>
  );
}