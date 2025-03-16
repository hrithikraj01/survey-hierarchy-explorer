
import React from "react";
import HierarchySelection from "@/components/HierarchySelection";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 mx-auto max-w-5xl">
      <div className="text-center mb-12 space-y-2 animate-slide-down">
        <div className="hero-chip mb-2">Workcation Survey</div>
        <h1 className="text-4xl font-bold tracking-tight">Select Your Role</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose your position in the organization hierarchy to begin the tailored survey experience.
        </p>
      </div>
      
      <HierarchySelection />
      
      <div className="mt-16 text-center text-sm text-muted-foreground animate-fade-in">
        <p>Your responses will help us understand organizational dynamics across different levels.</p>
      </div>
    </div>
  );
};

export default Index;
