
import React from "react";
import { useNavigate } from "react-router-dom";
import { hierarchyItems } from "@/lib/data";
import { 
  Users, Code, FolderKanban, UserCog, 
  BarChartBig, Briefcase, PiggyBank, Crown
} from "lucide-react";

const HierarchySelection: React.FC = () => {
  const navigate = useNavigate();

  const handleSelect = (roleId: string) => {
    navigate(`/user-details/${roleId}`);
  };

  // Map role IDs to icons
  const getIconForRole = (roleId: string) => {
    switch (roleId) {
      case "mid-senior-developer":
        return <Code className="w-5 h-5" />;
      case "senior-developer":
        return <Code className="w-5 h-5" />;
      case "project-manager":
        return <FolderKanban className="w-5 h-5" />;
      case "senior-hr":
        return <UserCog className="w-5 h-5" />;
      case "senior-director":
        return <BarChartBig className="w-5 h-5" />;
      case "coo":
        return <Briefcase className="w-5 h-5" />;
      case "cfo":
        return <PiggyBank className="w-5 h-5" />;
      case "ceo":
        return <Crown className="w-5 h-5" />;
      default:
        return <Users className="w-5 h-5" />;
    }
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 animate-slide-up">
      {hierarchyItems.map((item) => (
        <div
          key={item.id}
          className="hierarchy-item"
          onClick={() => handleSelect(item.id)}
          role="button"
          tabIndex={0}
        >
          <div className="hierarchy-item-icon">
            {getIconForRole(item.id)}
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-lg">{item.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HierarchySelection;
