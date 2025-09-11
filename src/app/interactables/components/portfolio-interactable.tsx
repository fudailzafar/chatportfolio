import { useState } from "react";
import { withInteractable } from "@tambo-ai/react";
import { z } from "zod";
import Portfolio from "./portfolio";
import { DATA as initialData } from "@/data/resume";

// Define schema for portfolio data (simplified for demo)
const portfolioSchema = z.object({
  name: z.string(),
  description: z.string(),
  summary: z.string(),
  skills: z.array(z.string()),
  projects: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      dates: z.string(),
      technologies: z.array(z.string()),
      image: z.string(),
      video: z.string(),
      links: z.array(
        z.object({
          type: z.string(),
          href: z.string(),
        })
      ),
    })
  ),
  work: z.array(
    z.object({
      company: z.string(),
      title: z.string(),
      description: z.string(),
      start: z.string(),
      end: z.string(),
      logoUrl: z.string(),
      href: z.string(),
      badges: z.array(z.string()),
      location: z.string(),
    })
  ),
  education: z.array(
    z.object({
      school: z.string(),
      degree: z.string(),
      start: z.string(),
      end: z.string(),
      logoUrl: z.string(),
      href: z.string(),
    })
  ),
  contact: z.array(
    z.object({
      email: z.string(),
      tel: z.string(),
      github: z.string(),
      linkedin: z.string(),
      twitter: z.string(),
    })
  ),
  avatarUrl: z.string(),
  initials: z.string(),
  location: z.string(),
  locationLink: z.string(),
  url: z.string(),
  navbar: z.any(),
  theme: z.enum(["light", "dark"]).default("light"), // Theme toggle
  color: z.string().optional(),
  font: z.string().optional(),
});

function PortfolioInteractableBase(props: any) {
  return <Portfolio data={props} />;
}

const InteractablePortfolio = withInteractable(PortfolioInteractableBase, {
  componentName: "Portfolio",
  description: "Portfolio interactable with AI chatbox",
  propsSchema: portfolioSchema,
});

export function PortfolioInteractable() {
  const [portfolioData, setPortfolioData] = useState(initialData);

  // Handler for AI updates
  const handlePropsUpdate = (newProps: any) => {
    setPortfolioData((prev: any) => ({ ...prev, ...newProps }));
    console.log("Portfolio updated from Tambo:", newProps);
  };

  return (
    <InteractablePortfolio
      {...portfolioData}
      onPropsUpdate={handlePropsUpdate}
    />
  );
}
