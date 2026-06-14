export type ClinkProduct = {
  id: string;
  name: string;
  flavor: string;
  colors: [string, string];
  accent: string;
  isNew?: boolean;
  /** public/clink/ altındaki dosya — örn. pink-heat.jpg */
  image?: string;
};

export const CLINK_PRODUCTS: ClinkProduct[] = [
  {
    id: "pink-heat",
    name: "PINK HEAT",
    flavor: "Greyfurt · çilek · acı citrus",
    colors: ["#FF4D6D", "#FF6B2C"],
    accent: "#FF8FA3",
    isNew: true,
    image: "/clink/pink-heat.jpg",
  },
  {
    id: "blue-tide",
    name: "BLUE TIDE",
    flavor: "Yaban mersini · buz · limon",
    colors: ["#1B4FD8", "#5B2EFF"],
    accent: "#7DD3FC",
    isNew: true,
    image: "/clink/blue-tide.jpg",
  },
  {
    id: "lime-cut",
    name: "LIME CUT",
    flavor: "Misket limonu · nane",
    colors: ["#B8FF00", "#1A3300"],
    accent: "#B8FF00",
  },
  {
    id: "red-snap",
    name: "RED SNAP",
    flavor: "Vişne · cola spice",
    colors: ["#E8192C", "#4A0008"],
    accent: "#E8192C",
  },
  {
    id: "gold-rush",
    name: "GOLD RUSH",
    flavor: "Mango · ananas",
    colors: ["#FFB800", "#8B4500"],
    accent: "#FFB800",
  },
  {
    id: "black-fizz",
    name: "BLACK FIZZ",
    flavor: "Böğürtlen · charcoal citrus",
    colors: ["#1A1A1F", "#6B2EFF"],
    accent: "#6B2EFF",
  },
  {
    id: "silver-pop",
    name: "SILVER POP",
    flavor: "Klasik aromalı gazlı",
    colors: ["#C8D4E0", "#5A6570"],
    accent: "#C8D4E0",
  },
];
