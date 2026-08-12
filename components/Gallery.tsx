"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Expand } from "lucide-react";
import { useEffect, useState } from "react";

const images = [
  {
    src: "/images/gallery/gallery1.png",
    title: "Compassionate Companion Care",
  },
  {
    src: "/images/gallery/gallery2.png",
    title: "Meaningful Conversations",
  },
  {
    src: "/images/gallery/gallery3.png",
    title: "Daily Living Assistance",
  },
  {
    src: "/images/gallery/gallery4.png",
    title: "Supporting Independence",
  },
  
];

/**
 * {
    src: "/images/gallery/gallery5.jpg",
    title: "Quality Time Together",
  },
*/

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", close);

    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <section id="gallery" className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="inline-block rounded-full bg-sky-100 px-4 py-2 text-sky-700 font-medium">

            Gallery

          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold">

            Moments That Matter

          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">

            Every interaction is built on compassion, dignity,
            respect, and meaningful companionship.

          </p>

        </motion.div>

        {/* Gallery */}

        {/* Gallery */}

<div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

  {images.map((image, index) => (

    <motion.div
      key={image.src}
      initial={{
        opacity: 1,
        y: 0,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
      }}
      className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-xl"
      onClick={() => setSelectedImage(image.src)}
    >

      {/* Fixed image frame */}
      <div className="relative aspect-[16/10] w-full">

        <Image
          src={image.src}
          alt={image.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />

      </div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Title */}

      <div className="absolute bottom-6 left-6 right-6 opacity-0 transition duration-500 group-hover:opacity-100">

        <h3 className="text-2xl font-bold text-white">
          {image.title}
        </h3>

      </div>

      {/* Expand button */}

      <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white opacity-0 transition group-hover:opacity-100">

        <Expand className="text-sky-600" />

      </div>

    </motion.div>

  ))}

</div>

      </div>

      {/* Lightbox */}

      <AnimatePresence>

        {selectedImage && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-8"
          >

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white"
            >
              <X size={40} />
            </button>

            <motion.div
              initial={{
                scale: .8,
              }}
              animate={{
                scale: 1,
              }}
              exit={{
                scale: .8,
              }}
              className="max-w-5xl w-full"
            >

              <Image
                src={selectedImage}
                alt="Gallery"
                width={1600}
                height={1000}
                className="rounded-3xl object-contain w-full max-h-[85vh]"
              />

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}