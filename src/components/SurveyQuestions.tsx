
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { SurveyQuestion, SurveyResponse, UserDetails } from "@/lib/types";
import { getQuestionsForRole } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, ArrowLeft, ArrowRight, Send } from "lucide-react";

interface SurveyQuestionsProps {
  role: string;
}

const SurveyQuestions: React.FC<SurveyQuestionsProps> = ({ role }) => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState<SurveyResponse[]>([]);
  const [questions, setQuestions] = useState<SurveyQuestion[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Get relevant questions for this role
    const roleQuestions = getQuestionsForRole(role);
    setQuestions(roleQuestions);
    
    // Retrieve user details
    const storedDetails = localStorage.getItem("userDetails");
    if (storedDetails) {
      setUserDetails(JSON.parse(storedDetails));
    }
    
    // Add animation delay to allow smooth transitions
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, [role]);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = questions.length > 0 
    ? ((currentQuestionIndex) / questions.length) * 100 
    : 0;

  const handleResponse = (answer: boolean) => {
    const response: SurveyResponse = {
      questionId: currentQuestion.id,
      answer
    };
    
    // Save the response
    setUserResponses(prev => [...prev, response]);
    
    // Move to next question or submit if last
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      handleSubmitSurvey();
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      // Remove the last response
      setUserResponses(prev => prev.slice(0, -1));
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };
  
  const handleSubmitSurvey = () => {
    setIsSubmitting(true);
    
    // Prepare data for submission (would be sent to Supabase in real implementation)
    const submissionData = {
      userDetails,
      responses: userResponses
    };
    
    console.log("Survey submission data:", submissionData);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Survey submitted successfully!");
      setIsSubmitting(false);
      
      // In a real app, we would redirect to a success page
      // For now, just go back to the home page
      localStorage.removeItem("userDetails");
      navigate("/");
    }, 1000);
  };

  if (!isLoaded || questions.length === 0) {
    return (
      <div className="flex justify-center items-center h-60">
        <div className="text-center">
          <div className="inline-block rounded-full p-3 bg-primary/10 mb-4 animate-pulse-soft">
            <ArrowRight className="w-6 h-6 text-primary" />
          </div>
          <p className="text-muted-foreground">Loading your survey...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-8 max-w-lg mx-auto animate-slide-up ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Progress bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
      
      {/* Current question */}
      <div className="glass-card p-8 transition-all duration-300 mb-6">
        <h3 className="text-xl font-medium mb-6">
          {currentQuestion?.question}
        </h3>
        
        <div className="flex gap-4 justify-center">
          <Button
            variant="outline"
            size="lg"
            className="flex-1 py-6 border-2 hover:bg-green-50 hover:border-green-300 transition-all"
            onClick={() => handleResponse(true)}
          >
            <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
            Yes
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="flex-1 py-6 border-2 hover:bg-red-50 hover:border-red-300 transition-all"
            onClick={() => handleResponse(false)}
          >
            <XCircle className="mr-2 h-5 w-5 text-red-500" />
            No
          </Button>
        </div>
      </div>
      
      {/* Navigation buttons */}
      <div className="flex justify-between">
        <Button
          variant="ghost"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        
        {currentQuestionIndex === questions.length - 1 && (
          <Button 
            onClick={handleSubmitSurvey}
            disabled={isSubmitting}
          >
            <Send className="mr-2 h-4 w-4" />
            {isSubmitting ? "Submitting..." : "Submit Survey"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default SurveyQuestions;
