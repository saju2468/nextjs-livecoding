export interface Item {
  id: string;
  title: string;
  description: string;
  category: "Design" | "Engineering" | "Marketing" | "Product";
  status: "todo" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
  votes: number;
  createdAt: string;
}

export const INITIAL_ITEMS: Item[] = [
  {
    id: "1",
    title: "Implement Authentication Flow",
    description: "Support OAuth2 login with session token storage and route middleware protection.",
    category: "Engineering",
    status: "in-progress",
    priority: "high",
    votes: 12,
    createdAt: "2026-11-15",
  },
  {
    id: "2",
    title: "Design System Dark Mode",
    description: "Align color tokens across components and ensure WCAG AA contrast compliance.",
    category: "Design",
    status: "completed",
    priority: "medium",
    votes: 24,
    createdAt: "2026-11-16",
  },
  {
    id: "3",
    title: "SEO Optimization & OpenGraph",
    description: "Configure dynamic metadata and structured JSON-LD schema on article pages.",
    category: "Marketing",
    status: "todo",
    priority: "low",
    votes: 5,
    createdAt: "2026-11-17",
  },
  {
    id: "4",
    title: "Server Actions Form Validation",
    description: "Integrate Zod validation schema with useActionState error handling.",
    category: "Engineering",
    status: "todo",
    priority: "high",
    votes: 18,
    createdAt: "2026-11-18",
  },
  {
    id: "5",
    title: "Product Analytics Dashboard",
    description: "Display retention charts and monthly active user metrics with filtering.",
    category: "Product",
    status: "in-progress",
    priority: "high",
    votes: 31,
    createdAt: "2026-11-19",
  },
];
