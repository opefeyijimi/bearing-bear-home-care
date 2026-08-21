"use client";

interface StepNavigationProps {
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
}: StepNavigationProps) {
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;

  return (
    <div className="flex items-center justify-between gap-4">
      
      {/* Previous */}
      <button
        type="button"
        onClick={previousStep}
        disabled={isFirstStep}
        className="
          rounded-xl
          border border-slate-300
          px-6 py-3
          font-semibold
          text-slate-700
          transition
          hover:bg-slate-100
          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        Previous
      </button>

      {/* Next */}
      {!isLastStep && (
        <button
          type="button"
          onClick={nextStep}
          className="
            rounded-xl
            bg-sky-600
            px-7 py-3
            font-semibold
            text-white
            shadow-md
            transition
            hover:bg-sky-700
          "
        >
          Next
        </button>
      )}

      {/* Submit */}
      {isLastStep && (
        <button
          type="submit"
          className="
            rounded-xl
            bg-green-600
            px-7 py-3
            font-semibold
            text-white
            shadow-md
            transition
            hover:bg-green-700
          "
        >
          Submit Application
        </button>
      )}

    </div>
  );
}































