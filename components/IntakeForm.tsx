"use client";

import { useState } from "react";
import {
  FormProvider,
  useForm,
  FieldPath,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  intakeSchema,
  IntakeFormValues,
} from "@/components/schemas/intakeSchema";

import ClientInformation from "./intake/ClientInformation";
import EmergencyContact from "./intake/EmergencyContact";
import MedicalBackground from "./intake/MedicalBackground";
import DailyLiving from "./intake/DailyLiving";
import Preferences from "./intake/Preferences";
import HomeEnvironment from "./intake/HomeEnvironment";
import PaymentInformation from "./intake/PaymentInformation";
import Consent from "./intake/Consent";

import ProgressBar from "./intake/ProgressBar";
import StepIndicator from "./intake/StepIndicator";
import StepNavigation from "./intake/StepNavigation";

const stepTitles = [
  "Client",
  "Emergency",
  "Medical",
  "Daily Living",
  "Preferences",
  "Home",
  "Payment",
  "Consent",
];

const steps = [
  <ClientInformation key="client" />,
  <EmergencyContact key="emergency" />,
  <MedicalBackground key="medical" />,
  <DailyLiving key="daily" />,
  <Preferences key="preferences" />,
  <HomeEnvironment key="home" />,
  <PaymentInformation key="payment" />,
  <Consent key="consent" />,
];

/**
 * These are the fields validated before moving to the next step.
 * Add/remove fields here as your schema evolves.
 */
const stepFields: FieldPath<IntakeFormValues>[][] = [
  ["clientName", "dateOfBirth", "phone", "email"],
  ["emergencyName", "emergencyPhone"],
  [],
  [],
  [],
  [],
  [],
  ["finalAgreement"],
];

export default function IntakeForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const methods = useForm<IntakeFormValues>({
    resolver: zodResolver(intakeSchema),

    mode: "onTouched",

    defaultValues: {
      hobbies: [],

      informationAccurate: false,
      privacyConsent: false,
      serviceConsent: false,
      electronicCommunication: false,
      finalAgreement: false,
    },
  });

  const {
    trigger,
    handleSubmit,
    reset,
  } = methods;

  async function nextStep() {
    const fields = stepFields[currentStep];

    if (fields.length > 0) {
      const valid = await trigger(fields);

      if (!valid) return;
    }

    setCurrentStep((prev) => prev + 1);
  }

  function previousStep() {
    setCurrentStep((prev) => prev - 1);
  }

  function onSubmit(data: IntakeFormValues) {
    console.log(data);

    alert("Thank you! Your intake form has been submitted.");

    reset();

    setCurrentStep(0);
  }

  return (
    <section className="bg-slate-100 py-20">

      <div className="mx-auto max-w-6xl px-6">

        <div className="rounded-3xl bg-white p-10 shadow-2xl">

          <div className="mb-12 text-center">

            <h1 className="text-4xl font-bold text-slate-900">

              Client Intake Form

            </h1>

            <p className="mt-4 text-slate-600">

              Complete the form below so we can prepare
              personalized home care services.

            </p>

          </div>

          <ProgressBar
            currentStep={currentStep}
            totalSteps={steps.length}
          />

          <StepIndicator
            currentStep={currentStep}
            totalSteps={steps.length}
            titles={stepTitles}
          />

          <FormProvider {...methods}>

            <form onSubmit={handleSubmit(onSubmit)}>

              {steps[currentStep]}

              <StepNavigation
                currentStep={currentStep}
                totalSteps={steps.length}
                previousStep={previousStep}
                nextStep={nextStep}
              />

            </form>

          </FormProvider>

        </div>

      </div>

    </section>
  );
}