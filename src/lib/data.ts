
import { HierarchyItem, SurveyQuestion } from "./types";

export const hierarchyItems: HierarchyItem[] = [
  {
    id: "mid-senior-developer",
    title: "Mid-Senior Developer",
    description: "For developers with 3-5 years of experience leading small teams or features"
  },
  {
    id: "senior-developer",
    title: "Senior Developer",
    description: "For developers with 5+ years of experience leading significant technical initiatives"
  },
  {
    id: "project-manager",
    title: "Project/Product Manager",
    description: "For professionals managing projects, teams, and product requirements"
  },
  {
    id: "senior-hr",
    title: "Senior HR",
    description: "For HR leaders responsible for organizational development and talent management"
  },
  {
    id: "senior-director",
    title: "Senior Director",
    description: "For directors leading multiple teams or departments"
  },
  {
    id: "coo",
    title: "COO",
    description: "For Chief Operating Officers responsible for day-to-day operations"
  },
  {
    id: "cfo",
    title: "CFO",
    description: "For Chief Financial Officers managing financial strategy and operations"
  },
  {
    id: "ceo",
    title: "CEO",
    description: "For Chief Executive Officers leading the entire organization"
  }
];

export const surveyQuestions: SurveyQuestion[] = [
  // Developer questions
  {
    id: "dev-code-review",
    question: "Do you regularly participate in code reviews?",
    applicableRoles: ["mid-senior-developer", "senior-developer"]
  },
  {
    id: "dev-architecture",
    question: "Have you designed system architecture for a significant feature?",
    applicableRoles: ["mid-senior-developer", "senior-developer"]
  },
  {
    id: "dev-mentorship",
    question: "Do you mentor junior developers?",
    applicableRoles: ["mid-senior-developer", "senior-developer"]
  },
  {
    id: "dev-tech-decisions",
    question: "Do you influence major technical decisions?",
    applicableRoles: ["senior-developer"]
  },
  {
    id: "dev-cross-team",
    question: "Do you collaborate across multiple teams or departments?",
    applicableRoles: ["senior-developer"]
  },
  
  // Project/Product Manager questions
  {
    id: "pm-timeline",
    question: "Do you establish project timelines and milestones?",
    applicableRoles: ["project-manager"]
  },
  {
    id: "pm-stakeholders",
    question: "Do you regularly communicate with external stakeholders?",
    applicableRoles: ["project-manager"]
  },
  {
    id: "pm-requirements",
    question: "Are you responsible for gathering and prioritizing requirements?",
    applicableRoles: ["project-manager"]
  },
  {
    id: "pm-resource",
    question: "Do you manage resource allocation across projects?",
    applicableRoles: ["project-manager"]
  },
  
  // HR questions
  {
    id: "hr-policies",
    question: "Do you develop HR policies and procedures?",
    applicableRoles: ["senior-hr"]
  },
  {
    id: "hr-talent",
    question: "Are you involved in talent acquisition strategy?",
    applicableRoles: ["senior-hr"]
  },
  {
    id: "hr-development",
    question: "Do you implement employee development programs?",
    applicableRoles: ["senior-hr"]
  },
  
  // Director questions
  {
    id: "dir-strategy",
    question: "Do you participate in setting organizational strategy?",
    applicableRoles: ["senior-director"]
  },
  {
    id: "dir-multi-team",
    question: "Do you oversee multiple teams or departments?",
    applicableRoles: ["senior-director"]
  },
  {
    id: "dir-budget",
    question: "Are you responsible for budget management?",
    applicableRoles: ["senior-director"]
  },
  
  // Executive questions
  {
    id: "exec-stakeholders",
    question: "Do you regularly communicate with the board or investors?",
    applicableRoles: ["coo", "cfo", "ceo"]
  },
  {
    id: "exec-vision",
    question: "Do you set the vision and long-term goals for the organization?",
    applicableRoles: ["coo", "cfo", "ceo"]
  },
  {
    id: "coo-ops",
    question: "Are you responsible for optimizing company operations?",
    applicableRoles: ["coo"]
  },
  {
    id: "cfo-financial",
    question: "Do you oversee all financial planning and reporting?",
    applicableRoles: ["cfo"]
  },
  {
    id: "ceo-leadership",
    question: "Are you the final decision maker on key company matters?",
    applicableRoles: ["ceo"]
  }
];

// Helper function to get hierarchy item by ID
export const getHierarchyById = (id: string): HierarchyItem | undefined => {
  return hierarchyItems.find(item => item.id === id);
};

// Helper function to get questions for a specific role
export const getQuestionsForRole = (role: string): SurveyQuestion[] => {
  return surveyQuestions.filter(q => q.applicableRoles.includes(role as any));
};
