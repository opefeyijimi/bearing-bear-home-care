import Link from "next/link";
import {
  CheckCircle2,
  Phone,
  ArrowLeft,
  Home,
} from "lucide-react";

export default function ContactSuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-16">

      <div className="w-full max-w-2xl">

        <div className="rounded-3xl bg-white p-8 text-center shadow-xl sm:p-12">

          {/* Success Icon */}

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2
              size={44}
              className="text-green-600"
            />
          </div>

          {/* Heading */}

          <h1 className="mt-8 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Message Sent Successfully
          </h1>

          {/* Message */}

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Thank you for reaching out to Bearing Bear Home Care.
            Your message has been received by our team.
          </p>

          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-slate-600">
            A member of our team will review your message and get
            back to you as soon as possible.
          </p>

          {/* Contact Information */}

          <div className="mt-8 rounded-2xl bg-sky-50 p-6 text-left">

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-100">
                <Phone
                  size={20}
                  className="text-sky-600"
                />
              </div>

              <div>

                <h2 className="font-semibold text-slate-900">
                  Need immediate assistance?
                </h2>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  You can also reach us directly by phone.
                </p>

                <a
                  href="tel:+15616602005"
                  className="mt-2 inline-block font-semibold text-sky-700 hover:text-sky-800"
                >
                  (561) 660-2005
                </a>

              </div>

            </div>

          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3.5 font-semibold text-white transition hover:bg-sky-700"
            >
              <Home size={18} />
              Back to Home
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <ArrowLeft size={18} />
              Contact Page
            </Link>

          </div>

        </div>

        {/* Footer Message */}

        <p className="mt-6 text-center text-sm text-slate-500">
          Bearing Bear Home Care
          <span className="mx-2">•</span>
          Compassionate Care. Trusted Support.
        </p>

      </div>

    </main>
  );
}