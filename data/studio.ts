export type Character = {
  name: string;
  role: string;
  household: string;
  imageTone: string;
  traits: string[];
  favorites: string[];
  status: string;
  lore: string;
  relationships: string[];
  palette: string;
};

export type WorldDistrict = {
  name: string;
  mood: string;
  lore: string;
  activeHouseholds: number;
  businesses: string[];
};

export type TimelineEvent = {
  era: string;
  title: string;
  date: string;
  body: string;
  tags: string[];
};

export type DownloadItem = {
  title: string;
  type: "Sim" | "Build" | "Save File" | "Collection";
  tier: "Free" | "Early Access" | "Patreon";
  detail: string;
  stats: string;
};

export const navigation = [
  { label: "World", href: "#world" },
  { label: "Characters", href: "#characters" },
  { label: "Builds", href: "#builds" },
  { label: "Timeline", href: "#timeline" },
  { label: "Downloads", href: "#downloads" },
  { label: "Diary", href: "#diary" }
];

export const links = {
  patreon: "https://www.patreon.com/silasims777"
};

export const characters: Character[] = [
  {
    name: "Mira Vale",
    role: "Founder of Vale House",
    household: "The Vales",
    imageTone: "warm editorial portrait with amber apartment light",
    traits: ["Ambitious", "Romantic", "Perfectionist"],
    favorites: ["late coffee", "vintage perfume", "rainy piano bars"],
    status: "quietly rebuilding her public image after a broken engagement",
    lore: "Mira built her life like a magazine spread, but the new save era begins when the camera catches what she kept outside the frame.",
    relationships: ["ex-fiance: Adrian", "closest friend: Selin", "rival: Noelle"],
    palette: "from-champagne/35 via-mocha/20 to-espresso"
  },
  {
    name: "Adrian Rook",
    role: "Gallery heir",
    household: "Rook Residence",
    imageTone: "charcoal suit, gallery shadows, cinematic profile",
    traits: ["Art Lover", "Self-Assured", "Noncommittal"],
    favorites: ["black tea", "old cameras", "midnight drives"],
    status: "buying back the gallery while avoiding every honest conversation",
    lore: "Adrian is charming in public and unfinished in private. Every district knows a different version of him.",
    relationships: ["ex-fiancee: Mira", "sister: Livia", "secret: The Magnolia lease"],
    palette: "from-zinc-300/25 via-charcoal to-mocha/45"
  },
  {
    name: "Selin Marlowe",
    role: "Lifestyle editor",
    household: "Marlowe Loft",
    imageTone: "soft sage studio, silk blouse, morning light",
    traits: ["Creative", "Loyal", "Good"],
    favorites: ["sage candles", "linen notebooks", "farmers markets"],
    status: "documenting the city while hiding a move she has not announced",
    lore: "Selin is the lens of the universe: tender, observant, and always one screenshot away from exposing the real story.",
    relationships: ["best friend: Mira", "neighbor: Jun", "complicated: Rafael"],
    palette: "from-sage/35 via-cream/10 to-espresso"
  },
  {
    name: "Noelle Vex",
    role: "Nightlife owner",
    household: "Vex Penthouse",
    imageTone: "espresso lounge, gold jewelry, flash-lit eyes",
    traits: ["Materialistic", "Insider", "High Maintenance"],
    favorites: ["velvet booths", "rare lipstick", "being underestimated"],
    status: "opening a private members club above the old cinema",
    lore: "Noelle is not a villain. She is a consequence with perfect lighting.",
    relationships: ["rival: Mira", "business tie: Adrian", "muse: Cassian"],
    palette: "from-[#5d463c] via-[#211614] to-champagne/25"
  }
];

export const districts: WorldDistrict[] = [
  {
    name: "Magnolia Quarter",
    mood: "old money townhouses, rain-glossed sidewalks, guarded family dinners",
    lore: "The oldest district, where every renovation uncovers a social debt.",
    activeHouseholds: 7,
    businesses: ["Vale Atelier", "Rook Gallery", "The Glass Florist"]
  },
  {
    name: "Sable Pier",
    mood: "cinematic waterfront, late cafes, secret summer apartments",
    lore: "A softer coast for complicated holidays, reconciliations, and public mistakes.",
    activeHouseholds: 5,
    businesses: ["Pier House", "Luna Supper Club", "Harbor Rooms"]
  },
  {
    name: "Orchid Heights",
    mood: "modern apartments, rooftop pools, editorial chaos",
    lore: "The young creative district where careers launch faster than relationships survive.",
    activeHouseholds: 9,
    businesses: ["Marlowe Studio", "Orchid Gym", "Still Room"]
  }
];

export const timeline: TimelineEvent[] = [
  {
    era: "Chapter 01",
    title: "The Engagement Ends Off Camera",
    date: "Early Spring",
    body: "Mira returns to Magnolia Quarter without the ring. The household panel changes first; the city notices later.",
    tags: ["relationship shift", "main arc"]
  },
  {
    era: "Chapter 02",
    title: "Luna Supper Club Opens",
    date: "Late Spring",
    body: "Noelle turns the abandoned cinema balcony into a members-only restaurant, pulling three households into one room.",
    tags: ["new business", "build release"]
  },
  {
    era: "Chapter 03",
    title: "A Summer Rental Appears",
    date: "Summer Teaser",
    body: "Sable Pier adds a coastal rental lot with locked family memories, two guest bedrooms, and one unresolved text thread.",
    tags: ["save update", "future drop"]
  },
  {
    era: "Chapter 04",
    title: "Selin Starts The Diary",
    date: "Current",
    body: "Screenshots become evidence. The creator diary begins tracking lore, CC notes, and behind-the-scenes planning.",
    tags: ["journal", "creator note"]
  }
];

export const downloads: DownloadItem[] = [
  {
    title: "Mira Vale CAS Set",
    type: "Sim",
    tier: "Free",
    detail: "Tray files, everyday/formal styling notes, trait card, no-paywall CC links.",
    stats: "1 Sim / 6 outfits"
  },
  {
    title: "Luna Supper Club",
    type: "Build",
    tier: "Early Access",
    detail: "Restaurant lot with cinematic lighting, private balcony, and story-ready table layouts.",
    stats: "30x20 / Restaurant"
  },
  {
    title: "Magnolia Quarter Beta",
    type: "Save File",
    tier: "Patreon",
    detail: "First playable world chapter with families, relationships, businesses, and household notes.",
    stats: "21 lots / 12 households"
  },
  {
    title: "Soft Luxury Starter Pack",
    type: "Collection",
    tier: "Free",
    detail: "Curated CC direction, swatches, room references, and installation checklist.",
    stats: "CAS + Build guide"
  }
];

export const diaryPosts = [
  {
    title: "How I Build Emotional Save Files",
    category: "Creator Diary",
    excerpt:
      "A save file becomes memorable when every lot answers one question: who lives differently because this place exists?",
    readTime: "6 min"
  },
  {
    title: "The Palette Behind Magnolia Quarter",
    category: "Moodboard",
    excerpt:
      "Cream walls, espresso trim, worn brass, muted sage kitchens, and the kind of evening light that makes drama feel expensive.",
    readTime: "4 min"
  },
  {
    title: "June Roadmap: Households, Rentals, Secrets",
    category: "Roadmap",
    excerpt:
      "Upcoming drops include the Sable Pier rental, two playable siblings, and a relationship graph that updates with each chapter.",
    readTime: "3 min"
  }
];
