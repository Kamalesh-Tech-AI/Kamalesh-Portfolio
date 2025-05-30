export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  insight: string;
  tags: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    id: "001",
    title: "Vision-Based Anti-Theft System",
    description: "A computer vision system that uses machine learning to detect suspicious activities and prevent theft in retail environments.",
    problem: "Retail theft costs businesses billions annually, with traditional surveillance being reactive rather than preventive.",
    insight: "Behavioral patterns are more reliable indicators than facial recognition for predicting theft intentions.",
    tags: ["Computer Vision", "Machine Learning", "Real-time Analysis"],
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "002",
    title: "Category AI @ Beroe",
    description: "Developed AI-driven category management system for procurement teams to optimize spending and supplier relationships.",
    problem: "Procurement teams struggle with manual category analysis, leading to inefficient spending and missed opportunities.",
    insight: "Cross-category data patterns reveal hidden supplier relationships that traditional analysis misses.",
    tags: ["AI", "Procurement", "Data Analysis"],
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "003",
    title: "Thought: AI + Neural Ethics",
    description: "Research project exploring the intersection of artificial intelligence and ethical decision-making frameworks.",
    problem: "AI systems lack contextual understanding of ethical nuances in human decision-making.",
    insight: "Neural networks can be trained to recognize ethical dilemmas, but shouldn't be programmed to resolve them autonomously.",
    tags: ["Ethics", "AI", "Philosophy"],
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];