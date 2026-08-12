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

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="overflow-hidden rounded-3xl shadow-2xl">

              <Image
                src="/images/about.jpeg"
                alt="Companion Care"
                width={700}
                height={850}
                className="w-full h-[650px] object-cover hover:scale-105 transition duration-700"
              />

            </div>

            {/* Floating Badge */}

            <motion.div
              initial={{ scale: .8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: .4 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-8 bg-sky-600 text-white rounded-2xl p-6 shadow-xl"
            >

              <p className="text-4xl font-bold">
                100%
              </p>

              <p className="mt-2 text-sm">
                Personalized Companion Care
              </p>

            </motion.div>

          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <span className="inline-block rounded-full bg-sky-100 text-sky-700 px-4 py-2 font-medium mb-5">
              About Bearing Bear
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">

              Caring Beyond Expectations

            </h2>

            <p className="mt-8 text-gray-600 leading-8 text-lg">

              At <strong>Bearing Bear LLC</strong>, we believe exceptional care
              begins with compassion. Our mission is to provide dependable,
              non-medical companion and homemaker services that improve quality
              of life while respecting each client's dignity, privacy, and
              independence.

            </p>

            <p className="mt-6 text-gray-600 leading-8">

              Whether assisting with daily living activities, providing
              companionship, preparing meals, or helping with transportation,
              our caregivers are committed to creating a safe, comfortable, and
              supportive environment for every individual we serve.

            </p>

            {/* FEATURES */}

            <div className="mt-10 space-y-6">

              {features.map((feature) => {

                const Icon = feature.icon;

                return (

                  <motion.div
                    key={feature.title}
                    whileHover={{ x: 8 }}
                    className="flex gap-5"
                  >

                    <div className="h-14 w-14 rounded-xl bg-sky-100 flex items-center justify-center flex-shrink-0">

                      <Icon className="text-sky-600" size={28} />

                    </div>

                    <div>

                      <h4 className="font-semibold text-xl text-gray-900">

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

            {/* BUTTON */}

            <div className="mt-12">

              <Link
                href="/#services"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-8 py-4 text-white font-semibold shadow-lg hover:bg-sky-700 transition hover:-translate-y-1"
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