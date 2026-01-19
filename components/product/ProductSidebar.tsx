"use client";

import { Product } from "@/lib/product";
import Image from "next/image";

interface ProductSidebarProps {
  product: Product;
  products: Product[];
  activeProductId: string;
  onProductChange: (productId: string) => void;
}

export default function ProductSidebar({
  product,
  products,
  activeProductId,
  onProductChange,
}: ProductSidebarProps) {
  // Collect all tech stack items from different categories
  const allTechStack = [
    ...(product.techStack?.backend || []),
    ...(product.techStack?.frontend || []),
    ...(product.techStack?.messaging || []),
    ...(product.techStack?.database || []),
    ...(product.techStack?.queue || []),
    ...(product.techStack?.externalServices || []),
    ...(product.techStack?.aiServices || []),
    ...(product.techStack?.automation || []),
    ...(product.techStack?.integrations || []),
  ];
  return (
    <div className="lg:col-span-4 flex flex-col gap-4">
      {/* Project Intel Card */}
      <div className="bg-[#1b2427] p-6 rounded-xl border border-[#3a4e55]">
        <h2 className="text-white text-xl font-bold mb-6">Project Intel</h2>
        <div className="space-y-6">
          {/* Role */}
          {product.role && (
            <div className="flex gap-4">
              <div className="text-[#06bcf9] mt-1">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">My Role</h4>
                <p className="text-sm text-[#9bb3bb]">
                  {product.role.position}
                </p>
              </div>
            </div>
          )}

          {/* Tech Stack */}
          {allTechStack.length > 0 && (
            <div className="flex gap-4">
              <div className="text-[#06bcf9] mt-1">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <div className="w-full">
                <h4 className="text-sm font-bold text-white mb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {allTechStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded text-[10px] font-mono font-bold bg-slate-800 text-slate-300 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Project List - Kho lưu trữ */}
      <div className="bg-[#1b2427] p-6 rounded-xl border border-[#3a4e55]">
        <div className="mb-4">
          <h3 className="text-[#06bcf9] text-xs font-black uppercase tracking-widest mb-1">
            Repositories
          </h3>
          <p className="text-white text-lg font-bold font-display">
            List of Projects
          </p>
        </div>

        {/* Scrollable Project List */}
        <div className="space-y-3 p-3 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          {products.map((product, index) => (
            <div
              key={product.id}
              onClick={() => onProductChange(product.id)}
              className={`group relative cursor-pointer p-3 rounded-lg transition-all ${
                product.id === activeProductId
                  ? "bg-[#06bcf9]/10 ring-2 ring-[#06bcf9] shadow-[0_0_15px_rgba(6,188,249,0.3)]"
                  : "hover:bg-slate-800 border border-slate-700"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`size-16 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                    product.id === activeProductId
                      ? "border-[#06bcf9]"
                      : "border-slate-600"
                  }`}
                >
                  <Image
                    alt={product.title}
                    src={product.imageUrl}
                    width={64}
                    height={64}
                    className={`w-full h-full object-cover transition-all duration-300 ${
                      product.id === activeProductId
                        ? "grayscale-0"
                        : "grayscale group-hover:grayscale-0"
                    }`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-[10px] font-bold uppercase tracking-wider mb-1 transition-colors ${
                      product.id === activeProductId
                        ? "text-[#06bcf9]"
                        : "text-slate-400 group-hover:text-[#06bcf9]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}. {product.category}
                  </p>
                  <h4
                    className={`font-bold text-sm truncate transition-colors ${
                      product.id === activeProductId
                        ? "text-white"
                        : "text-slate-300 group-hover:text-white"
                    }`}
                  >
                    {product.title}
                  </h4>
                </div>

                {/* Active Indicator */}
                {product.id === activeProductId && (
                  <div className="shrink-0">
                    <div className="w-2 h-2 bg-[#06bcf9] rounded-full animate-pulse shadow-[0_0_8px_rgba(6,188,249,0.8)]"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
