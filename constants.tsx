
import React from 'react';
import { Tool, ToolInfo } from './types';

const DumbbellIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.4 14.4 9.6 9.6M18 7l-1.4-1.4M6 17l-1.4-1.4M21 16l-2-2M3 8l-2-2M12 22v-4M12 6V2M5 12H3M19 12h2M12 17a5 5 0 0 0 5-5 5 5 0 0 0-5-5 5 5 0 0 0-5 5 5 5 0 0 0 5 5z"/></svg>
);

const CalculatorIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" /><line x1="8" x2="16" y1="6" y2="6" /><line x1="16" x2="16" y1="14" y2="18" /><path d="M16 10h.01" /><path d="M12 10h.01" /><path d="M8 10h.01" /><path d="M12 14h.01" /><path d="M8 14h.01" /><path d="M12 18h.01" /><path d="M8 18h.01" /></svg>
);

const DietIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 16s-2 2-4 2-4-2-4-2V6s2-2 4-2 4 2 4 2Z" /><path d="M11 6V5" /><path d="M11 17v-1" /><path d="m15 6-2.5 2.5" /><path d="M15 17.5 12.5 15" /><path d="M11 6.5v9" /><path d="M17.5 10H14" /><path d="m20 12-2-2" /><path d="m20 12 2-2" /><path d="m20 12-2 2" /><path d="m20 12 2 2" /></svg>
);

const RecipeIcon: React.FC<{className?: string}> = ({ className }) => (
 <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5Z" /><path d="M12.6 3.4a5.3 5.3 0 0 1 5.4 5.3 5.3 5.3 0 0 1-5.4 5.3" /><path d="M18 12h4" /><path d="M17 7h2" /><path d="M17 17h2" /></svg>
);

const HealthIcon: React.FC<{className?: string}> = ({ className }) => (
 <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
);

const ChatIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
);

const SupplementIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v2" /><path d="M14 2v2" /><path d="M10 20v2" /><path d="M14 20v2" /><path d="M4 9H2" /><path d="M22 9h-2" /><path d="M4 15H2" /><path d="M22 15h-2" /><path d="M7 21a5 5 0 0 0 10 0" /><path d="M7 3a5 5 0 0 1 10 0" /><path d="M12 15a3 3 0 0 0 3-3 3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3z" /></svg>
);


export const TOOLS: ToolInfo[] = [
  {
    id: Tool.MuscleBuildingAdvisor,
    name: "Muscle Building Advisor",
    description: "AI-powered workout and nutrition plan.",
    icon: <DumbbellIcon />,
  },
  {
    id: Tool.CalorieCalculator,
    name: "Calorie Calculator",
    description: "Estimate your daily calorie needs.",
    icon: <CalculatorIcon />,
  },
  {
    id: Tool.DietPlanGenerator,
    name: "Diet Plan Generator",
    description: "Generate a 7-day diet plan.",
    icon: <DietIcon />,
  },
  {
    id: Tool.RecipeGenerator,
    name: "Recipe Generator",
    description: "Get recipes from your ingredients.",
    icon: <RecipeIcon />,
  },
  {
    id: Tool.HealthEstimator,
    name: "Health Estimator",
    description: "Get age-specific health metrics.",
    icon: <HealthIcon />,
  },
  {
    id: Tool.SupplementAdvisor,
    name: "Supplement Advisor",
    description: "Get supplement suggestions.",
    icon: <SupplementIcon />,
  },
  {
    id: Tool.HealthChatbot,
    name: "Health FAQ Chatbot",
    description: "Ask health-related questions.",
    icon: <ChatIcon />,
  },
];
