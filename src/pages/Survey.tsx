
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SurveyQuestions from "@/components/SurveyQuestions";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getHierarchyById } from "@/lib/data";

const Survey: React.FC = () => {
  const { role } = useParams<{ role: string }>();
  const navigate = useNavigate();
  const roleData = role ? getHierarchyById(role) : undefined;
  const [showIntro, setShowIntro] = useState(true);
  
  if (!role || !roleData) {
    navigate("/");
    return null;
  }
  
  const handleStartSurvey = () => {
    setShowIntro(false);
  };
  
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 mx-auto max-w-5xl">
      {showIntro ? (
        <div className="text-center mb-10 space-y-6 animate-fade-in">
          <div className="hero-chip mb-2">{roleData.title} Survey</div>
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome to the Remote Work Survey
          </h1>
          
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <p className="text-lg mb-4">
              As remote work continues to evolve, professionals and businesses are exploring 
              new ways to balance productivity, team collaboration, and well-being. This survey 
              aims to understand your perspective on alternative work environments, team retreats, 
              and structured work-travel experiences. Your insights will help shape the future of 
              flexible work setups for individuals and corporate teams.
            </p>
            
            {roleData.goal && (
              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-medium text-primary mb-2">Your Role's Focus</h3>
                <p>{roleData.goal}</p>
              </div>
            )}
          </div>
          
          <Button 
            size="lg" 
            onClick={handleStartSurvey}
            className="mt-6"
          >
            Start Survey
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      ) : (
        <>
          <div className="text-center mb-10 space-y-2 animate-slide-down">
            <div className="hero-chip mb-2">{roleData.title} Survey</div>
            <h1 className="text-3xl font-bold tracking-tight">
              Answer the following questions
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Please respond to these role-specific questions to help us understand your responsibilities.
            </p>
          </div>
          
          <SurveyQuestions role={role} />
          
          <div className="mt-12 text-center">
            <Button 
              variant="ghost" 
              className="text-muted-foreground" 
              onClick={() => navigate(`/user-details/${role}`)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Your Details
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Survey;
