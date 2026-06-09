const u = (id, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const gymImages = {
  hero: u("photo-1534438327276-14e5300c3a48", 1920),
  gallery: [
    { src: u("photo-1571019614242-c5c5dee9f50b"), alt: "Intense workout session", span: "wide" },
    { src: u("photo-1583454110551-21f2fc2a61d7"), alt: "Modern gym equipment", span: "tall" },
    { src: u("photo-1517836357463-d25dfeac3438"), alt: "Group fitness training", span: "normal" },
    { src: u("photo-1574680096145-d05b474e2155"), alt: "Weight lifting", span: "normal" },
    { src: u("photo-1540497077202-7a8f786e6bf9"), alt: "Cardio zone", span: "wide" },
    { src: u("photo-1593079831268-3381b0db4a77"), alt: "Strength training area", span: "tall" },
  ],
  trainers: [
    u("photo-1567013127542-490d9e1fabef", 600),
    u("photo-1594381898411-846e7d193883", 600),
    u("photo-1571019613454-1cb2f99b2d8b", 600),
  ],
  about: [
    u("photo-1584345604476-cabb1d1a8935", 600),
    u("photo-1574680096145-d05b474e2155", 600),
    u("photo-1593079831268-3381b0db4a77", 600),
  ],
};
