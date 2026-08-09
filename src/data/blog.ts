import type { BlogPost } from "@/lib/types";

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "progressive-overload-without-burnout",
    title: "Progressive Overload Without Burnout",
    excerpt:
      "How to add load week after week while protecting joints, sleep, and long-term progress.",
    content: `Progressive overload is the engine of strength—but only when recovery keeps pace.

Start by tracking one primary lift per session. Add the smallest useful increment when form stays clean for all working sets. If bar speed slows dramatically or joints ache the next morning, hold load and chase better reps instead.

Deload every 4–6 weeks: cut volume by ~40% while keeping intensity familiar. Pair this with sleep targets and protein consistency. The goal is not endless escalation—it is sustainable capacity.

Forge tip: film your last working set. Visual feedback catches technical drift before injury does.`,
    author: "Maya Stone",
    date: "2026-07-12",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80",
    tags: ["Strength", "Programming"],
  },
  {
    id: "b2",
    slug: "hiit-that-actually-transfers",
    title: "HIIT That Actually Transfers",
    excerpt:
      "Not all intervals are equal. Build conditioning that supports your sport and lifts.",
    content: `Random burpee circuits are not a conditioning plan.

Effective HIIT matches work:rest to the energy system you want. For strength athletes, shorter sprints with longer recovery preserve power. For fat loss phases, slightly longer work intervals with moderate rest raise average heart rate without wrecking the next squat day.

Keep sessions under 30 minutes of hard work. Warm up thoroughly. Cool down with nasal breathing. Track RPE—not just calories.

Forge tip: place HIIT after skill work, never before a heavy lower-body day.`,
    author: "Kai Rivers",
    date: "2026-07-28",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
    tags: ["HIIT", "Conditioning"],
  },
  {
    id: "b3",
    slug: "mobility-is-not-optional",
    title: "Mobility Is Not Optional",
    excerpt:
      "Range you own is range you can load. A practical weekly mobility template.",
    content: `Mobility work is training, not a soft add-on.

Spend 10 minutes before lifting on joints you load that day. Hips and ankles before squats. Thoracic rotation before pressing. After training, use longer holds and soft tissue for tissues that felt sticky.

Consistency beats marathon stretch sessions. Three short sessions weekly outperform one hour on Sunday.

Forge tip: test a position, train it, retest. If nothing changes, change the drill—not just the duration.`,
    author: "Elena Voss",
    date: "2026-08-02",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80",
    tags: ["Mobility", "Recovery"],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
