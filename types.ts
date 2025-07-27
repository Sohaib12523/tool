
import React from 'react';

export enum Tool {
  MuscleBuildingAdvisor = 'MuscleBuildingAdvisor',
  CalorieCalculator = 'CalorieCalculator',
  DietPlanGenerator = 'DietPlanGenerator',
  RecipeGenerator = 'RecipeGenerator',
  HealthEstimator = 'HealthEstimator',
  HealthChatbot = 'HealthChatbot',
  SupplementAdvisor = 'SupplementAdvisor',
}

export interface ToolInfo {
  id: Tool;
  name: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
