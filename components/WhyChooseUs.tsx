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
    <section className="bg-white py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <span className="bg-sky-100 text-sky-700 rounded-full px-4 py-2 font-medium">

              Why Families Choose Bearing Bear

            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900">

              Care Built on Compassion,
              Trust & Respect

            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">

              We believe exceptional care begins with genuine compassion.
              Our caregivers provide dependable, non-medical support that
              helps seniors and adults maintain their independence while
              enjoying life in the comfort of home.

            </p>

            {/* FEATURES */}

            <div className="mt-10 space-y-6">

              {features.map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * .15,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ x: 8 }}
                    className="flex gap-5"
                  >

                    <div className="h-14 w-14 rounded-xl bg-sky-100 flex items-center justify-center">

                      <Icon
                        className="text-sky-600"
                        size={28}
                      />

                    </div>

                    <div>

                      <h3 className="text-xl font-semibold">

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

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="relative"
          >

            <Image
              src="/images/why-us.png"
              alt="Caregiver helping senior"
              width={900}
              height={1200}
              className="rounded-3xl shadow-2xl w-full h-[650px] object-cover"
            />

            {/* Floating Stats */}

            <div
              ref={ref}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white rounded-3xl shadow-2xl px-8 py-8 w-[90%]"
            >

              <div className="grid grid-cols-3 gap-6 text-center">

                {stats.map((item) => (

                  <div key={item.label}>

                    <p className="text-4xl font-bold text-sky-600">

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

        {/* TRUST BAR */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
          className="mt-32 rounded-3xl bg-sky-600 text-white p-10"
        >

          <div className="grid md:grid-cols-3 gap-8">

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