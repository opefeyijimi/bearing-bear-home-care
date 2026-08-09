"use client";

interface Props {

  currentStep: number;

  totalSteps: number;

  previousStep: () => void;

  nextStep: () => void;

}

export default function StepNavigation({

  currentStep,

  totalSteps,

  previousStep,

  nextStep,

}: Props) {

  return (

    <div className="mt-12 flex justify-between">

      <button
        type="button"
        onClick={previousStep}
        disabled={currentStep === 0}
        className="rounded-xl border px-8 py-4 font-semibold disabled:opacity-40"
      >

        Previous

      </button>

      {currentStep !== totalSteps - 1 ? (

        <button
          type="button"
          onClick={nextStep}
          className="rounded-xl bg-sky-600 px-8 py-4 font-semibold text-white hover:bg-sky-700"
        >

          Next

        </button>

      ) : (

        <button
          type="submit"
          className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white hover:bg-green-700"
        >

          Submit Intake Form

        </button>

      )}

    </div>

  );
}