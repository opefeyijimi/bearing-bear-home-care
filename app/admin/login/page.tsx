"use client";

import { FormEvent, useState } from "react";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/navigation";

import { auth } from "@/lib/firebase";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      router.push("/admin");
    } catch (error) {
      console.error("Admin login error:", error);

      setError(
        "Invalid email or password. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl sm:p-10">

        <div className="mb-8 text-center">

          <h1 className="text-3xl font-bold text-slate-900">
            Bearing Bear
          </h1>

          <p className="mt-2 text-slate-600">
            Administrator Portal
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>

            <label
              htmlFor="email"
              className="mb-2 block font-medium text-slate-700"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              required
              autoComplete="email"
              className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-base outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
              placeholder="Administrator email"
            />

          </div>

          <div>

            <label
              htmlFor="password"
              className="mb-2 block font-medium text-slate-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              required
              autoComplete="current-password"
              className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-base outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
              placeholder="Enter your password"
            />

          </div>

          {error && (
            <div
              className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
              role="alert"
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-sky-600 px-5 py-3.5 font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Signing in..."
              : "Sign In"}
          </button>

        </form>

      </div>

    </main>
  );
}