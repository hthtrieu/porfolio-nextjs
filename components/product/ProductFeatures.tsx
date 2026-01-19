"use client";

import { Product } from "@/lib/product";

interface ProductFeaturesProps {
  product: Product;
}

export default function ProductFeatures({ product }: ProductFeaturesProps) {
  return (
    <div className="space-y-6">
      {/* Architecture */}
      {product.architecture && (
        <div>
          <h3 className="text-[#06bcf9] text-xs font-black uppercase tracking-widest border-b border-[#06bcf9]/20 pb-2 mb-3">
            Architecture
          </h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold text-slate-400 mb-1">
                Pattern:
              </p>
              <p className="text-sm text-slate-300">
                {product.architecture.pattern}
              </p>
            </div>
            {product.architecture.highLevelFlow.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-slate-400 mb-2">
                  High-Level Flow:
                </p>
                <ul className="space-y-2">
                  {product.architecture.highLevelFlow.map((flow, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-xs text-[#06bcf9] font-bold mt-0.5">
                        {index + 1}.
                      </span>
                      <span className="text-sm text-slate-300">{flow}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* LLM Strategy */}
      {product.llmStrategy && (
        <div>
          <h3 className="text-[#06bcf9] text-xs font-black uppercase tracking-widest border-b border-[#06bcf9]/20 pb-2 mb-3">
            LLM Strategy
          </h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold text-slate-400 mb-1">
                Design:
              </p>
              <p className="text-sm text-slate-300">
                {product.llmStrategy.design}
              </p>
            </div>
            {product.llmStrategy.features.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-slate-400 mb-2">
                  Features:
                </p>
                <ul className="space-y-2">
                  {product.llmStrategy.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="size-1.5 bg-[#06bcf9] rounded-full mt-1.5"></span>
                      <span className="text-sm text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Pipeline Design */}
      {product.pipelineDesign && (
        <div>
          <h3 className="text-[#06bcf9] text-xs font-black uppercase tracking-widest border-b border-[#06bcf9]/20 pb-2 mb-3">
            Pipeline Design
          </h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold text-slate-400 mb-1">
                Pattern:
              </p>
              <p className="text-sm text-slate-300">
                {product.pipelineDesign.pattern}
              </p>
            </div>
            {product.pipelineDesign.stages.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-slate-400 mb-2">
                  Stages:
                </p>
                <ul className="space-y-2">
                  {product.pipelineDesign.stages.map((stage, index) => (
                    <li key={index} className="space-y-1">
                      <div className="flex items-start gap-2">
                        <span className="text-xs text-[#06bcf9] font-bold mt-0.5">
                          {index + 1}.
                        </span>
                        <span className="text-sm font-semibold text-slate-300">
                          {stage.stage}
                        </span>
                      </div>
                      <p className="text-sm text-slate-400 ml-5">
                        {stage.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Backend Responsibilities */}
      {product.backendResponsibilities &&
        product.backendResponsibilities.length > 0 && (
          <div>
            <h3 className="text-[#06bcf9] text-xs font-black uppercase tracking-widest border-b border-[#06bcf9]/20 pb-2 mb-3">
              Backend Responsibilities
            </h3>
            <ul className="space-y-2">
              {product.backendResponsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="size-1.5 bg-[#06bcf9] rounded-full mt-1.5"></span>
                  <span className="text-sm text-slate-300">
                    {responsibility}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

      {/* Performance */}
      {product.performance && (
        <div>
          <h3 className="text-[#06bcf9] text-xs font-black uppercase tracking-widest border-b border-[#06bcf9]/20 pb-2 mb-3">
            Performance
          </h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold text-slate-400 mb-1">
                Throughput:
              </p>
              {typeof product.performance.throughput === "string" ? (
                <p className="text-sm text-slate-300">
                  {product.performance.throughput}
                </p>
              ) : (
                <div className="text-sm text-slate-300 space-y-1">
                  {product.performance.throughput.bestCase && (
                    <p>Best Case: {product.performance.throughput.bestCase}</p>
                  )}
                  {product.performance.throughput.worstCase && (
                    <p>
                      Worst Case: {product.performance.throughput.worstCase}
                    </p>
                  )}
                </div>
              )}
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-400 mb-1">
                Processing Model:
              </p>
              <p className="text-sm text-slate-300">
                {product.performance.processingModel}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Impact */}
      {product.impact && (
        <div>
          <h3 className="text-[#06bcf9] text-xs font-black uppercase tracking-widest border-b border-[#06bcf9]/20 pb-2 mb-3">
            Impact
          </h3>
          <div className="space-y-3">
            {product.impact.automation && (
              <div>
                <p className="text-sm font-semibold text-slate-400 mb-1">
                  Automation:
                </p>
                <p className="text-sm text-slate-300">
                  {product.impact.automation}
                </p>
              </div>
            )}
            {product.impact.scale && (
              <div>
                <p className="text-sm font-semibold text-slate-400 mb-1">
                  Scale:
                </p>
                <p className="text-sm text-slate-300">{product.impact.scale}</p>
              </div>
            )}
            {product.impact.operationalBenefits.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-slate-400 mb-2">
                  Operational Benefits:
                </p>
                <ul className="space-y-2">
                  {product.impact.operationalBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="size-1.5 bg-green-500 rounded-full mt-1.5"></span>
                      <span className="text-sm text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Challenges and Tradeoffs */}
      {product.challengesAndTradeoffs &&
        product.challengesAndTradeoffs.length > 0 && (
          <div>
            <h3 className="text-[#06bcf9] text-xs font-black uppercase tracking-widest border-b border-[#06bcf9]/20 pb-2 mb-3">
              Challenges & Tradeoffs
            </h3>
            <ul className="space-y-2">
              {product.challengesAndTradeoffs.map((challenge, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="size-1.5 bg-yellow-500 rounded-full mt-1.5"></span>
                  <span className="text-sm text-slate-300">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
}
