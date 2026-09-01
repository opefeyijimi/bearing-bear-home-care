"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What services does Bearing Bear provide?",
    answer:
      "We provide non-medical companion care including companionship, light housekeeping, meal preparation, medication reminders, transportation assistance, and personal care support.",
  },
  {
    question: "Who can benefit from your services?",
    answer:
      "Our services are designed for seniors, adults recovering from illness or surgery, individuals with disabilities, and anyone who needs extra support to remain independent at home.",
  },
  {
    question: "Can care plans be customized?",
    answer:
      "Absolutely. Every client receives a personalized care plan based on their health, preferences, schedule, and daily living needs.",
  },
  {
    question: "Do you provide medical care?",
    answer:
      "No. Bearing Bear specializes in non-medical homemaker and companion care services. We focus on improving quality of life through compassionate daily support.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply contact us by phone or complete our online intake form. We'll schedule a consultation and create a care plan tailored to your loved one's needs.",
  },
  {
    question: "Do you provide transportation?",
    answer:
      "Yes. We assist with transportation to medical appointments, grocery shopping, errands, and community outings.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-brand-green-pale py-24"
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-green-light/10 blur-3xl" />

      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-green-light/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">

          {/* =====================================================
              LEFT SIDE
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <span className="inline-block rounded-full bg-white px-4 py-2 font-medium text-brand-green-dark shadow-sm">
              Frequently Asked Questions
            </span>

            <h2 className="mt-6 font-heading text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              We're Here to Answer Your Questions
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choosing home care is an important decision. Below are answers to
              some of the most common questions families ask about our companion
              care services.
            </p>

            {/* =================================================
                CONTACT CARD
            ================================================= */}

            <div className="mt-12 rounded-3xl bg-brand-green p-8 text-white shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <MessageCircleQuestion size={32} />
              </div>

              <h3 className="mt-6 font-heading text-2xl font-bold">
                Still Have Questions?
              </h3>

              <p className="mt-4 leading-7 text-white/85">
                Our team is happy to discuss your family's needs and explain
                how our services can help your loved one remain comfortable and
                independent at home.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-brand-green-dark shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Contact Us
              </Link>

            </div>

          </motion.div>

          {/* =====================================================
              RIGHT SIDE
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <Accordion.Root
              type="single"
              collapsible
              className="space-y-4"
            >

              {faqs.map((faq, index) => (

                <Accordion.Item
                  key={index}
                  value={`item-${index}`}
                  className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
                >

                  <Accordion.Header>

                    <Accordion.Trigger
                      className="
                        group
                        flex
                        w-full
                        items-center
                        justify-between
                        gap-6
                        p-6
                        text-left
                        transition-colors
                        duration-200
                        hover:bg-brand-green-pale/50
                      "
                    >

                      <span className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </span>

                      <span
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-brand-green-pale
                          text-brand-green
                          transition-all
                          duration-300
                          group-data-[state=open]:bg-brand-green
                          group-data-[state=open]:text-white
                        "
                      >
                        <ChevronDown
                          size={20}
                          className="transition-transform duration-300 group-data-[state=open]:rotate-180"
                        />
                      </span>

                    </Accordion.Trigger>

                  </Accordion.Header>

                  <Accordion.Content
                    className="
                      overflow-hidden
                      data-[state=open]:animate-slideDown
                      data-[state=closed]:animate-slideUp
                    "
                  >

                    <div className="border-t border-gray-100 px-6 pb-6 pt-5 leading-8 text-gray-600">
                      {faq.answer}
                    </div>

                  </Accordion.Content>

                </Accordion.Item>

              ))}

            </Accordion.Root>

          </motion.div>

        </div>

      </div>
    </section>
  );
}