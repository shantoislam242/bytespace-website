export type Course = {
  id: number;
  title: string;
  author: string;
  image: string;
  lessons: number;
  duration: string;
  comments: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  rating: number;
  students: string;
};

const defaults = {
  author: "purepearl studio",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  level: "Beginner",
  price: 25,
  rating: 4.5,
  students: "26+",
} as const;

export const courses: Course[] = [
  { id: 1, title: "Learn Figma from Basic", image: "/images/courses/figma.jpg", ...defaults },
  { id: 2, title: "Build Digital Asset", image: "/images/courses/digital.jpg", ...defaults },
  { id: 3, title: "the Power of Big Data", image: "/images/courses/bigdata.jpg", ...defaults },
  { id: 4, title: "Balancing Productivity and Wellbeing", image: "/images/courses/productivity.jpg", ...defaults },
  { id: 5, title: "Mastering Money Management", image: "/images/courses/money.jpg", ...defaults },
  { id: 6, title: "From Idea to Startup Success", image: "/images/courses/startup.jpg", ...defaults },
];

export const courseTopics = [
  ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing"],
  ["Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography"],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];
