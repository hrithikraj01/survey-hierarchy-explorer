
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserDetailsForm from "@/components/UserDetailsForm";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getHierarchyById } from "@/lib/data";
import { HierarchyRole } from "@/lib/types";

const UserDetails: React.FC = () => {
  const { role } = useParams<{ role: string }>();
  const navigate = useNavigate();
  const roleData = role ? getHierarchyById(role) : undefined;
  
  if (!role || !roleData) {
    navigate("/");
    return null;
  }
  
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 mx-auto max-w-5xl">
      <Button 
        variant="ghost" 
        className="mb-8" 
        onClick={() => navigate("/")}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Role Selection
      </Button>
      
      <UserDetailsForm role={role as HierarchyRole} />
    </div>
  );
};

export default UserDetails;
