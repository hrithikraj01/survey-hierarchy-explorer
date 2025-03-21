
export type HierarchyRole = 
  | "mid-senior-developer"
  | "senior-developer" 
  | "project-manager" 
  | "senior-hr" 
  | "senior-director" 
  | "coo" 
  | "cfo" 
  | "ceo";

export interface HierarchyItem {
  id: HierarchyRole;
  title: string;
  description: string;
  goal?: string;
}

export interface UserDetails {
  fullName: string;
  companyName: string;
  jobTitle: string;
  email: string; // Added email field
  role: HierarchyRole;
}

export interface SurveyQuestion {
  id: string;
  question: string;
  applicableRoles: HierarchyRole[];
}

export interface SurveyResponse {
  questionId: string;
  answer: boolean;
}
