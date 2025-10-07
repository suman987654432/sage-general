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
         
          <b>Dr. Lokesh Verma</b><br />
          R&amp;D Cell, Sanjeev Agrawal Global Educational (SAGE) University<br />
          <a href="mailto:lokesh.v@sageuniversity.edu.in" className="text-primary-black-v3">lokesh.v@sageuniversity.edu.in</a>
          <br /><br />
          <b>Dr. Sunil Atulkar</b><br />
          R&amp;D Cell, Sanjeev Agrawal Global Educational (SAGE) University<br />
          <a href="mailto:sunil.a@sageuniversity.edu.in" className="text-primary-black-v3">sunil.a@sageuniversity.edu.in</a>
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