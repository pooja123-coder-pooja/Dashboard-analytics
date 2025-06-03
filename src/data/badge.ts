
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
export const badges = [
    {
      Icon: BadgeCheck,
      label: "Verified User",
      description: "This user has been verified by the admin.",
      bgClass: "bg-blue-500/30 border-blue-500/50",
    },
    {
      Icon: Shield,
      label: "Admin",
      description: "Admin users have access to all features and can manage users.",
      bgClass: "bg-green-800/30 border-green-800/50",
    },
    {
      Icon: Candy,
      label: "Awarded",
      description: "This user has been awarded for their contributions.",
      bgClass: "bg-yellow-500/30 border-yellow-500/50",
    },
    {
      Icon: Citrus,
      label: "Popular",
      description: "This user has been popular in the community.",
      bgClass: "bg-orange-500/30 border-orange-500/50",
    },
  ];