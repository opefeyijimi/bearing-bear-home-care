"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { PhoneCall, CalendarCheck, HeartHandshake, ShieldCheck, Clock3 } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-100">

      {/* Decorative Background */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <span className="inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sky-700 font-medium mb-6">
              Compassion • Dignity • Independence
            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">

              Compassionate

              <span className="block text-sky-600">
                Companion Care
              </span>

              That Feels Like Family

            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-8">

              Professional, reliable companion services for seniors and adults
              in need. We help clients maintain independence while enhancing
              quality of life through compassionate in-home support.

            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                href="/intake"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-7 py-4 font-semibold text-white shadow-lg transition hover:bg-sky-700 hover:-translate-y-1"
              >
                <CalendarCheck size={20} />
                Schedule Consultation
              </Link>

              <a
                href="tel:+15616604145"
                className="inline-flex items-center gap-2 rounded-xl border border-sky-600 px-7 py-4 font-semibold text-sky-600 transition hover:bg-sky-50"
              >
                <PhoneCall size={20} />
                (561) 660-4145
              </a>

            </div>

            {/* FEATURES */}

            <div className="grid grid-cols-2 gap-5 mt-12">

              <div className="flex items-center gap-3">

                <HeartHandshake className="text-sky-600" />

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

                <ShieldCheck className="text-sky-600" />

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

                <Clock3 className="text-sky-600" />

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
            transition={{ duration: .8 }}
            className="relative"
          >

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">

              <Image
                src="/images/hero.jpeg"
                alt="Companion Care"
                width={700}
                height={850}
                priority
                className="w-full h-[650px] object-cover"
              />

            </div>

            {/* FLOATING CARD */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .7 }}
              className="absolute -bottom-8 -left-8 bg-white rounded-3xl shadow-xl p-6 w-80"
            >

              <h3 className="font-bold text-lg mb-4">

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