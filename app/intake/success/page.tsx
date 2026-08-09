import Link from "next/link";
import { CheckCircle2, Home, FileText } from "lucide-react";

export default function IntakeSuccessPage() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-6 py-20">

      <div className="max-w-2xl rounded-3xl bg-white p-12 shadow-2xl text-center">

        <div className="flex justify-center">

          <div className="rounded-full bg-green-100 p-5">

            <CheckCircle2 className="h-16 w-16 text-green-600" />

          </div>

        </div>

        <h1 className="mt-8 text-4xl font-bold text-slate-900">

          Thank You!

        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">

          Your client intake form has been successfully submitted.

          <br />

          Our care coordination team will carefully review your
          information and contact you within the next 24 hours to
          discuss the next steps.

        </p>

        <div className="mt-10 rounded-2xl bg-sky-50 p-6 text-left">

          <h2 className="mb-4 text-xl font-semibold text-sky-800">

            What Happens Next?

          </h2>

          <ul className="space-y-3 text-slate-700">

            <li>✓ Your information has been securely received.</li>

            <li>✓ A Care Coordinator will review your needs.</li>

            <li>✓ We'll contact you to schedule an assessment.</li>

            <li>✓ A personalized care plan will be created.</li>

            <li>✓ Care services can begin after approval.</li>

          </ul>

        </div>

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:justify-center">

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-8 py-4 font-semibold text-white transition hover:bg-sky-700"
          >
            <Home size={20} />
            Return Home
          </Link>

          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            <FileText size={20} />
            Submit Another Form
          </Link>

        </div>

      </div>

    </main>
  );
}