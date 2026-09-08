import { Activity, House, ListChecks, type LucideIcon, Moon } from "lucide-react";
import type { FileRouteTypes } from "@/routeTree.gen";

export interface AppSection {
  to: FileRouteTypes["to"];
  /** Short label for the bottom navigation. */
  label: string;
  /** Screen title (heading, start-screen card). */
  title: string;
  description: string;
  icon: LucideIcon;
  /** data-track value of the start-screen card. */
  track: string;
}

/** The app's feature areas – shown as cards on the start screen. */
export const sections: readonly AppSection[] = [
  {
    to: "/today",
    label: "Heute",
    title: "Heute",
    description: "Deine Gewohnheiten für heute abhaken – klein, konsequent, jeden Tag.",
    icon: ListChecks,
    track: "start.today",
  },
  {
    to: "/sleep",
    label: "Schlaf",
    title: "Schlaf",
    description: "Schlafdauer und -qualität festhalten und Muster über Wochen erkennen.",
    icon: Moon,
    track: "start.sleep",
  },
  {
    to: "/knee",
    label: "Knie",
    title: "Knie-Check",
    description:
      "Kurzer täglicher Check: Schmerz, Schwellung, Beweglichkeit – rechtzeitig gegensteuern.",
    icon: Activity,
    track: "start.knee",
  },
];

/** Bottom navigation: start plus all sections. */
export const navItems: readonly Pick<AppSection, "to" | "label" | "icon">[] = [
  { to: "/", label: "Start", icon: House },
  ...sections,
];

export function getSection(to: AppSection["to"]): AppSection {
  const section = sections.find((entry) => entry.to === to);
  if (section === undefined) {
    throw new Error(`Unknown section: ${to}`);
  }
  return section;
}
