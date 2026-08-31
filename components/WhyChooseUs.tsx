"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  HeartHandshake,
  ShieldCheck,
  Clock3,
  Users,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    title: "Compassionate Care",
    description:
      "Every client is treated with dignity, patience, kindness, and genuine compassion.",
    icon: HeartHandshake,
  },
  {
    title: "Personalized Care Plans",
    description:
      "Our services are tailored to each client's unique lifestyle, preferences, and daily needs.",
    icon: Users,
  },
  {
    title: "Dependable Support",
    description:
      "Families can rely on consistent, trustworthy caregivers who prioritize comfort and safety.",
    icon: ShieldCheck,
  },
  {
    title: "Flexible Scheduling",
    description:
      "Whether you need occasional visits or ongoing care, we adapt to your schedule.",
    icon: Clock3,
  },
];

const stats = [
  {
    number: 100,
    suffix: "%",
    label: "Personalized Care",
  },
  {
    number: 24,
    suffix: "/7",
    label: "Support",
  },
  {
    number: 6,
    suffix: "+",
    label: "Core Services",
  },
];

export default function WhyChooseUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="overflow-hidden bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            {/* Section Label */}

            <span className="inline-block rounded-full bg-brand-green-pale px-4 py-2 font-medium text-brand-green-dark">
              Why Families Choose Bearing Bear
            </span>

            {/* Heading */}

            <h2 className="mt-6 font-heading text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              Care Built on Compassion,
              Trust & Respect
            </h2>

            {/* Description */}

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We believe exceptional care begins with genuine compassion.
              Our caregivers provide dependable, non-medical support that
              helps seniors and adults maintain their independence while
              enjoying life in the comfort of home.
            </p>

            {/* =================================================
                FEATURES
            ================================================= */}

            <div className="mt-10 space-y-6">

              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.15,
                    }}
                    viewport={{ once: true }}
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

                      <h3 className="font-heading text-xl font-semibold text-gray-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-gray-600">
                        {item.description}
                      </p>

                    </div>

                  </motion.div>
                );
              })}

            </div>

          </motion.div>

          {/* =====================================================
              RIGHT IMAGE
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >

            <Image
              src="/images/why-us.png"
              alt="Caregiver helping senior"
              width={900}
              height={1200}
              className="h-[650px] w-full rounded-3xl object-cover shadow-2xl"
              loading="eager"
            />

            {/* =================================================
                FLOATING STATS
            ================================================= */}

            <div
              ref={ref}
              className="absolute -bottom-10 left-1/2 w-[90%] -translate-x-1/2 rounded-3xl bg-white px-8 py-8 shadow-2xl"
            >

              <div className="grid grid-cols-3 gap-6 text-center">

                {stats.map((item) => (
                  <div key={item.label}>

                    <p className="text-4xl font-bold text-brand-green">

                      {inView && (
                        <CountUp
                          end={item.number}
                          duration={2}
                        />
                      )}

                      {item.suffix}

                    </p>

                    <p className="mt-2 text-gray-600">
                      {item.label}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </motion.div>

        </div>

        {/* =====================================================
            TRUST BAR
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-32 rounded-3xl bg-brand-green p-10 text-white"
        >

          <div className="grid gap-8 md:grid-cols-3">

            <div className="flex items-center gap-3">
              <CheckCircle2 />
              <span>Respecting Client Dignity</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 />
              <span>Promoting Independence</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 />
              <span>Reliable Companion Services</span>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}