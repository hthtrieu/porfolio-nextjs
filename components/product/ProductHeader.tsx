"use client";

interface ProductHeaderProps {
  title: string;
  subtitle: string;
}

export default function ProductHeader({ title, subtitle }: ProductHeaderProps) {
  return (
    <div className="text-center mb-10">
      <h1 className="text-white tracking-tight text-4xl md:text-5xl font-bold leading-tight pb-3">
        {title}
      </h1>
      <p className="text-[#9bb3bb] text-lg max-w-2xl mx-auto italic font-medium">
        {subtitle}
      </p>
    </div>
  );
}
