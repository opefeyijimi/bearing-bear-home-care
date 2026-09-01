"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Daughter of Client",
    image: "/images/testimonials/client1.jpg",
    quote:
      "Bearing Bear gave our family peace of mind. Their caregivers treated my mother with genuine kindness and respect. We couldn't have asked for better support.",
  },
  {
    name: "James Robinson",
    role: "Family Member",
    image: "/images/testimonials/client2.jpg",
    quote:
      "Professional, dependable, and compassionate. Every visit brought comfort and companionship to my father. We highly recommend their services.",
  },
  {
    name: "Linda Carter",
    role: "Client",
    image: "/images/testimonials/client3.jpg",
    quote:
      "The caregivers became like family. They always arrived with a smile and made every day brighter.",
  },
  {
    name: "Michael Brown",
    role: "Son of Client",
    image: "/images/testimonials/client4.jpg",
    quote:
      "Excellent communication, wonderful caregivers, and exceptional service from beginning to end.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-brand-green-pale py-24"
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-brand-green-light/10 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-brand-green-light/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* =====================================================
            HEADING
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-white px-4 py-2 font-medium text-brand-green-dark shadow-sm">
            Testimonials
          </span>

          <h2 className="mt-6 font-heading text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
            What Families Say About Us
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nothing means more to us than the trust families place in our
            caregivers. Here's what they have to say.
          </p>
        </motion.div>

        {/* =====================================================
            TESTIMONIAL SLIDER
        ===================================================== */}

        <div className="mt-16 lg:mt-20">

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            className="pb-12"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.name} className="h-auto">

                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="relative flex h-full min-h-[360px] flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-2xl"
                >

                  {/* Quote Icon */}

                  <div className="absolute right-8 top-8 flex h-12 w-12 items-center justify-center rounded-full bg-brand-green-pale">
                    <Quote
                      size={24}
                      className="text-brand-green"
                    />
                  </div>

                  {/* Stars */}

                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={19}
                        className="fill-brand-yellow text-brand-yellow"
                      />
                    ))}
                  </div>

                  {/* Quote */}

                  <p className="mt-7 flex-1 text-lg leading-8 text-gray-600">
                    "{item.quote}"
                  </p>

                  {/* Divider */}

                  <div className="my-7 h-px w-full bg-gray-100" />

                  {/* Client */}

                  <div className="flex items-center gap-4">

                    <Image
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded-full border-4 border-brand-green-pale object-cover"
                    />

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h4>

                      <p className="mt-1 text-sm text-gray-500">
                        {item.role}
                      </p>
                    </div>

                  </div>

                </motion.div>

              </SwiperSlide>
            ))}
          </Swiper>

        </div>

        {/* =====================================================
            TRUST STATEMENT
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto mt-10 max-w-3xl text-center"
        >

          <p className="text-base leading-7 text-gray-600">
            Every family deserves care they can trust, and every client
            deserves to feel valued, respected, and at home.
          </p>

        </motion.div>

      </div>
    </section>
  );
}