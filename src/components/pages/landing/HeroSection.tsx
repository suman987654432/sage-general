"use client";

import Image from "next/image";
import hero from "@/assets/image.png";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <Image
          src={hero}
          alt="Hero Background"
          fill
          className="object-cover blur-[2px]"
          priority
        />

        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white flex flex-col items-center gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-2 px-2">
          jsggfgwkuvjfevlhfvlhlfhbjfhbj
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 sm:mb-6 px-2 leading-tight">
          Sage University Bhopal
        </h1>
        <Button
          size="lg"
          variant="default"
          className="mt-2 sm:mt-4 px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 text-base sm:text-lg md:text-xl font-bold bg-white text-primary-black hover:bg-gray-100 w-auto min-w-[200px] sm:min-w-[250px]"
          onClick={() => window.open("https://sageuniversity.edu.in/", "_blank")}
        >
          Published by SAGE
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
