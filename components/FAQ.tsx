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
    <section id="faq" className="relative overflow-hidden bg-slate-50 py-24">

      {/* Background */}

      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="inline-block rounded-full bg-sky-100 px-4 py-2 font-medium text-sky-700">
              Frequently Asked Questions
            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              We're Here to Answer Your Questions
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choosing home care is an important decision. Below are answers to
              some of the most common questions families ask about our companion
              care services.
            </p>

            {/* Contact Card */}

            <div className="mt-12 rounded-3xl bg-sky-600 p-8 text-white shadow-xl">

              <MessageCircleQuestion size={48} />

              <h3 className="mt-6 text-2xl font-bold">
                Still Have Questions?
              </h3>

              <p className="mt-4 text-sky-100 leading-7">
                Our team is happy to discuss your family's needs and explain how
                our services can help your loved one remain comfortable and
                independent at home.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-sky-700 transition hover:scale-105"
              >
                Contact Us
              </Link>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <Accordion.Root
              type="single"
              collapsible
              className="space-y-5"
            >

              {faqs.map((faq, index) => (

                <Accordion.Item
                  key={index}
                  value={`item-${index}`}
                  className="rounded-2xl bg-white shadow-md overflow-hidden"
                >

                  <Accordion.Header>

                    <Accordion.Trigger
                      className="group flex w-full items-center justify-between p-6 text-left"
                    >

                      <span className="text-lg font-semibold text-gray-900">

                        {faq.question}

                      </span>

                      <ChevronDown
                        className="transition duration-300 group-data-[state=open]:rotate-180"
                      />

                    </Accordion.Trigger>

                  </Accordion.Header>

                  <Accordion.Content
                    className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp"
                  >

                    <div className="px-6 pb-6 text-gray-600 leading-8">

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