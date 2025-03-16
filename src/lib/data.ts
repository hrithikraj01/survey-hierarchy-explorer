
import { HierarchyItem, SurveyQuestion } from "./types";

export const hierarchyItems: HierarchyItem[] = [
  {
    id: "mid-senior-developer",
    title: "Mid-Senior Developer",
    description: "For developers with 3-5 years of experience leading small teams or features",
    goal: "Your feedback will help create environments where developers can maintain focus while building team bonds and experiencing new places."
  },
  {
    id: "senior-developer",
    title: "Senior Developer",
    description: "For developers with 5+ years of experience leading significant technical initiatives",
    goal: "Your insights will help shape work environments where senior developers can mentor others while maintaining productivity in versatile settings."
  },
  {
    id: "project-manager",
    title: "Project/Product Manager",
    description: "For professionals managing projects, teams, and product requirements",
    goal: "Your perspective will help design structured remote collaboration models that maintain team alignment and project visibility while offering flexibility."
  },
  {
    id: "senior-hr",
    title: "Senior HR",
    description: "For HR leaders responsible for organizational development and talent management",
    goal: "Your feedback will help create HR policies that support work-life balance while maintaining company culture in distributed teams."
  },
  {
    id: "senior-director",
    title: "Senior Director",
    description: "For directors leading multiple teams or departments",
    goal: "Your input will help develop leadership approaches that maintain strategic alignment while embracing location flexibility."
  },
  {
    id: "coo",
    title: "COO",
    description: "For Chief Operating Officers responsible for day-to-day operations",
    goal: "Your perspective will inform operational frameworks that support company objectives while embracing flexible work models."
  },
  {
    id: "cfo",
    title: "CFO",
    description: "For Chief Financial Officers managing financial strategy and operations",
    goal: "Your insights will help shape financial models and benefits packages that balance budget considerations with employee flexibility."
  },
  {
    id: "ceo",
    title: "CEO",
    description: "For Chief Executive Officers leading the entire organization",
    goal: "Your viewpoint will guide executive strategies on building high-performance organizations that embrace modern work-life integration."
  }
];

