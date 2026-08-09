"use client";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  titles: string[];
}

export default function StepIndicator({
  currentStep,
  totalSteps,
  titles,
}: StepIndicatorProps) {
  return (
    <div className="mb-10">

      <div className="flex justify-between items-center">

        {titles.map((title, index) => {

          const active = index === currentStep;
          const completed = index < currentStep;

          return (

            <div
              key={title}
              className="flex flex-col items-center flex-1"
            >

              <div
                className={`
                  flex h-12 w-12 items-center justify-center rounded-full
                  font-bold transition-all duration-300

                  ${
                    completed
                      ? "bg-green-500 text-white"
                      : active
                      ? "bg-sky-600 text-white"
                      : "bg-slate-200 text-slate-600"
                  }
                `}
              >
                {completed ? "✓" : index + 1}
              </div>

              <p
                className={`mt-3 text-center text-sm ${
                  active
                    ? "font-semibold text-sky-700"
                    : "text-slate-500"
                }`}
              >
                {title}
              </p>

            </div>

          );

        })}

      </div>

    </div>
  );
}