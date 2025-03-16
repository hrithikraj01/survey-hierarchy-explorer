
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
    question: "Do you think your productivity would increase if you worked from a beach or mountain resort for a few weeks?",
    applicableRoles: ["mid-senior-developer"]
  },
  {
    id: "dev-mid-2",
    question: "Would seeing new environments inspire you to think differently about coding problems?",
    applicableRoles: ["mid-senior-developer"]
  },
  {
    id: "dev-mid-3",
    question: "Do you think team bonding would improve if your team worked together from a vacation destination?",
    applicableRoles: ["mid-senior-developer"]
  },
  {
    id: "dev-mid-4",
    question: "Would you be interested in a company-sponsored workation with your team?",
    applicableRoles: ["mid-senior-developer"]
  },
  {
    id: "dev-mid-5",
    question: "Do you believe your code quality would improve with a change of environment?",
    applicableRoles: ["mid-senior-developer"]
  },
  {
    id: "dev-mid-6",
    question: "Would you prefer a structured workday with team activities during a workation?",
    applicableRoles: ["mid-senior-developer"]
  },
  {
    id: "dev-mid-7",
    question: "Are you more productive working outside a traditional office environment?",
    applicableRoles: ["mid-senior-developer"]
  },
  {
    id: "dev-mid-8",
    question: "Would periodic team retreats help prevent burnout for you?",
    applicableRoles: ["mid-senior-developer"]
  },
  {
    id: "dev-mid-9",
    question: "Do you think collaborating with team members would be more effective in a relaxed setting?",
    applicableRoles: ["mid-senior-developer"]
  },
  {
    id: "dev-mid-10",
    question: "Would you be comfortable participating in daily standups during a workation?",
    applicableRoles: ["mid-senior-developer"]
  },
  {
    id: "dev-mid-11",
    question: "Do you think pair programming would be more productive in a vacation-like setting?",
    applicableRoles: ["mid-senior-developer"]
  },
  {
    id: "dev-mid-12",
    question: "Would working from scenic locations increase your job satisfaction?",
    applicableRoles: ["mid-senior-developer"]
  },
  {
    id: "dev-mid-13",
    question: "Are you concerned about maintaining work-life boundaries during a workation?",
    applicableRoles: ["mid-senior-developer"]
  },
  {
    id: "dev-mid-14",
    question: "Would you prefer a mix of solo and team workation opportunities?",
    applicableRoles: ["mid-senior-developer"]
  },
  {
    id: "dev-mid-15",
    question: "Do you feel that workations should be a regular part of your work arrangement?",
    applicableRoles: ["mid-senior-developer"]
  },
  {
    id: "dev-mid-16",
    question: "Would you value a company that offers workation options more than one that doesn't?",
    applicableRoles: ["mid-senior-developer"]
  },
  {
    id: "dev-mid-17",
    question: "Could you maintain focus on complex coding tasks in a vacation setting?",
    applicableRoles: ["mid-senior-developer"]
  },
  {
    id: "dev-mid-18",
    question: "Would you be willing to work flexible hours to accommodate team activities during a workation?",
    applicableRoles: ["mid-senior-developer"]
  },
  {
    id: "dev-mid-19",
    question: "Do you think code reviews could be effectively conducted during a workation?",
    applicableRoles: ["mid-senior-developer"]
  },
  {
    id: "dev-mid-20",
    question: "Would you be interested in workations even if you had to partially fund them yourself?",
    applicableRoles: ["mid-senior-developer"]
  },
  
  // Senior Developer questions
  {
    id: "dev-senior-1",
    question: "Would mentoring junior developers be easier in a relaxed setting away from the office?",
    applicableRoles: ["senior-developer"]
  },
  {
    id: "dev-senior-2",
    question: "Do you think architectural planning sessions would benefit from being held in inspiring locations?",
    applicableRoles: ["senior-developer"]
  },
  {
    id: "dev-senior-3",
    question: "Would you consider a workation beneficial for designing new features or systems?",
    applicableRoles: ["senior-developer"]
  },
  {
    id: "dev-senior-4",
    question: "Do you think a change of environment would help with solving complex technical problems?",
    applicableRoles: ["senior-developer"]
  },
  {
    id: "dev-senior-5",
    question: "Would you value a company-organized retreat that combines work and team building?",
    applicableRoles: ["senior-developer"]
  },
  {
    id: "dev-senior-6",
    question: "Could code reviews and technical discussions be effective in a vacation-like setting?",
    applicableRoles: ["senior-developer"]
  },
  {
    id: "dev-senior-7",
    question: "As a senior developer, would you find it easier to reflect on technical strategy away from daily distractions?",
    applicableRoles: ["senior-developer"]
  },
  {
    id: "dev-senior-8",
    question: "Would working from different environments help you think more creatively about technical solutions?",
    applicableRoles: ["senior-developer"]
  },
  {
    id: "dev-senior-9",
    question: "Do you think decision-making on technical matters would improve in a relaxed environment?",
    applicableRoles: ["senior-developer"]
  },
  {
    id: "dev-senior-10",
    question: "Would a workation setting make it easier to have difficult technical conversations with team members?",
    applicableRoles: ["senior-developer"]
  },
  {
    id: "dev-senior-11",
    question: "Do you believe that sharing living spaces during a workation would strengthen team rapport?",
    applicableRoles: ["senior-developer"]
  },
  {
    id: "dev-senior-12",
    question: "Would working from vacation destinations increase your overall job satisfaction?",
    applicableRoles: ["senior-developer"]
  },
  {
    id: "dev-senior-13",
    question: "As a senior developer, do you feel responsible for maintaining team productivity during a workation?",
    applicableRoles: ["senior-developer"]
  },
  {
    id: "dev-senior-14",
    question: "Would periodic workations help you avoid burnout?",
    applicableRoles: ["senior-developer"]
  },
  {
    id: "dev-senior-15",
    question: "Do you think knowledge sharing would be more effective in a retreat setting?",
    applicableRoles: ["senior-developer"]
  },
  {
    id: "dev-senior-16",
    question: "Would you be more likely to stay with a company long-term if they offered regular workations?",
    applicableRoles: ["senior-developer"]
  },
  {
    id: "dev-senior-17",
    question: "Could you effectively guide technical direction during a workation?",
    applicableRoles: ["senior-developer"]
  },
  {
    id: "dev-senior-18",
    question: "Would you be willing to be on call or handle critical issues during a workation?",
    applicableRoles: ["senior-developer"]
  },
  {
    id: "dev-senior-19",
    question: "Do you think team consensus on technical decisions would be easier to achieve in a retreat setting?",
    applicableRoles: ["senior-developer"]
  },
  {
    id: "dev-senior-20",
    question: "Would you support implementing regular team workations as part of your company's work culture?",
    applicableRoles: ["senior-developer"]
  },
  
  // Project/Product Manager questions
  {
    id: "pm-1",
    question: "Do you think sprint planning could be effectively conducted during a team workation?",
    applicableRoles: ["project-manager"]
  },
  {
    id: "pm-2",
    question: "Would backlog grooming and stakeholder updates be manageable from a remote destination?",
    applicableRoles: ["project-manager"]
  },
  {
    id: "pm-3",
    question: "Could a team workation improve the quality of retrospective meetings?",
    applicableRoles: ["project-manager"]
  },
  {
    id: "pm-4",
    question: "Do you think team velocity would improve during/after a work retreat?",
    applicableRoles: ["project-manager"]
  },
  {
    id: "pm-5",
    question: "Would you be comfortable managing deadlines during a company-sponsored workation?",
    applicableRoles: ["project-manager"]
  },
  {
    id: "pm-6",
    question: "Do you think strategic planning would benefit from being conducted in an inspiring location?",
    applicableRoles: ["project-manager"]
  },
  {
    id: "pm-7",
    question: "Would team communication improve if the team worked together from a vacation destination?",
    applicableRoles: ["project-manager"]
  },
  {
    id: "pm-8",
    question: "Do you believe that product decisions would be more innovative if made in a new environment?",
    applicableRoles: ["project-manager"]
  },
  {
    id: "pm-9",
    question: "Would client/stakeholder presentations be feasible during a workation?",
    applicableRoles: ["project-manager"]
  },
  {
    id: "pm-10",
    question: "Could team conflict resolution be more effective in a retreat setting?",
    applicableRoles: ["project-manager"]
  },
  {
    id: "pm-11",
    question: "Do you think workations would help team members better understand each other's work styles?",
    applicableRoles: ["project-manager"]
  },
  {
    id: "pm-12",
    question: "Would you be able to maintain project visibility and tracking during a workation?",
    applicableRoles: ["project-manager"]
  },
  {
    id: "pm-13",
    question: "Do you believe a change of environment would help teams break through project roadblocks?",
    applicableRoles: ["project-manager"]
  },
  {
    id: "pm-14",
    question: "Would periodic team workations help prevent project team burnout?",
    applicableRoles: ["project-manager"]
  },
  {
    id: "pm-15",
    question: "Do you think team morale would improve with occasional workations?",
    applicableRoles: ["project-manager"]
  },
  {
    id: "pm-16",
    question: "Would you prefer structured work hours during a workation, or a more flexible schedule?",
    applicableRoles: ["project-manager"]
  },
  {
    id: "pm-17",
    question: "Do you believe workations could help teams better align on project vision and goals?",
    applicableRoles: ["project-manager"]
  },
  {
    id: "pm-18",
    question: "Would workations be beneficial for team onboarding and integration?",
    applicableRoles: ["project-manager"]
  },
  {
    id: "pm-19",
    question: "Do you think customers/users would perceive value from your team participating in workations?",
    applicableRoles: ["project-manager"]
  },
  {
    id: "pm-20",
    question: "Would you advocate for regular workations as part of your project management approach?",
    applicableRoles: ["project-manager"]
  },
  
  // HR questions
  {
    id: "hr-1",
    question: "Would offering workations improve employee retention?",
    applicableRoles: ["senior-hr"]
  },
  {
    id: "hr-2",
    question: "Could team retreats in attractive locations be a valuable recruiting tool?",
    applicableRoles: ["senior-hr"]
  },
  {
    id: "hr-3",
    question: "Do you think workations would reduce burnout among your staff?",
    applicableRoles: ["senior-hr"]
  },
  {
    id: "hr-4",
    question: "Would performance reviews be more effective after teams have bonded during retreats?",
    applicableRoles: ["senior-hr"]
  },
  {
    id: "hr-5",
    question: "Could company culture be strengthened through periodic team workations?",
    applicableRoles: ["senior-hr"]
  },
  {
    id: "hr-6",
    question: "Would offering workations create any equity or inclusion challenges among employees?",
    applicableRoles: ["senior-hr"]
  },
  {
    id: "hr-7",
    question: "Do you believe workations could help with professional development and skills training?",
    applicableRoles: ["senior-hr"]
  },
  {
    id: "hr-8",
    question: "Would workations help identify future leadership potential within teams?",
    applicableRoles: ["senior-hr"]
  },
  {
    id: "hr-9",
    question: "Do you think workations could reduce sick days and stress-related leave?",
    applicableRoles: ["senior-hr"]
  },
  {
    id: "hr-10",
    question: "Could HR policy development benefit from being conducted in retreat settings?",
    applicableRoles: ["senior-hr"]
  },
  {
    id: "hr-11",
    question: "Would employees be more candid about workplace issues during a workation?",
    applicableRoles: ["senior-hr"]
  },
  {
    id: "hr-12",
    question: "Do you think company benefits could be restructured to include workation allowances?",
    applicableRoles: ["senior-hr"]
  },
  {
    id: "hr-13",
    question: "Would workations help address the needs of a multi-generational workforce?",
    applicableRoles: ["senior-hr"]
  },
  {
    id: "hr-14",
    question: "Do you believe that workations could foster greater diversity of thought?",
    applicableRoles: ["senior-hr"]
  },
  {
    id: "hr-15",
    question: "Could team-building activities be more effective in a vacation setting?",
    applicableRoles: ["senior-hr"]
  },
  {
    id: "hr-16",
    question: "Would you be concerned about liability or risk management issues during workations?",
    applicableRoles: ["senior-hr"]
  },
  {
    id: "hr-17",
    question: "Do you think workations could help bridge departmental silos?",
    applicableRoles: ["senior-hr"]
  },
  {
    id: "hr-18",
    question: "Would workations contribute to a more positive employer brand?",
    applicableRoles: ["senior-hr"]
  },
  {
    id: "hr-19",
    question: "Do you believe that work-life integration (vs. balance) is supported by workations?",
    applicableRoles: ["senior-hr"]
  },
  {
    id: "hr-20",
    question: "Would you champion workations as an HR initiative in your organization?",
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
    question: "Would you consider implementing quarterly workations for your department?",
    applicableRoles: ["senior-director"]
  },
  {
    id: "dir-6",
    question: "Do you believe cross-functional collaboration would improve through workations?",
    applicableRoles: ["senior-director"]
  },
  {
    id: "dir-7",
    question: "Would department KPIs be affected positively by periodic team workations?",
    applicableRoles: ["senior-director"]
  },
  {
    id: "dir-8",
    question: "Could sensitive business discussions be conducted securely during workations?",
    applicableRoles: ["senior-director"]
  },
  {
    id: "dir-9",
    question: "Do you think decision-making would be more effective in a retreat environment?",
    applicableRoles: ["senior-director"]
  },
  {
    id: "dir-10",
    question: "Would workations make it easier to have difficult conversations with team members?",
    applicableRoles: ["senior-director"]
  },
  {
    id: "dir-11",
    question: "Do you believe workations would improve your ability to retain top talent?",
    applicableRoles: ["senior-director"]
  },
  {
    id: "dir-12",
    question: "Would you be comfortable presenting to executives or board members from a workation?",
    applicableRoles: ["senior-director"]
  },
  {
    id: "dir-13",
    question: "Do you think workations would support or hinder your succession planning efforts?",
    applicableRoles: ["senior-director"]
  },
  {
    id: "dir-14",
    question: "Could workations help you better understand the strengths and weaknesses of your teams?",
    applicableRoles: ["senior-director"]
  },
  {
    id: "dir-15",
    question: "Would you be willing to measure and report on the impact of workations on performance?",
    applicableRoles: ["senior-director"]
  },
  {
    id: "dir-16",
    question: "Do you believe workations would provide a good return on investment?",
    applicableRoles: ["senior-director"]
  },
  {
    id: "dir-17",
    question: "Would organizational changes be easier to implement after team bonding during workations?",
    applicableRoles: ["senior-director"]
  },
  {
    id: "dir-18",
    question: "Do you think workations could contribute to faster product innovation?",
    applicableRoles: ["senior-director"]
  },
  {
    id: "dir-19",
    question: "Would you consider alternating workations among different teams to maintain operational continuity?",
    applicableRoles: ["senior-director"]
  },
  {
    id: "dir-20",
    question: "Do you believe that workations align with your long-term department strategy?",
    applicableRoles: ["senior-director"]
  },
  
  // COO questions
  {
    id: "coo-1",
    question: "Could core business operations continue smoothly with teams periodically on workations?",
    applicableRoles: ["coo"]
  },
  {
    id: "coo-2",
    question: "Would workations provide a positive return on investment through improved productivity?",
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
    question: "Would periodic team workations fit into your operational strategy?",
    applicableRoles: ["coo"]
  },
  {
    id: "coo-6",
    question: "Do you believe workations could help identify operational inefficiencies?",
    applicableRoles: ["coo"]
  },
  {
    id: "coo-7",
    question: "Would executive strategy sessions be more productive in a retreat setting?",
    applicableRoles: ["coo"]
  },
  {
    id: "coo-8",
    question: "Do you think workation experiences would translate to improved customer experiences?",
    applicableRoles: ["coo"]
  },
  {
    id: "coo-9",
    question: "Could company policies and procedures be effectively reviewed during a workation?",
    applicableRoles: ["coo"]
  },
  {
    id: "coo-10",
    question: "Would supply chain and vendor relationships be manageable during team workations?",
    applicableRoles: ["coo"]
  },
  {
    id: "coo-11",
    question: "Do you believe quarterly or annual planning would benefit from a retreat setting?",
    applicableRoles: ["coo"]
  },
  {
    id: "coo-12",
    question: "Would you be concerned about business continuity with teams on workation?",
    applicableRoles: ["coo"]
  },
  {
    id: "coo-13",
    question: "Do you think workations would help teams better understand company operations?",
    applicableRoles: ["coo"]
  },
  {
    id: "coo-14",
    question: "Could operational pivots be effectively planned and communicated during workations?",
    applicableRoles: ["coo"]
  },
  {
    id: "coo-15",
    question: "Would you consider workations a valuable tool for organizational development?",
    applicableRoles: ["coo"]
  },
  {
    id: "coo-16",
    question: "Do you believe periodic workations would positively impact overall company culture?",
    applicableRoles: ["coo"]
  },
  {
    id: "coo-17",
    question: "Would a rotating workation schedule work for operational teams with daily responsibilities?",
    applicableRoles: ["coo"]
  },
  {
    id: "coo-18",
    question: "Do you think process improvement initiatives could be effectively launched from workations?",
    applicableRoles: ["coo"]
  },
  {
    id: "coo-19",
    question: "Would you personally participate in workations with different teams?",
    applicableRoles: ["coo"]
  },
  {
    id: "coo-20",
    question: "Do you believe workations could become a standard part of how your company operates?",
    applicableRoles: ["coo"]
  },
  
  // CFO questions
  {
    id: "cfo-1",
    question: "Could workations be justified financially through improved team performance?",
    applicableRoles: ["cfo"]
  },
  {
    id: "cfo-2",
    question: "Would you consider allocating budget for team retreats if productivity metrics improved?",
    applicableRoles: ["cfo"]
  },
  {
    id: "cfo-3",
    question: "Do you think the cost of workations could be offset by reduced office space needs?",
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
  {
    id: "cfo-6",
    question: "Do you believe financial teams could maintain control and oversight while working remotely?",
    applicableRoles: ["cfo"]
  },
  {
    id: "cfo-7",
    question: "Would investor relations activities be manageable during periodic workations?",
    applicableRoles: ["cfo"]
  },
  {
    id: "cfo-8",
    question: "Do you think budget discussions would be more creative and strategic in a retreat setting?",
    applicableRoles: ["cfo"]
  },
  {
    id: "cfo-9",
    question: "Could financial reporting deadlines be met while teams are on workation?",
    applicableRoles: ["cfo"]
  },
  {
    id: "cfo-10",
    question: "Would you be willing to develop and track metrics to measure workation ROI?",
    applicableRoles: ["cfo"]
  },
  {
    id: "cfo-11",
    question: "Do you believe workations could be structured as a tax-efficient employee benefit?",
    applicableRoles: ["cfo"]
  },
  {
    id: "cfo-12",
    question: "Would compliance and risk management considerations be addressed during workations?",
    applicableRoles: ["cfo"]
  },
  {
    id: "cfo-13",
    question: "Do you think financial strategy would benefit from being developed in an inspiring location?",
    applicableRoles: ["cfo"]
  },
  {
    id: "cfo-14",
    question: "Could cost-saving initiatives be more effectively brainstormed during a workation?",
    applicableRoles: ["cfo"]
  },
  {
    id: "cfo-15",
    question: "Would you be comfortable presenting financial results to the board from a workation?",
    applicableRoles: ["cfo"]
  },
  {
    id: "cfo-16",
    question: "Do you believe workations could lead to more innovative financial solutions?",
    applicableRoles: ["cfo"]
  },
  {
    id: "cfo-17",
    question: "Would workations help finance teams better understand the business operations they support?",
    applicableRoles: ["cfo"]
  },
  {
    id: "cfo-18",
    question: "Do you think workations could be scaled across the organization cost-effectively?",
    applicableRoles: ["cfo"]
  },
  {
    id: "cfo-19",
    question: "Would you prioritize funding for workations over other employee benefits?",
    applicableRoles: ["cfo"]
  },
  {
    id: "cfo-20",
    question: "Do you think the financial benefits of workations would outweigh the costs?",
    applicableRoles: ["cfo"]
  },
  
  // CEO questions
  {
    id: "ceo-1",
    question: "Would you consider workations as part of your company's long-term work model?",
    applicableRoles: ["ceo"]
  },
  {
    id: "ceo-2",
    question: "Do you think company vision and values could be better reinforced through team retreats?",
    applicableRoles: ["ceo"]
  },
  {
    id: "ceo-3",
    question: "Would investor relations be affected if your company adopted regular team workations?",
    applicableRoles: ["ceo"]
  },
  {
    id: "ceo-4",
    question: "Could executive strategy sessions be more effective in retreat settings?",
    applicableRoles: ["ceo"]
  },
  {
    id: "ceo-5",
    question: "Would you personally lead by example by participating in workations with your teams?",
    applicableRoles: ["ceo"]
  },
  {
    id: "ceo-6",
    question: "Do you believe workations could contribute to a more innovative company culture?",
    applicableRoles: ["ceo"]
  },
  {
    id: "ceo-7",
    question: "Would board members and investors support a workation approach?",
    applicableRoles: ["ceo"]
  },
  {
    id: "ceo-8",
    question: "Do you think a workation model could be a competitive advantage in your industry?",
    applicableRoles: ["ceo"]
  },
  {
    id: "ceo-9",
    question: "Could company-wide initiatives be effectively launched during team retreats?",
    applicableRoles: ["ceo"]
  },
  {
    id: "ceo-10",
    question: "Would you see workations as an investment in human capital rather than an expense?",
    applicableRoles: ["ceo"]
  },
  {
    id: "ceo-11",
    question: "Do you believe workations could help bridge generational differences in the workplace?",
    applicableRoles: ["ceo"]
  },
  {
    id: "ceo-12",
    question: "Would you feature your company's workation approach in recruitment materials?",
    applicableRoles: ["ceo"]
  },
  {
    id: "ceo-13",
    question: "Do you think executive succession planning would benefit from observation during workations?",
    applicableRoles: ["ceo"]
  },
  {
    id: "ceo-14",
    question: "Could company transformation initiatives be accelerated through strategic workations?",
    applicableRoles: ["ceo"]
  },
  {
    id: "ceo-15",
    question: "Would you integrate workations into your company's ESG (Environmental, Social, Governance) strategy?",
    applicableRoles: ["ceo"]
  },
  {
    id: "ceo-16",
    question: "Do you believe that workations could enhance your company's ability to attract top talent?",
    applicableRoles: ["ceo"]
  },
  {
    id: "ceo-17",
    question: "Would you expect to see measurable business results from implementing workations?",
    applicableRoles: ["ceo"]
  },
  {
    id: "ceo-18",
    question: "Do you think company mission and purpose would be strengthened through workations?",
    applicableRoles: ["ceo"]
  },
  {
    id: "ceo-19",
    question: "Could key client relationships be maintained or enhanced during periodic workations?",
    applicableRoles: ["ceo"]
  },
  {
    id: "ceo-20",
    question: "Would you champion workations as a cornerstone of your company culture?",
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
