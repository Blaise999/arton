// data/timelineEvents.d.ts

export type TimelineEvent = {
  year: number;
  month: string; // "Oct"
  title: string;
  text: string;
};

export const TIMELINE_EVENTS: TimelineEvent[];
