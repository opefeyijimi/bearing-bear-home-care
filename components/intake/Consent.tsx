"use client";

import { useFormContext } from "react-hook-form";
import SectionHeader from "./SectionHeader";
import { Turnstile } from "@marsidev/react-turnstile";


interface ConsentProps {
  onTurnstileSuccess: (token: string) => void;
  onTurnstileExpire: () => void;
}

export default function Consent(
  {
  onTurnstileSuccess,
  onTurnstileExpire,
}: ConsentProps
) {
  const {
    register,
    formState: { errors },
  } = useFormContext();


  

  

  return (
    <section className="rounded-3xl bg-white p-5 shadow-xl sm:p-8 lg:p-10">

      <SectionHeader
        title="Consent & Agreement"
        description="Please review the information below and confirm your agreement before submitting the intake form."
      />

      

      {/* Information Accuracy */}

      <div className="space-y-5">

        <span className="font-semibold">Before submitting:</span>{" "}
  Please complete all required fields and acknowledgements.
  Required items are marked with{" "}
  <span className="font-bold text-red-500">*</span>.

        <label className="flex cursor-pointer items-start gap-4 rounded-2xl border border-slate-200 p-5 hover:bg-slate-50">

          <input
            type="checkbox"
            {...register("informationAccurate")}
            className="mt-1 h-5 w-5 shrink-0 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
          />

          <div>
            <p className="font-semibold text-slate-800">
              Accuracy of Information
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              I confirm that the information I have provided in this
              intake form is accurate and complete to the best of my
              knowledge.
               <span className="ml-1 text-red-500">*</span>
            </p>
          </div>

        </label>

        {/* Privacy Consent */}

        <label className="flex cursor-pointer items-start gap-4 rounded-2xl border border-slate-200 p-5 hover:bg-slate-50">

          <input
            type="checkbox"
            {...register("privacyConsent")}
            className="mt-1 h-5 w-5 shrink-0 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
          />

          <div>
            <p className="font-semibold text-slate-800">
              Privacy & Information Use
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              I understand that the information provided may be used
              to evaluate and coordinate the requested companion care
              services.
               <span className="ml-1 text-red-500">*</span>
            </p>
          </div>

        </label>

        {/* Service Consent */}

        <label className="flex cursor-pointer items-start gap-4 rounded-2xl border border-slate-200 p-5 hover:bg-slate-50">

          <input
            type="checkbox"
            {...register("serviceConsent")}
            className="mt-1 h-5 w-5 shrink-0 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
          />

          <div>
            <p className="font-semibold text-slate-800">
              Companion Care Services
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              I understand that companion care services are intended
              to provide non-medical support, companionship, and
              assistance with appropriate daily activities.
               <span className="ml-1 text-red-500">*</span>
            </p>
          </div>

        </label>

        {/* Electronic Communication */}

        <label className="flex cursor-pointer items-start gap-4 rounded-2xl border border-slate-200 p-5 hover:bg-slate-50">

          <input
            type="checkbox"
            {...register("electronicCommunication")}
            className="mt-1 h-5 w-5 shrink-0 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
          />

          <div>
            <p className="font-semibold text-slate-800">
              Electronic Communication
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              I agree that the company may contact me using the
              communication information I provide, including email,
              telephone, or text message, regarding my inquiry and
              requested services.
            </p>
          </div>

        </label>

      </div>

      {/* Signature */}

      <div className="my-10 border-t border-slate-200" />

      <SectionHeader
        title="Electronic Signature"
        description="Please provide your name as your electronic signature."
      />

      <div className="grid gap-6 md:grid-cols-2">

        {/* Signature Name */}

        <div>

          <label className="mb-2 block font-medium text-slate-800">
            Full Name
          </label>

          <input
            {...register("signatureName")}
            placeholder="Enter your full legal name"
            className="w-full rounded-xl border border-slate-300 p-4 text-slate-700 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
          />

          {errors.signatureName && (
            <p className="mt-2 text-sm text-red-500">
              {errors.signatureName.message as string}
            </p>
          )}

        </div>

        {/* Relationship */}

        <div>

          <label className="mb-2 block font-medium text-slate-800">
            Relationship to Client
          </label>

          <select
            {...register("relationshipToClient")}
            className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-700 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
          >
            <option value="">Select</option>
            <option value="self">Client / Self</option>
            <option value="spouse">Spouse / Partner</option>
            <option value="parent">Parent</option>
            <option value="child">Child</option>
            <option value="relative">Other Relative</option>
            <option value="legal-representative">
              Legal Representative
            </option>
            <option value="other">Other</option>
          </select>

        </div>

        {/* Signature Date */}

        <div>

          <label className="mb-2 block font-medium text-slate-800">
            Date
          </label>

          <input
            type="date"
            {...register("signatureDate")}
            className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-700 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100"
          />

        </div>

      </div>

      {/* Final Agreement */}

      <div className="my-10 border-t border-slate-200" />

      <label className="flex cursor-pointer items-start gap-4 rounded-2xl border-2 border-sky-100 bg-sky-50 p-5 hover:bg-sky-100">

        <input
          type="checkbox"
          {...register("finalAgreement")}
          className="mt-1 h-5 w-5 shrink-0 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
        />

        <div>
          <p className="font-semibold text-slate-900">
            Final Confirmation
          </p>

          <p className="mt-1 text-sm leading-6 text-slate-700">
            By checking this box, I confirm that I have reviewed the
            information provided in this intake form and understand
            that submitting this form constitutes my electronic
            acknowledgement of the information and consents provided.
          </p>
        </div>

      </label>

      {errors.finalAgreement && (
        <p className="mt-3 text-sm text-red-500">
          {errors.finalAgreement.message as string}
        </p>
      )}

      {/* Important Notice */}

      <div className="mt-8 rounded-2xl bg-slate-50 p-5">

        <p className="text-sm leading-6 text-slate-600">
          Please review all information carefully before submitting.
          A member of our care team may contact you to confirm the
          information and discuss the next steps.
        </p>

      </div>


      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">

        <h3 className="font-semibold text-slate-900">
          Security Verification
        </h3>

        <p className="mt-1 text-sm leading-6 text-slate-600">
          Please complete the security verification before submitting
          your application.
        </p>

        <div className="mt-4">
          <Turnstile
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
            onSuccess={onTurnstileSuccess}
            onExpire={onTurnstileExpire}
            onError={onTurnstileExpire}
          />
        </div>

      </div>

    </section>
  );
}