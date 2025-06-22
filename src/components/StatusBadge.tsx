import type React from "react";
import { CheckCircle, Clock, XCircle } from "lucide-react";

interface StatusBadgeProps {
  status: string | "pending" | "completed" | "rejected";
  label: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, label }) => {
  const getStatusConfig = () => {
    switch (status) {
      case "completed":
        return {
          icon: CheckCircle,
          className: "bg-green-100 text-green-800 border-green-200",
          iconColor: "text-green-600",
        };
      case "rejected":
        return {
          icon: XCircle,
          className: "bg-red-100 text-red-800 border-red-200",
          iconColor: "text-red-600",
        };
      default:
        return {
          icon: Clock,
          className: "bg-yellow-100 text-yellow-800 border-yellow-200",
          iconColor: "text-yellow-600",
        };
    }
  };

  const { icon: Icon, className, iconColor } = getStatusConfig();

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${className}`}
    >
      <Icon className={`w-4 h-4 mr-2 ${iconColor}`} />
      {label}
    </span>
  );
};
