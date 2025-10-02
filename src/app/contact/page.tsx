import React from 'react'
import Image from "next/image";
import hero from "@/assets/image.png";
const page = () => {
  return (
    <div className="flex min-h-screen mt-6">
      {/* Left Side: Contact Info */}
      <div className="flex-1 bg-white flex flex-col justify-center pl-32 pt-16">
  <h1 className="text-5xl font-bold mb-6" style={{ color: "#808080" }}>
        EDITORIAL PROCESSES
      </h1>
        <hr className="w-16 my-5 border-t-2 border-gray-300" />
        <div className="text-lg text-[#808080]  max-w-lg">
          <b>Editor-in-Chief, Mycological Spectrum</b><br />
          Association of Fungal Biologists<br />
          Department of Botany<br />
          SIES College of Arts, Science & Commerce<br />
          (Empowered Autonomous)<br />
          Sion (West) Mumbai - 400022, India<br />
          Email: <a href="mailto:mycologicalspectrum@gmail.com" className="text-primary-black-v3">mycologicalspectrum@gmail.com</a>
          <br /><br />
          <b>Publisher</b><br />
          <b>President, Association of Fungal Biologists</b><br />
          Department of Botany<br />
          SIES College of Arts, Science & Commerce<br />
          (Empowered Autonomous)<br />
          Sion (West) Mumbai - 400022, India<br />
          Email: <a href="mailto:fungalbiologist@gmail.com" className="text-primary-black-v3">fungalbiologist@gmail.com</a><br />
          Phone: +91 98205 10292<br />
          Website: <a href="https://afbindia.com/" target="_blank" rel="noopener noreferrer" className="text-primary-black-v3">https://afbindia.com/</a>
        </div>
      </div>
      {/* Right Side: Mushroom Image */}
      <div className="flex-1 bg-cover bg-center mt-10" style={{
        backgroundImage: `url(${hero.src})`
      }}>
      </div>
    </div>
  )
}

export default page