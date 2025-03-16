
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { HierarchyRole, UserDetails } from "@/lib/types";
import { getHierarchyById } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronRight } from "lucide-react";

interface UserDetailsFormProps {
  role: HierarchyRole;
}

const UserDetailsForm: React.FC<UserDetailsFormProps> = ({ role }) => {
  const navigate = useNavigate();
  const roleData = getHierarchyById(role);
  
  const [userDetails, setUserDetails] = useState<UserDetails>({
    fullName: "",
    companyName: "",
    jobTitle: "",
    email: "", // Added email field with empty initial value
    role: role
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form
    if (!userDetails.fullName || !userDetails.companyName || !userDetails.jobTitle || !userDetails.email) {
      toast.error("Please fill out all fields");
      setIsSubmitting(false);
      return;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userDetails.email)) {
      toast.error("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }
    
    // Store in localStorage to persist through navigation
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    
    // Simulate server latency for better UX
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Details saved successfully");
      navigate(`/survey/${role}`);
    }, 600);
  };

  return (
    <div className="animate-slide-up form-container">
      <div className="mb-6 text-center">
        <div className="hero-chip mb-2">
          {roleData?.title || "User Details"}
        </div>
        <h1 className="text-2xl font-semibold mb-1">Tell us about yourself</h1>
        <p className="text-muted-foreground">
          We'll customize your survey based on your profile
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            placeholder="John Doe"
            value={userDetails.fullName}
            onChange={handleInputChange}
            className="bg-white/50"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="companyName">Company Name</Label>
          <Input
            id="companyName"
            name="companyName"
            placeholder="Acme Inc."
            value={userDetails.companyName}
            onChange={handleInputChange}
            className="bg-white/50"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="jobTitle">Job Title</Label>
          <Input
            id="jobTitle"
            name="jobTitle"
            placeholder={roleData?.title || "Your position"}
            value={userDetails.jobTitle}
            onChange={handleInputChange}
            className="bg-white/50"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={userDetails.email}
            onChange={handleInputChange}
            className="bg-white/50"
            required
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full mt-6"
          disabled={isSubmitting}
        >
          Continue to Survey
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};

export default UserDetailsForm;
