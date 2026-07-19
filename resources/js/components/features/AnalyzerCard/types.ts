// NOTE Props untuk response laravel 
export interface RoleAnalysisRaw {
  role: string;
  label: string;
  score: number;
  gap_skill: string[];
}

// Bentuk data yang dipakai komponen UI Results
export interface RoleRecommendation {
  id: string;   // dipetakan dari `role` (dipakai sebagai key unik & identitas selected)
  name: string; // dipetakan dari `role`, ditampilkan ke user
}

export interface SkillNeeded {
  id: string;
  name: string;
}

export interface AnalyzerResultData {
  matchScore: number;                          // score dari role yang sedang dipilih
  matchLabel: string;                           // label dari role yang sedang dipilih
  recommendationRoles: RoleRecommendation[];     // daftar semua role dari response
  topNeededSkills: SkillNeeded[];                // gap_skill dari role yang sedang dipilih
}

export interface AnalyzerErrorResponse {
  code: string;
  message: string;
  filename: string;
  suggestion: string;
}
 