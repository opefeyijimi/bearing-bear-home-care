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
    <div className="w-full">
      <div className="flex w-full items-start">

        {titles.map((title, index) => {
          const active = index === currentStep;
          const completed = index < currentStep;

          return (
            <div
              key={title}
              className="flex min-w-0 flex-1 items-start"
            >

              {/* STEP */}
              <div className="flex w-full flex-col items-center">

                {/* Circle */}
                <div
                  className={`
                    flex h-12 w-12 shrink-0 items-center justify-center
                    rounded-full border-2 text-sm font-bold
                    transition-all duration-300
                    ${
                      completed
                        ? "border-green-500 bg-green-500 text-white"
                        : active
                        ? "border-sky-600 bg-sky-600 text-white shadow-md"
                        : "border-slate-300 bg-slate-100 text-slate-500"
                    }
                  `}
                >
                  {completed ? "✓" : index + 1}
                </div>

                {/* Title */}
                <p
                  className={`
                    mt-3 w-full px-1 text-center text-xs leading-4
                    sm:text-sm
                    ${
                      active
                        ? "font-semibold text-sky-700"
                        : completed
                        ? "font-medium text-slate-700"
                        : "text-slate-500"
                    }
                  `}
                >
                  {title}
                </p>

              </div>

              {/* CONNECTOR */}
              {index < totalSteps - 1 && (
                <div className="mt-6 h-[2px] w-full shrink-0 bg-slate-200">

                  <div
                    className={`
                      h-full transition-all duration-500
                      ${
                        completed
                          ? "bg-green-500"
                          : "bg-slate-200"
                      }
                    `}
                  />

                </div>
              )}

            </div>
          );
        })}

      </div>
    </div>
  );
}