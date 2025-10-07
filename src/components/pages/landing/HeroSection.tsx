"use client";

import Image from "next/image";
import hero from "@/assets/image.png";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={hero}
          alt="Hero Background"
          fill
          className="object-cover blur-[2px]"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white flex flex-col items-center gap-6 sm:gap-8 max-w-4xl mx-auto">
        {/* Straight Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold relative">
          Sanjeev Agrawal Global Educational University Bhopal
          {/* Curved underline */}
          <svg
            className="absolute left-1/2 -bottom-6 -translate-x-1/2 w-[90%] max-w-3xl"
            viewBox="0 0 800 200"
          >
            <path
              d="M 100 150 Q 400 50 700 150"
              stroke="white"
              strokeWidth="4"
              fill="transparent"
              strokeLinecap="round"
            />
          </svg>
        </h1>

        {/* Button */}
        <Button
          size="lg"
          variant="default"
          className="border-primary-yellow bg-white text-primary-yellow hover:bg-primary-yellow hover:text-white transition-all duration-300"
          onClick={() =>
            window.open("https://sageuniversity.edu.in/", "_blank")
          }
        >
          Published by SAGE
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
