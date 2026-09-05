"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  onAuthStateChanged,
  signOut,
  User,
} from "firebase/auth";

import { auth } from "@/lib/firebase";
import { Search, X } from "lucide-react";

interface Application {
  id: string;
  clientName?: string;
  age?: string | number;
  phone?: string;
  email?: string;
  emergencyName?: string;
  status?: string;
  submittedAt?: string | null;
}

export default function AdminPage() {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [applications, setApplications] =
    useState<Application[]>([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (currentUser) => {
        if (!currentUser) {
          router.replace("/admin/login");
          return;
        }

        setUser(currentUser);

        try {
          const idToken =
            await currentUser.getIdToken();

          const response = await fetch(
            "/api/admin/applications",
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${idToken}`,
              },
            }
          );

          const result = await response.json();

          if (!response.ok) {
            throw new Error(
              result?.message ||
                "Unable to load applications."
            );
          }

          setApplications(
            result.applications || []
          );

        } catch (err) {
          console.error(
            "Application loading error:",
            err
          );

          setError(
            "Unable to load intake applications."
          );
        } finally {
          setLoading(false);
        }
      }
    );

    return () => unsubscribe();
  }, [router]);

  async function handleLogout() {
    await signOut(auth);
    router.replace("/admin/login");
  }

  const filteredApplications = applications.filter(
  (application) => {
    const search = searchTerm
      .trim()
      .toLowerCase();

    if (!search) return true;

    return (
      application.clientName
        ?.toLowerCase()
        .includes(search) ||
      application.email
        ?.toLowerCase()
        .includes(search) ||
      application.phone
        ?.toLowerCase()
        .includes(search) ||
      application.emergencyName
        ?.toLowerCase()
        .includes(search)
    );
  }
);

  function formatDate(
    date: string | null | undefined
  ) {
    if (!date) return "—";

    return new Date(date).toLocaleString(
      "en-US",
      {
        dateStyle: "medium",
        timeStyle: "short",
      }
    );
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-slate-600">
          Loading applications...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}

      <header className="border-b border-slate-200 bg-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Bearing Bear
            </h1>

            <p className="text-sm text-slate-500">
              Administrator Portal
            </p>
          </div>

          <div className="flex items-center gap-4">

            <span className="hidden text-sm text-slate-500 sm:block">
              {user?.email}
            </span>

            <button
              type="button"
              onClick={handleLogout}
              className="rounded-xl border border-slate-300 px-4 py-2.5 font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Sign Out
            </button>

          </div>

        </div>

      </header>

      {/* Dashboard */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        <div className="mb-8">

          <h2 className="text-3xl font-bold text-slate-900">
            Intake Applications
          </h2>

          <p className="mt-2 text-slate-600">
            Review and manage client intake submissions.
          </p>

        </div>

        {/* Statistics */}

        <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 shadow-sm">

            <p className="text-sm font-medium text-slate-500">
              Total Applications
            </p>

            <p className="mt-2 text-3xl font-bold text-slate-900">
              {applications.length}
            </p>

          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">

            <p className="text-sm font-medium text-slate-500">
              New Applications
            </p>

            <p className="mt-2 text-3xl font-bold text-sky-600">
              {
                applications.filter(
                  (application) =>
                    !application.status ||
                    application.status === "new"
                ).length
              }
            </p>

          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">

            <p className="text-sm font-medium text-slate-500">
              Submitted
            </p>

            <p className="mt-2 text-3xl font-bold text-slate-900">
              {applications.length}
            </p>

          </div>

        </div>

        {/* Error */}

        {error && (
          <div
            className="mb-6 rounded-2xl bg-red-50 p-4 text-red-700"
            role="alert"
          >
            {error}
          </div>
        )}

        {/* Applications */}

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

             <div>
        <h3 className="text-lg font-semibold text-slate-900">
          Recent Applications
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {filteredApplications.length}{" "}
          {filteredApplications.length === 1
            ? "application"
            : "applications"}
          {searchTerm && " found"}
        </p>
      </div>

      {/* Search */}

      <div className="relative w-full sm:max-w-sm">

        <Search
          size={19}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
          placeholder="Search by name, email, phone..."
          className="
            w-full
            rounded-xl
            border border-slate-300
            bg-white
            py-3
            pl-11
            pr-10
            text-sm
            text-slate-900
            outline-none
            transition
            placeholder:text-slate-400
            focus:border-sky-600
            focus:ring-2
            focus:ring-sky-100
          "
        />

        {searchTerm && (
          <button
            type="button"
            onClick={() => setSearchTerm("")}
            className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              rounded-full
              p-1
              text-slate-400
              transition
              hover:bg-slate-100
              hover:text-slate-700
            "
            aria-label="Clear search"
          >
            <X size={18} />
          </button>
        )}

      </div>


          
          
{applications.length === 0 ? (

  <div className="px-6 py-16 text-center">

    <p className="text-lg font-medium text-slate-700">
      No applications yet
    </p>

    <p className="mt-2 text-sm text-slate-500">
      Submitted intake applications will appear here.
    </p>

  </div>

) : filteredApplications.length === 0 ? (

  <div className="px-6 py-16 text-center">

    <p className="text-lg font-medium text-slate-700">
      No matching applications
    </p>

    <p className="mt-2 text-sm text-slate-500">
      Try searching with a different name, email,
      phone number, or emergency contact.
    </p>

    <button
      type="button"
      onClick={() => setSearchTerm("")}
      className="mt-5 rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700"
    >
      Clear Search
    </button>

  </div>

) : (

            <div className="overflow-x-auto">

              <table className="w-full min-w-[800px]">

                <thead className="bg-slate-50">

                  <tr className="text-left text-sm text-slate-500">

                    <th className="px-6 py-4 font-medium">
                      Client
                    </th>

                    <th className="px-6 py-4 font-medium">
                      Age
                    </th>

                    <th className="px-6 py-4 font-medium">
                      Phone
                    </th>

                    <th className="px-6 py-4 font-medium">
                      Emergency Contact
                    </th>

                    <th className="px-6 py-4 font-medium">
                      Status
                    </th>

                    <th className="px-6 py-4 font-medium">
                      Submitted
                    </th>

                  </tr>

                </thead>

                <tbody className="divide-y divide-slate-100">

                  {filteredApplications.map(
                    (application) => (

                      <tr
  key={application.id}
  onClick={() =>
    router.push(
      `/admin/applications/${application.id}`
    )
  }
  className="cursor-pointer transition hover:bg-slate-50"
>

                        <td className="px-6 py-5">

                          <div className="font-medium text-sky-700">
                            {application.clientName ||
                              "Unnamed client"}
                          </div>

                          <div className="text-sm text-slate-500">
                            {application.email || "—"}
                          </div>

                        </td>

                        <td className="px-6 py-5 text-slate-700">
                          {application.age || "—"}
                        </td>

                        <td className="px-6 py-5 text-slate-700">
                          {application.phone || "—"}
                        </td>

                        <td className="px-6 py-5 text-slate-700">
                          {application.emergencyName || "—"}
                        </td>

                        <td className="px-6 py-5">

                          <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                            {application.status ||
                              "new"}
                          </span>

                        </td>

                        <td className="px-6 py-5 text-sm text-slate-500">
                          {formatDate(
                            application.submittedAt
                          )}
                        </td>

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            </div>

          )}

        </div>

      </section>

    </main>
  );
}