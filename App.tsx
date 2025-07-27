
import React, { useState, useEffect, useCallback } from 'react';
import { Tool } from './types';
import { TOOLS } from './constants';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MuscleBuildingAdvisor from './components/tools/MuscleBuildingAdvisor';
import CalorieCalculator from './components/tools/CalorieCalculator';
import DietPlanGenerator from './components/tools/DietPlanGenerator';
import RecipeGenerator from './components/tools/RecipeGenerator';
import HealthEstimator from './components/tools/HealthEstimator';
import HealthChatbot from './components/tools/HealthChatbot';
import SupplementAdvisor from './components/tools/SupplementAdvisor';

const App: React.FC = () => {
  const [activeTool, setActiveTool] = useState<Tool>(Tool.MuscleBuildingAdvisor);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);
  
  const renderActiveTool = () => {
    switch (activeTool) {
      case Tool.MuscleBuildingAdvisor:
        return <MuscleBuildingAdvisor />;
      case Tool.CalorieCalculator:
        return <CalorieCalculator />;
      case Tool.DietPlanGenerator:
        return <DietPlanGenerator />;
      case Tool.RecipeGenerator:
        return <RecipeGenerator />;
      case Tool.HealthEstimator:
        return <HealthEstimator />;
      case Tool.HealthChatbot:
        return <HealthChatbot />;
      case Tool.SupplementAdvisor:
        return <SupplementAdvisor />;
      default:
        return <div className="p-6 text-gray-900 dark:text-gray-100">Select a tool to get started.</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 font-sans">
      <Sidebar 
        tools={TOOLS} 
        activeTool={activeTool} 
        setActiveTool={setActiveTool}
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          toggleTheme={toggleTheme} 
          theme={theme}
          toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
        />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-6 py-8">
            {renderActiveTool()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
