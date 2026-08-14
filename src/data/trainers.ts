import type { Trainer } from "@/lib/types";

/** Clean Unsplash photo URLs — width/quality come from the image loader. */
const img = (id: string) => `https://images.unsplash.com/${id}`;

export const trainers: Trainer[] = [
  {
    id: "t1",
    slug: "maya-stone",
    name: "Maya Stone",
    title: "Strength Coach",
    bio: "Maya builds raw power with precise programming. Former competitive powerlifter turned coach who thrives on progressive overload and form mastery.",
    specialties: ["Powerlifting", "Hypertrophy", "Mobility"],
    image: img("photo-1594381898411-846e7d193883"),
    experienceYears: 8,
    rating: 4.9,
    branchSlug: "downtown",
    sessionTypes: [
      { id: "pt", name: "Personal Training", durationMin: 60, price: 85 },
      { id: "consult", name: "Program Consult", durationMin: 30, price: 45 },
      { id: "intro", name: "Class Intro", durationMin: 45, price: 35 },
    ],
  },
  {
    id: "t2",
    slug: "kai-rivers",
    name: "Kai Rivers",
    title: "HIIT & Conditioning",
    bio: "Kai engineers high-intensity sessions that torch fat and build athletic endurance without burning you out.",
    specialties: ["HIIT", "Metabolic Conditioning", "Athletic Performance"],
    image: img("photo-1571019614242-c5c5dee9f50b"),
    experienceYears: 6,
    rating: 4.8,
    branchSlug: "downtown",
    sessionTypes: [
      { id: "pt", name: "Personal Training", durationMin: 60, price: 80 },
      { id: "consult", name: "Program Consult", durationMin: 30, price: 40 },
      { id: "intro", name: "Class Intro", durationMin: 45, price: 30 },
    ],
  },
  {
    id: "t3",
    slug: "elena-voss",
    name: "Elena Voss",
    title: "Mobility & Recovery",
    bio: "Elena restores range and resilience. Her sessions blend mobility, breathwork, and smart recovery protocols.",
    specialties: ["Mobility", "Recovery", "Corrective Exercise"],
    image: img("photo-1518611012118-696072aa579a"),
    experienceYears: 7,
    rating: 4.95,
    branchSlug: "riverside",
    sessionTypes: [
      { id: "pt", name: "Personal Training", durationMin: 60, price: 75 },
      { id: "consult", name: "Program Consult", durationMin: 30, price: 40 },
      { id: "intro", name: "Class Intro", durationMin: 45, price: 30 },
    ],
  },
  {
    id: "t4",
    slug: "dante-cole",
    name: "Dante Cole",
    title: "Boxing & Functional",
    bio: "Dante brings fight-gym energy to every session—footwork, power, and functional strength that transfers to real life.",
    specialties: ["Boxing", "Functional Strength", "Core"],
    image: img("photo-1567013127542-490d757e51fc"),
    experienceYears: 10,
    rating: 4.85,
    branchSlug: "westend",
    sessionTypes: [
      { id: "pt", name: "Personal Training", durationMin: 60, price: 90 },
      { id: "consult", name: "Program Consult", durationMin: 30, price: 50 },
      { id: "intro", name: "Class Intro", durationMin: 45, price: 40 },
    ],
  },
];

export function getTrainerBySlug(slug: string) {
  return trainers.find((t) => t.slug === slug);
}

export function getTrainersByBranch(branchSlug: string) {
  return trainers.filter((t) => t.branchSlug === branchSlug);
}
