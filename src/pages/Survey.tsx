
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import SurveyQuestions from "@/components/SurveyQuestions";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { getHierarchyById } from "@/lib/data";

const Survey: React.FC = () => {
  const { role } = useParams<{ role: string }>();
  const navigate = useNavigate();
  const roleData = role ? getHierarchyById(role) : undefined;
  
  if (!role || !roleData) {
    navigate("/");
    return null;
  }
  
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 mx-auto max-w-5xl">
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
    </div>
  );
};

export default Survey;
