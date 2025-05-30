export interface Failure {
  id: string;
  title: string;
  description: string;
  lesson: string;
  year: string;
  image?: string;
}

export const failures: Failure[] = [
  {
    id: "f001",
    title: "Neural-Linked Purchase Predictor",
    description: "An ambitious attempt to predict consumer purchases based on neural activity patterns. The system required too much calibration per individual to be commercially viable.",
    lesson: "Sometimes the right idea is wrong for the current technological ecosystem.",
    year: "2023",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "f002",
    title: "Autonomous Garden System",
    description: "A self-regulating hydroponic garden that used AI to balance nutrients, light, and water. Failed due to sensor degradation in humid environments.",
    lesson: "Physical constraints will always challenge digital solutions. Test in real-world conditions early.",
    year: "2022",
    image: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "f003",
    title: "EmotionSync Music Generator",
    description: "An application that generated music based on detected emotional states. Too subjective to create consistently satisfying results.",
    lesson: "Art and emotion are too nuanced for first-generation AI to replicate convincingly.",
    year: "2021",
    image: "https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];