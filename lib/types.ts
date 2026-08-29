export type AnalysisLevel = "low" | "medium" | "high";
export type FlagTone = "warning" | "good" | "neutral";
export type CheckMode = "gosti" | "pruzatelji";

export interface AnalysisFlag {
  label: string;
  detail: string;
  tone: FlagTone;
}

export interface AnalysisResult {
  level: AnalysisLevel;
  level_label: string;
  summary: string;
  flags: AnalysisFlag[];
  actions: string[];
}

export interface AnalyzeRequestBody {
  mode: CheckMode;
  propertyName: string;
  text: string;
  url: string;
}