export const surveyQuestions: SurveyQuestion[] = [
  // Mid-Senior Developer questions
  {
    id: "dev-mid-1",
    question: "Would you be more productive coding in a new environment (beach, mountains, etc.) for a few weeks?",
    applicableRoles: ["mid-senior-developer"]
  },
  {
    id: "dev-mid-2",
    question: "Do you feel team bonding would improve if your team worked together from a vacation destination for 2 weeks?",
    applicableRoles: ["mid-senior-developer"]
  },
  {
    id: "dev-mid-3",
    question: "Would you be interested in a company-sponsored workcation with your team?",
    applicableRoles: ["mid-senior-developer"]
  },
  {
    id: "dev-mid-4",
    question: "Do you think your code quality would improve with a change of environment?",
    applicableRoles: ["mid-senior-developer"]
  },
  {
    id: "dev-mid-5",
    question: "Would you prefer a structured workday with team activities during a workcation?",
    applicableRoles: ["mid-senior-developer"]
  },
  
  // Senior Developer questions
  {
    id: "dev-senior-1",
    question: "Would mentoring junior devs be easier in a relaxed setting away from the office?",
    applicableRoles: ["senior-developer"]
  },
  {
    id: "dev-senior-2",
    question: "Would you consider a workcation beneficial for architecting new features?",
    applicableRoles: ["senior-developer"]
  },
  {
    id: "dev-senior-3",
    question: "Do you think a change of environment would help with solving complex technical problems?",
    applicableRoles: ["senior-developer"]
  },
  {
    id: "dev-senior-4",
    question: "Would you value a company-organized retreat that combines work and team building?",
    applicableRoles: ["senior-developer"]
  },
  {
    id: "dev-senior-5",
    question: "Could code reviews and technical discussions be effective in a vacation-like setting?",
    applicableRoles: ["senior-developer"]
  },
  
  // Project/Product Manager questions
  {
    id: "pm-1",
    question: "Do you think sprint planning could be effectively conducted during a team workcation?",
    applicableRoles: ["project-manager"]
  },
  {
    id: "pm-2",
    question: "Would backlog grooming and stakeholder updates be manageable from a remote destination?",
    applicableRoles: ["project-manager"]
  },
  {
    id: "pm-3",
    question: "Could a team workcation improve the quality of retrospective meetings?",
    applicableRoles: ["project-manager"]
  },
  {
    id: "pm-4",
    question: "Do you think team velocity would improve during/after a work retreat?",
    applicableRoles: ["project-manager"]
  },
  {
    id: "pm-5",
    question: "Would you be comfortable managing deadlines during a company-sponsored workcation?",
    applicableRoles: ["project-manager"]
  },
  
  // HR questions
  {
    id: "hr-1",
    question: "Would offering workcations improve employee retention?",
    applicableRoles: ["senior-hr"]
  },
  {
    id: "hr-2",
    question: "Could team retreats in attractive locations be a valuable recruiting tool?",
    applicableRoles: ["senior-hr"]
  },
  {
    id: "hr-3",
    question: "Do you think workcations would reduce burnout among your staff?",
    applicableRoles: ["senior-hr"]
  },
  {
    id: "hr-4",
    question: "Would performance reviews be more effective after teams have bonded during retreats?",
    applicableRoles: ["senior-hr"]
  },
  {
    id: "hr-5",
    question: "Could company culture be strengthened through periodic team workcations?",
    applicableRoles: ["senior-hr"]
  },
  
  // Senior Director questions
  {
    id: "dir-1",
    question: "Would strategic planning benefit from being conducted in a retreat setting?",
    applicableRoles: ["senior-director"]
  },
  {
    id: "dir-2",
    question: "Could you effectively oversee multiple teams if they occasionally worked from vacation destinations?",
    applicableRoles: ["senior-director"]
  },
  {
    id: "dir-3",
    question: "Do you think team alignment would improve after department-wide retreats?",
    applicableRoles: ["senior-director"]
  },
  {
    id: "dir-4",
    question: "Would innovation increase if teams periodically worked from inspiring locations?",
    applicableRoles: ["senior-director"]
  },
  {
    id: "dir-5",
    question: "Would you consider implementing quarterly workcations for your department?",
    applicableRoles: ["senior-director"]
  },
  
  // COO questions
  {
    id: "coo-1",
    question: "Could core business operations continue smoothly with teams periodically on workcations?",
    applicableRoles: ["coo"]
  },
  {
    id: "coo-2",
    question: "Would workcations provide a positive return on investment through improved productivity?",
    applicableRoles: ["coo"]
  },
  {
    id: "coo-3",
    question: "Do you think cross-functional collaboration would improve through company retreats?",
    applicableRoles: ["coo"]
  },
  {
    id: "coo-4",
    question: "Could operational efficiency be maintained if teams worked from remote destinations?",
    applicableRoles: ["coo"]
  },
  {
    id: "coo-5",
    question: "Would periodic team workcations fit into your operational strategy?",
    applicableRoles: ["coo"]
  },
  
  // CFO questions
  {
    id: "cfo-1",
    question: "Could workcations be justified financially through improved team performance?",
    applicableRoles: ["cfo"]
  },
  {
    id: "cfo-2",
    question: "Would you consider allocating budget for team retreats if productivity metrics improved?",
    applicableRoles: ["cfo"]
  },
  {
    id: "cfo-3",
    question: "Do you think the cost of workcations could be offset by reduced office space needs?",
    applicableRoles: ["cfo"]
  },
  {
    id: "cfo-4",
    question: "Would retention savings justify investment in periodic team retreats?",
    applicableRoles: ["cfo"]
  },
  {
    id: "cfo-5",
    question: "Could quarterly financial planning be conducted effectively from a retreat setting?",
    applicableRoles: ["cfo"]
  },
  
  // CEO questions
  {
    id: "ceo-1",
    question: "Would you consider workcations as part of your company's long-term work model?",
    applicableRoles: ["ceo"]
  },
  {
    id: "ceo-2",
    question: "Do you think company vision and values could be better reinforced through team retreats?",
    applicableRoles: ["ceo"]
  },
  {
    id: "ceo-3",
    question: "Would investor relations be affected if your company adopted regular team workcations?",
    applicableRoles: ["ceo"]
  },
  {
    id: "ceo-4",
    question: "Could executive strategy sessions be more effective in retreat settings?",
    applicableRoles: ["ceo"]
  },
  {
    id: "ceo-5",
    question: "Would you personally lead by example by participating in workcations with your teams?",
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
