"use client";

import React, { useState } from "react";
import { productsData } from "@/lib/product";
import { ProductDetail } from "@/components/product";
import { useSectionInView } from "@/lib/hooks";

export const ProjectContainer = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  const [activeProductId, setActiveProductId] = useState(
    productsData[0]?.id || "",
  );

  const activeProduct = productsData.find((p) => p.id === activeProductId);

  if (!activeProduct) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-600 dark:text-slate-400">Not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen" ref={ref}>
      {/* Product Detail Section */}
      <ProductDetail
        product={activeProduct}
        products={productsData}
        activeProductId={activeProductId}
        onProductChange={setActiveProductId}
      />
    </div>
  );
};
