"use client";

interface Props {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({
  currentStep,
  totalSteps,
}: Props) {

  const progress =
    ((currentStep + 1) / totalSteps) * 100;

  return (

    <div className="mb-10">

      <div className="mb-3 flex justify-between">

        <span className="font-semibold">

          Step {currentStep + 1} of {totalSteps}

        </span>

        <span>{Math.round(progress)}%</span>

      </div>

      <div className="h-3 rounded-full bg-slate-200">

        <div
          className="h-3 rounded-full bg-sky-600 transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>

  );
}