"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  PhoneCall,
  CalendarCheck,
  HeartHandshake,
  ShieldCheck,
  Clock3,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-brand-green-pale via-white to-white"
    >
      {/* Decorative Background */}

      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-brand-green-light/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-yellow/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-6 inline-flex items-center rounded-full bg-brand-green-pale px-4 py-2 font-medium text-brand-green-dark">
              Compassion • Dignity • Independence
            </span>

            <h1 className="font-heading text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
              Compassionate

              <span className="block text-brand-green">
                Companion Care
              </span>

              That Feels Like Family
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Professional, reliable companion services for seniors and adults
              in need. We help clients maintain independence while enhancing
              quality of life through compassionate in-home support.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/intake"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-7 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-brand-green-dark"
              >
                <CalendarCheck size={20} />
                Schedule Consultation
              </Link>

              <a
                href="tel:+15616604145"
                className="inline-flex items-center gap-2 rounded-xl border border-brand-green px-7 py-4 font-semibold text-brand-green transition hover:bg-brand-green-pale"
              >
                <PhoneCall size={20} />
                (561) 660-4145
              </a>
            </div>

            {/* FEATURES */}

            <div className="mt-12 grid grid-cols-2 gap-5">

              <div className="flex items-center gap-3">
                <HeartHandshake className="text-brand-green" />

                <div>
                  <p className="font-semibold">
                    Personalized Care
                  </p>

                  <p className="text-sm text-gray-500">
                    Tailored to every client
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck className="text-brand-green" />

                <div>
                  <p className="font-semibold">
                    Trusted Caregivers
                  </p>

                  <p className="text-sm text-gray-500">
                    Compassionate professionals
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock3 className="text-brand-green" />

                <div>
                  <p className="font-semibold">
                    Flexible Scheduling
                  </p>

                  <p className="text-sm text-gray-500">
                    Care when you need it
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/hero.jpeg"
                alt="Companion Care"
                width={700}
                height={850}
                priority
                className="h-[650px] w-full object-cover"
              />
            </div>

            {/* FLOATING CARD */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -bottom-8 -left-8 w-80 rounded-3xl bg-white p-6 shadow-xl"
            >
              <h3 className="font-heading mb-4 text-lg font-bold">
                Our Services
              </h3>

              <ul className="space-y-3 text-gray-600">
                <li>✓ Companion Care</li>
                <li>✓ Meal Preparation</li>
                <li>✓ Medication Reminders</li>
                <li>✓ Transportation Assistance</li>
                <li>✓ Light Housekeeping</li>
              </ul>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}