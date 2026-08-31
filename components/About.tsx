"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  ShieldCheck,
  Users,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    description:
      "Every client is treated with kindness, patience, dignity, and genuine compassion.",
  },
  {
    icon: ShieldCheck,
    title: "Respect & Independence",
    description:
      "We support our clients while helping them maintain their independence and privacy.",
  },
  {
    icon: Users,
    title: "Personalized Support",
    description:
      "Every care plan is tailored to the unique needs and preferences of each individual.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* =====================================================
              IMAGE
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl">

              <Image
                src="/images/about.jpg"
                alt="Companion Care"
                width={700}
                height={850}
                className="h-[650px] w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

            {/* =================================================
                FLOATING BADGE
            ================================================= */}

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-8 rounded-2xl bg-brand-green p-6 text-white shadow-xl"
            >
              <p className="text-4xl font-bold">
                100%
              </p>

              <p className="mt-2 text-sm">
                Personalized Companion Care
              </p>
            </motion.div>
          </motion.div>

          {/* =====================================================
              CONTENT
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            {/* Section Label */}

            <span className="mb-5 inline-block rounded-full bg-brand-green-pale px-4 py-2 font-medium text-brand-green-dark">
              About Bearing Bear
            </span>

            {/* Heading */}

            <h2 className="font-heading text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              Caring Beyond Expectations
            </h2>

            {/* Main Paragraph */}

            <p className="mt-8 text-lg leading-8 text-gray-600">
              At <strong>Bearing Bear LLC</strong>, we believe exceptional care
              begins with compassion. Our mission is to provide dependable,
              non-medical companion and homemaker services that improve quality
              of life while respecting each client's dignity, privacy, and
              independence.
            </p>

            {/* Secondary Paragraph */}

            <p className="mt-6 leading-8 text-gray-600">
              Whether assisting with daily living activities, providing
              companionship, preparing meals, or helping with transportation,
              our caregivers are committed to creating a safe, comfortable, and
              supportive environment for every individual we serve.
            </p>

            {/* =================================================
                FEATURES
            ================================================= */}

            <div className="mt-10 space-y-6">

              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    whileHover={{ x: 8 }}
                    className="flex gap-5"
                  >

                    {/* Icon */}

                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-brand-green-pale">

                      <Icon
                        className="text-brand-green"
                        size={28}
                      />

                    </div>

                    {/* Feature Content */}

                    <div>

                      <h4 className="font-heading text-xl font-semibold text-gray-900">
                        {feature.title}
                      </h4>

                      <p className="mt-2 text-gray-600">
                        {feature.description}
                      </p>

                    </div>

                  </motion.div>
                );
              })}

            </div>

            {/* =================================================
                BUTTON
            ================================================= */}

            <div className="mt-12">

              <Link
                href="/#services"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-brand-green-dark"
              >
                Explore Our Services

                <ArrowRight size={20} />
              </Link>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}