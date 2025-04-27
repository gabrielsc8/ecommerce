"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Carousel() {
  return (
    <div className="w-screen bg-[#eae2d5]">
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
        >
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="/banner.png"
                alt="Mais vendido"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center p-4 sm:p-8 md:flex-row md:justify-between md:p-16 z-10">
                <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                  <p className="uppercase text-sm text-black">O Último Lançamento da Sony</p>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-black">
                    R$ 299
                  </h1>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                    LANÇAMENTO DUALSHOCK
                  </h2>
                  <Link
                    href="/"
                    className="inline-block bg-black text-white px-5 py-2 sm:px-6 sm:py-3 rounded hover:bg-gray-800 transition"
                  >
                    COMPRAR
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
