"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  HeartHandshake,
  Home,
  UtensilsCrossed,
  Pill,
  CarFront,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Companion Care",
    description:
      "Friendly companionship, meaningful conversations, emotional support, and social engagement to reduce loneliness and improve well-being.",
    icon: HeartHandshake,
  },
  {
    title: "Homemaker Services",
    description:
      "Light housekeeping, laundry, organization, and maintaining a clean, safe, and comfortable living environment.",
    icon: Home,
  },
  {
    title: "Meal Preparation",
    description:
      "Nutritious meal planning and preparation based on dietary preferences and individual health needs.",
    icon: UtensilsCrossed,
  },
  {
    title: "Medication Reminders",
    description:
      "Helping clients stay on schedule with medication reminders and daily wellness routines.",
    icon: Pill,
  },
  {
    title: "Transportation Assistance",
    description:
      "Safe transportation for appointments, grocery shopping, errands, and community outings.",
    icon: CarFront,
  },
  {
    title: "Personal Care Support",
    description:
      "Assistance with grooming, dressing, mobility, and other non-medical daily living activities.",
    icon: Sparkles,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-sky-50 py-24">

      {/* Decorative Blur */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="inline-block rounded-full bg-white px-4 py-2 text-sky-700 font-medium shadow">

            Our Services

          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900">

            Personalized Care That Supports Everyday Living

          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">

            We provide compassionate, dependable, and personalized companion
            care services designed to help seniors and adults maintain their
            independence while enjoying a better quality of life.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .5,
                  delay: index * .1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-3xl bg-white p-8 shadow-lg transition hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 transition group-hover:bg-sky-600">

                  <Icon
                    size={32}
                    className="text-sky-600 transition group-hover:text-white"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-semibold text-gray-900">

                  {service.title}

                </h3>

                <p className="mt-4 leading-7 text-gray-600">

                  {service.description}

                </p>

                <button className="mt-8 inline-flex items-center gap-2 font-semibold text-sky-600 transition group-hover:text-sky-700">

                  Learn More

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-2"
                  />

                </button>

              </motion.div>

            );
          })}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .4 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl bg-sky-600 px-10 py-14 text-center text-white shadow-2xl"
        >

          <h3 className="text-3xl font-bold">

            Looking for Personalized Companion Care?

          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-sky-100">

            Our compassionate caregivers are ready to provide dependable
            support tailored to your family's needs. Let's discuss how we can
            help your loved one live comfortably and independently.

          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              href="/intake"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-sky-700 transition hover:scale-105"
            >
              Schedule Consultation
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-sky-700"
            >
              Contact Us
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}