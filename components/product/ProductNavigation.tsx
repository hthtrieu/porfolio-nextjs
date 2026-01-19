"use client";

import { Product } from "@/lib/product";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

interface ProductNavigationProps {
  products: Product[];
  activeProductId: string;
  onProductChange: (productId: string) => void;
}

export default function ProductNavigation({
  products,
  activeProductId,
  onProductChange,
}: ProductNavigationProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Width of one card + gap
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "right" ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const navigateProject = (direction: "prev" | "next") => {
    const currentIndex = products.findIndex((p) => p.id === activeProductId);
    let newIndex;

    if (direction === "next") {
      newIndex = currentIndex < products.length - 1 ? currentIndex + 1 : 0;
    } else {
      newIndex = currentIndex > 0 ? currentIndex - 1 : products.length - 1;
    }

    onProductChange(products[newIndex].id);
  };

  return (
    <section className="w-full mt-16 mb-10">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-[#06bcf9] text-xs font-black uppercase tracking-widest mb-1">
            Repositories
          </h3>
          <p className="text-slate-900 dark:text-white text-2xl font-bold font-display">
            Projects
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <button
              onClick={() => navigateProject("prev")}
              className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-[#06bcf9] hover:text-white transition-all border border-slate-200 dark:border-slate-700"
              aria-label="Previous project"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => navigateProject("next")}
              className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-[#06bcf9] hover:text-white transition-all border border-slate-200 dark:border-slate-700"
              aria-label="Next project"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Scroll Controls */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-3 rounded-lg transition-all border ${
                canScrollLeft
                  ? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-[#06bcf9] hover:text-white border-slate-200 dark:border-slate-700"
                  : "bg-slate-100/50 dark:bg-slate-800/50 text-slate-400 dark:text-slate-600 border-slate-200/50 dark:border-slate-700/50 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-3 rounded-lg transition-all border ${
                canScrollRight
                  ? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-[#06bcf9] hover:text-white border-slate-200 dark:border-slate-700"
                  : "bg-slate-100/50 dark:bg-slate-800/50 text-slate-400 dark:text-slate-600 border-slate-200/50 dark:border-slate-700/50 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              onClick={() => onProductChange(product.id)}
              className={`group relative cursor-pointer flex-shrink-0 w-[300px] rounded-xl overflow-hidden transition-all snap-start ${
                product.id === activeProductId
                  ? "ring-4 ring-[#06bcf9] shadow-[0_0_30px_rgba(6,188,249,0.5)]"
                  : "hover:ring-2 hover:ring-[#06bcf9]/50"
              }`}
            >
              {/* Card Background */}
              <div className="relative h-[200px] bg-[#0a0f12] border border-slate-800">
                {/* Image */}
                <Image
                  alt={product.title}
                  src={product.imageUrl}
                  fill
                  className={`object-cover transition-all duration-500 ${
                    product.id === activeProductId
                      ? "grayscale-0 opacity-100"
                      : "grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-80"
                  }`}
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f12] via-transparent to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p
                    className={`text-[10px] font-bold uppercase tracking-wider mb-1 transition-colors ${
                      product.id === activeProductId
                        ? "text-[#06bcf9]"
                        : "text-slate-500 group-hover:text-[#06bcf9]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}. {product.category}
                  </p>
                  <h4
                    className={`font-bold font-display text-lg transition-colors ${
                      product.id === activeProductId
                        ? "text-white"
                        : "text-slate-400 group-hover:text-white"
                    }`}
                  >
                    {product.title}
                  </h4>
                </div>

                {/* Active Indicator */}
                {product.id === activeProductId && (
                  <div className="absolute top-3 right-3">
                    <div className="w-3 h-3 bg-[#06bcf9] rounded-full animate-pulse shadow-[0_0_10px_rgba(6,188,249,0.8)]"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
