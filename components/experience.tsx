"use client";
import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import VerticalTimeLineComponent from "./vertical-timeline/VerticalTimeLineComponent";

export default function Experience() {
  // const { ref } = useSectionInView("Experience");
  // const { theme } = useTheme();

  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience & awards</SectionHeading>
      <div className="max-w-[1170px] m-auto w-[95%] md:w-[90%] relative before:absolute before:h-full before:w-[4px] before:top-0 before:left-[10px] md:before:left-1/2 md:before:translate-x-[-50%] before:bg-gray-200 dark:before:bg-gray-500">
        {experiencesData.map((item: any, index: number) => (
          <VerticalTimeLineComponent
            key={index}
            title={item?.title}
            location={item?.location}
            description={item?.description}
            icon={item?.icon}
            date={item?.date}
            isReverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}
