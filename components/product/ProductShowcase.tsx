"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductShowcaseProps {
  imageUrl: string;
  title: string;
  version?: string;
  status?: string;
}

export default function ProductShowcase({
  imageUrl,
  title,
  version = "1.0.0",
  status = "ACTIVE",
}: ProductShowcaseProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-[#06bcf9] to-[#39ff14] rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
      <div className="relative w-full aspect-video bg-[#0a0f12] rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center">
        {/* Pixel Grid Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        {/* Main Image */}
        <div className="relative w-full h-full">
          <Image
            alt={title}
            src={imageUrl}
            fill
            className={`object-cover transition-all duration-700 ${
              isHovered
                ? "mix-blend-normal grayscale-0"
                : "mix-blend-overlay opacity-80 grayscale-[20%]"
            }`}
          />
        </div>

        {/* Version Info Overlay */}

        {/* Play Button */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 cursor-pointer ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-16 h-16 rounded-full bg-[#06bcf9]/20 backdrop-blur-md border border-[#06bcf9] flex items-center justify-center text-[#06bcf9] shadow-[0_0_15px_rgba(6,188,249,0.5)] hover:scale-110 transition-transform">
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
