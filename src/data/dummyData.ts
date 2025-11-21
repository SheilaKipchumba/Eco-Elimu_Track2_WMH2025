export interface Action {
  id: string;
  category: string;
  points: number;
  description: string;
  studentName: string;
  schoolName: string;
  participants: number;
  location: string;
  date: string;
  verified: boolean;
  imageUrl?: string;
}

export interface Student {
  id: string;
  name: string;
  school: string;
  points: number;
  badges: string[];
  streak: number;
  recentActions: Action[];
}

export interface School {
  id: string;
  name: string;
  county: string;
  totalPoints: number;
  studentsCount: number;
  actionsCount: number;
  location: { lat: number; lng: number };
}

export const actionCategories = [
  { name: "Tree Planting", points: 100, icon: "🌳", color: "bg-green-500" },
  { name: "Plastic Collection", points: 50, icon: "♻️", color: "bg-blue-500" },
  { name: "Clean-Ups", points: 75, icon: "🧹", color: "bg-yellow-500" },
  { name: "Kitchen Gardens", points: 80, icon: "🥬", color: "bg-emerald-500" },
  { name: "Wildlife Conservation", points: 90, icon: "🦋", color: "bg-purple-500" },
];

export const dummyActions: Action[] = [
  {
    id: "1",
    category: "Tree Planting",
    points: 100,
    description: "Planted 20 indigenous trees around school compound",
    studentName: "Amina Wanjiku",
    schoolName: "Greenfields Secondary",
    participants: 15,
    location: "Nairobi County",
    date: "2024-01-15",
    verified: true,
  },
  {
    id: "2",
    category: "Plastic Collection",
    points: 50,
    description: "Collected 15kg of plastic waste from nearby river",
    studentName: "James Omondi",
    schoolName: "Riverside Academy",
    participants: 8,
    location: "Kisumu County",
    date: "2024-01-14",
    verified: true,
  },
  {
    id: "3",
    category: "Clean-Ups",
    points: 75,
    description: "Community clean-up event at local market",
    studentName: "Faith Njeri",
    schoolName: "Greenfields Secondary",
    participants: 25,
    location: "Nairobi County",
    date: "2024-01-13",
    verified: false,
  },
  {
    id: "4",
    category: "Kitchen Gardens",
    points: 80,
    description: "Established organic kitchen garden with 10 vegetable varieties",
    studentName: "Kevin Mutua",
    schoolName: "Mara Hills School",
    participants: 12,
    location: "Nakuru County",
    date: "2024-01-12",
    verified: true,
  },
];

export const dummyStudent: Student = {
  id: "s1",
  name: "Amina Wanjiku",
  school: "Greenfields Secondary",
  points: 1250,
  badges: ["Tree Champion", "Eco Warrior", "Team Leader"],
  streak: 14,
  recentActions: dummyActions.slice(0, 3),
};

export const dummySchools: School[] = [
  {
    id: "sch1",
    name: "Greenfields Secondary",
    county: "Nairobi",
    totalPoints: 8500,
    studentsCount: 45,
    actionsCount: 125,
    location: { lat: -1.2921, lng: 36.8219 },
  },
  {
    id: "sch2",
    name: "Riverside Academy",
    county: "Kisumu",
    totalPoints: 7200,
    studentsCount: 38,
    actionsCount: 98,
    location: { lat: -0.0917, lng: 34.7680 },
  },
  {
    id: "sch3",
    name: "Mara Hills School",
    county: "Nakuru",
    totalPoints: 6800,
    studentsCount: 42,
    actionsCount: 87,
    location: { lat: -0.3031, lng: 36.0800 },
  },
  {
    id: "sch4",
    name: "Coast View High",
    county: "Mombasa",
    totalPoints: 5400,
    studentsCount: 35,
    actionsCount: 72,
    location: { lat: -4.0435, lng: 39.6682 },
  },
];

export const studentLeaderboard = [
  { rank: 1, name: "Amina Wanjiku", school: "Greenfields Secondary", points: 1250 },
  { rank: 2, name: "James Omondi", school: "Riverside Academy", points: 1180 },
  { rank: 3, name: "Faith Njeri", school: "Greenfields Secondary", points: 1050 },
  { rank: 4, name: "Kevin Mutua", school: "Mara Hills School", points: 980 },
  { rank: 5, name: "Grace Achieng", school: "Coast View High", points: 920 },
];

export const contentItems = [
  {
    id: "c1",
    title: "Climate Change 101",
    type: "video",
    duration: "8 min",
    thumbnail: "🌍",
    description: "Understanding the basics of climate change and its impact on Kenya",
  },
  {
    id: "c2",
    title: "Plastic Pollution Guide",
    type: "article",
    duration: "5 min read",
    thumbnail: "♻️",
    description: "How plastic affects our oceans and what we can do about it",
  },
  {
    id: "c3",
    title: "Tree Planting Quiz",
    type: "quiz",
    duration: "10 questions",
    thumbnail: "🌳",
    description: "Test your knowledge about indigenous trees and reforestation",
  },
  {
    id: "c4",
    title: "Wildlife Conservation",
    type: "guide",
    duration: "Download PDF",
    thumbnail: "🦁",
    description: "Protecting Kenya's amazing wildlife and biodiversity",
  },
];

export const teacherResources = [
  {
    id: "tr1",
    title: "Term 1 Activity Calendar",
    type: "calendar",
    icon: "📅",
    description: "Complete guide for environmental activities this term",
  },
  {
    id: "tr2",
    title: "Lesson Plans: Ecosystems",
    type: "lesson",
    icon: "📚",
    description: "Ready-to-use lesson plans on ecosystem conservation",
  },
  {
    id: "tr3",
    title: "Impact Reporting Template",
    type: "template",
    icon: "📊",
    description: "Monthly reporting template for club activities",
  },
  {
    id: "tr4",
    title: "Mentorship Resources",
    type: "guide",
    icon: "🤝",
    description: "Guide for mentoring student environmental leaders",
  },
];
