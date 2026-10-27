"use client";

import React from "react";
import {
  HardHat,
  Building2,
  Compass,
  Landmark,
  Factory,
  ShieldCheck,
  Tractor,
  Users2,
  Calendar,
  FileCheck2,
  Clock,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Award,
  Truck,
  Wrench,
  Construction,
  Layers,
  FileSpreadsheet,
  MessageSquare,
  HelpCircle,
  LucideProps,
} from "lucide-react";

const iconMap: Record<string, React.FC<LucideProps>> = {
  HardHat,
  Building2,
  Compass,
  Landmark,
  Factory,
  ShieldCheck,
  Tractor,
  Users2,
  Calendar,
  FileCheck2,
  Clock,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Award,
  Truck,
  Wrench,
  Construction,
  Layers,
  FileSpreadsheet,
  MessageSquare,
};

interface IconRendererProps extends LucideProps {
  name: string;
}

export const IconRenderer: React.FC<IconRendererProps> = ({ name, ...props }) => {
  const Component = iconMap[name] || HelpCircle;
  return <Component {...props} />;
};
