import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import IntakeForm from "@/components/IntakeForm";

export default function IntakePage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-sky-600"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <Link
            href="/"
            className="text-lg font-bold text-sky-700"
          >
            Bearing Bear
          </Link>

        </div>
      </header>

      <IntakeForm />

    </main>
  );
}




/*
export default function IntakePage() {
  return (
    <main className="min-h-screen">
      <IntakeForm />
    </main>
  );
}


/*
export default function IntakePage() {
  return <IntakeForm />;
}
  */