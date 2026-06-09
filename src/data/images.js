const u = (id, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

const p = (id, w = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const gymImages = {
  hero: u("photo-1534438327276-14e5300c3a48", 1920),
  gallery: [
    { src: u("photo-1571019614242-c5c5dee9f50b"), alt: "Intense workout session", span: "wide" },
    { src: p(260352, 1200), alt: "Modern gym equipment", span: "tall" },
    { src: u("photo-1517836357463-d25dfeac3438"), alt: "Group fitness training", span: "normal" },
    { src: u("photo-1574680096145-d05b474e2155"), alt: "Weight lifting", span: "normal" },
    { src: p(3931124, 1200), alt: "Cardio zone", span: "wide" },
    { src: u("photo-1593079831268-3381b0db4a77"), alt: "Strength training area", span: "tall" },
  ],
  trainers: [
    p(1229356, 600),
    u("photo-1594381898411-846e7d193883", 600),
    u("photo-1571019613454-1cb2f99b2d8b", 600),
  ],
  about: [
    p(260352, 600),
    u("photo-1574680096145-d05b474e2155", 600),
    u("photo-1593079831268-3381b0db4a77", 600),
  ],
};
