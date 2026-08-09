"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

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
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-600 via-sky-700 to-blue-900 py-24">

      {/* Decorative Circles */}

      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white max-w-3xl mx-auto"
        >
          <span className="inline-block bg-white/20 rounded-full px-4 py-2 font-medium">

            Testimonials

          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold">

            What Families Say About Us

          </h2>

          <p className="mt-6 text-lg text-sky-100 leading-8">

            Nothing means more to us than the trust families place in our
            caregivers. Here's what they have to say.

          </p>

        </motion.div>

        {/* Swiper */}

        <div className="mt-20">

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
          >

            {testimonials.map((item) => (

              <SwiperSlide key={item.name}>

                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  className="rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 p-8 shadow-xl h-full"
                >

                  {/* Stars */}

                  <div className="flex gap-1">

                    {Array.from({ length: 5 }).map((_, i) => (

                      <Star
                        key={i}
                        size={20}
                        className="fill-yellow-400 text-yellow-400"
                      />

                    ))}

                  </div>

                  {/* Quote */}

                  <p className="mt-6 text-white leading-8 italic">

                    "{item.quote}"

                  </p>

                  {/* Client */}

                  <div className="mt-8 flex items-center gap-4">

                    <Image
                      src={item.image}
                      alt={item.name}
                      width={70}
                      height={70}
                      className="rounded-full object-cover border-4 border-white"
                    />

                    <div>

                      <h4 className="text-white font-semibold text-lg">

                        {item.name}

                      </h4>

                      <p className="text-sky-100">

                        {item.role}

                      </p>

                    </div>

                  </div>

                </motion.div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      </div>

    </section>
  );
}