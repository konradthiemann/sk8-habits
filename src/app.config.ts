/**
 * Central per-app configuration. This file (plus the accent block in
 * index.css) is what distinguishes the three SK8 apps from each other.
 */
export const appConfig = {
  /** Identifier sent with every telemetry batch. */
  id: "habits",
  name: "SK8 Habits",
  shortName: "Habits",
  description: "Gewohnheiten, Schlaf und Knie-Check auf dem Weg zum Contest.",
  themeColor: "#6d28d9",
  backgroundColor: "#121017",
} as const;

export type AppId = typeof appConfig.id;
