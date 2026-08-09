"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  PhoneCall,
  ClipboardList,
  UserCheck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Schedule a Consultation",
    description:
      "Contact us by phone or online to discuss your loved one's care needs and ask any questions you may have.",
    icon: PhoneCall,
  },
  {
    number: "02",
    title: "Create a Personalized Care Plan",
    description:
      "We'll learn about your goals, preferences, daily routine, and required support to build a customized care plan.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Meet Your Caregiver",
    description:
      "We carefully match your loved one with a compassionate caregiver who best fits their personality and care needs.",
    icon: UserCheck,
  },
  {
    number: "04",
    title: "Enjoy Compassionate Care",
    description:
      "Receive dependable companion and homemaker services that promote comfort, dignity, and independence.",
    icon: HeartHandshake,
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-sky-50 py-24">

      {/* Decorative Background */}

      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-sky-200/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="inline-block rounded-full bg-sky-100 px-4 py-2 font-medium text-sky-700">

            Our Care Process

          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900">

            Getting Started is Easy

          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">

            We make beginning care simple and stress-free. From your first
            consultation to ongoing support, we're here every step of the way.

          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative mt-20">

          {/* Line */}

          <div className="hidden lg:block absolute top-10 left-0 w-full h-1 bg-sky-200 rounded-full" />

          <div className="grid lg:grid-cols-4 gap-10 relative">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (

                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * .15,
                    duration: .5,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                  }}
                  className="relative"
                >

                  {/* Circle */}

                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-sky-600 shadow-xl">

                    <Icon
                      size={34}
                      className="text-white"
                    />

                  </div>

                  {/* Card */}

                  <div className="mt-8 rounded-3xl bg-white p-8 shadow-lg transition hover:shadow-2xl">

                    <p className="text-sm font-bold tracking-widest text-sky-600">

                      STEP {step.number}

                    </p>

                    <h3 className="mt-4 text-2xl font-semibold text-gray-900">

                      {step.title}

                    </h3>

                    <p className="mt-4 leading-7 text-gray-600">

                      {step.description}

                    </p>

                  </div>

                </motion.div>

              );

            })}

          </div>

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .4 }}
          viewport={{ once: true }}
          className="mt-24 rounded-3xl bg-sky-700 px-10 py-16 text-center text-white shadow-2xl"
        >

          <h3 className="text-4xl font-bold">

            Ready to Begin?

          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-sky-100">

            Let us help your loved one receive compassionate, dependable
            companion care that promotes dignity, comfort, and independence.

          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              href="/intake"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-sky-700 transition hover:scale-105"
            >
              Schedule Consultation

              <ArrowRight size={18} />

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