import * as React from "react";

export interface VerticalTimelineProps {
  animate?: boolean | undefined;
  children?: React.ReactNode | any;
  className?: string | undefined;
  layout?:
    | "1-column"
    | "1-column-left"
    | "1-column-right"
    | "2-columns"
    | undefined;
  lineColor?: string | undefined;
}

export interface VerticalTimelineElementProps {
  children?: React.ReactNode | any;
  id?: string | undefined;
  className?: string | undefined;
  date?: string | undefined;
  dateClassName?: string | undefined;
  iconClassName?: string | undefined;
  iconOnClick?: (() => void) | undefined;
  iconStyle?: React.CSSProperties | undefined;
  icon?: React.ReactNode | undefined;
  intersectionObserverProps?: any;
  onTimelineElementClick?: (() => void) | undefined;
  position?: string | undefined;
  style?: React.CSSProperties | undefined;
  textClassName?: string | undefined;
  contentStyle?: React.CSSProperties | undefined;
  contentArrowStyle?: React.CSSProperties | undefined;
  visible?: boolean | undefined;
}

export class VerticalTimeline extends React.Component<
  VerticalTimelineProps | Element[] | IteratorResult<Element, any> | any
> {}
export class VerticalTimelineElement extends React.Component<
  VerticalTimelineElementProps | IteratorResult<Element, any> | Element[] | any
> {}

declare module "react-particles";
