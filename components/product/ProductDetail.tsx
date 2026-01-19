"use client";

import { Product } from "@/lib/product";
import ProductHeader from "./ProductHeader";
import ProductShowcase from "./ProductShowcase";
import ProductFeatures from "./ProductFeatures";
import ProductSidebar from "./ProductSidebar";

interface ProductDetailProps {
  product: Product;
  products: Product[];
  activeProductId: string;
  onProductChange: (productId: string) => void;
}

export default function ProductDetail({
  product,
  products,
  activeProductId,
  onProductChange,
}: ProductDetailProps) {
  return (
    <main className="max-w-[1200px] mx-auto px-4 md:px-10 py-6">
      <ProductHeader title={product.title} subtitle={product.subtitle} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* <ProductShowcase
            imageUrl={product.imageUrl}
            title={product.title}
            version={product.version}
            status={product.status}
          /> */}

          {/* Overview */}
          {product.overview && (
            <div>
              <h4 className="text-[#06bcf9] font-bold text-sm uppercase tracking-wider mb-3">
                Overview
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-slate-400 mb-1">
                    Description:
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {product.overview.description}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-400 mb-1">
                    Usage:
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {product.overview.usage}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-400 mb-1">
                    Environment:
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {product.overview.environment}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Context */}
          {product.context && (
            <div>
              <h4 className="text-[#06bcf9] font-bold text-sm uppercase tracking-wider mb-3">
                Context
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-slate-400 mb-1">
                    Background:
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {product.context.background}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-400 mb-1">
                    Scale:
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {product.context.scale}
                  </p>
                </div>
                {product.context.constraints.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-slate-400 mb-2">
                      Constraints:
                    </p>
                    <ul className="space-y-2">
                      {product.context.constraints.map((constraint, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="size-1.5 bg-[#06bcf9] rounded-full mt-1.5"></span>
                          <span className="text-sm text-slate-300">
                            {constraint}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Problem */}
          {product.problem && (
            <div>
              <h4 className="text-[#06bcf9] font-bold text-sm uppercase tracking-wider mb-3">
                The Challenge
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed mb-3">
                {product.problem.description}
              </p>
              {product.problem.painPoints.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-slate-400 mb-2">
                    Pain Points:
                  </p>
                  <ul className="space-y-2">
                    {product.problem.painPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="size-1.5 bg-red-500 rounded-full mt-1.5"></span>
                        <span className="text-sm text-slate-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Features Section */}
          <ProductFeatures product={product} />
        </div>

        {/* Right Column - Sidebar */}
        <ProductSidebar
          product={product}
          products={products}
          activeProductId={activeProductId}
          onProductChange={onProductChange}
        />
      </div>
    </main>
  );
}
