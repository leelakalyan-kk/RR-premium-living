export const WHATSAPP_NUMBER = "919000000000";
export const CONTACT_PHONE_DISPLAY = "+91 90000 000000";
export const CONTACT_EMAIL = "info@rrpremiumliving.com";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Locations", href: "#locations" },
  { label: "Spaces", href: "#spaces" },
  { label: "Amenities", href: "#amenities" },
  { label: "Food", href: "#food" },
  { label: "Rules", href: "#rules" },
];

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?auto=format&fit=crop&w=2000&q=80",
  hyderabad:
    "https://images.unsplash.com/photo-1741545979534-02f59c742730?auto=format&fit=crop&w=1400&q=80",
  bangalore:
    "https://images.unsplash.com/photo-1687158266872-fd2773fa76c6?auto=format&fit=crop&w=1400&q=80",
  mens: "https://images.unsplash.com/photo-1588939349575-7ab15c8bd1ef?auto=format&fit=crop&w=1000&q=80",
  womens:
    "https://images.unsplash.com/photo-1662454419716-c4c504728811?auto=format&fit=crop&w=1000&q=80",
  coliving:
    "https://images.unsplash.com/photo-1764006195843-e6f9a5781500?auto=format&fit=crop&w=1000&q=80",
  kitchen:
    "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1200&q=80",
  gym: "https://images.unsplash.com/photo-1761971976282-b2bb051a5474?auto=format&fit=crop&w=1200&q=80",
  food: "https://images.unsplash.com/photo-1559561724-732dbca7be1e?auto=format&fit=crop&w=1200&q=80",
};

export const MARQUEE_ITEMS = [
  "Premium Living",
  "Hyderabad",
  "Bangalore",
  "Men's Spaces",
  "Women's Spaces",
  "Co-living",
  "Hygienic Food",
  "24/7 Security",
];

export const SPACES = [
  {
    id: "mens",
    title: "Men's Spaces",
    image: IMAGES.mens,
    copy: "Private and shared rooms built for focus and rest — calm, well-kept floors where quiet hours are respected and every day starts easy.",
    points: ["Study-friendly rooms", "Daily housekeeping", "24/7 security"],
  },
  {
    id: "womens",
    title: "Women's Spaces",
    image: IMAGES.womens,
    copy: "Safe, bright, and beautifully maintained living with women-focused security and the comfort of a well-run home.",
    points: ["Secure women-only floors", "Homely meals", "Daily housekeeping"],
  },
  {
    id: "coliving",
    title: "Co-living Spaces",
    image: IMAGES.coliving,
    copy: "Shared living that actually feels shared — open kitchen evenings, indoor games, and a community of students and professionals.",
    points: ["Open kitchen", "Play area & indoor games", "Community living"],
  },
];

export const AMENITIES = [
  { id: "kitchen", label: "Open Kitchen", icon: "CookingPot" },
  { id: "gym", label: "Fully Equipped Gym", icon: "Barbell" },
  { id: "laundry", label: "Laundry & Washing Machines", icon: "WashingMachine" },
  { id: "geysers", label: "Geysers — Hot Water", icon: "FireSimple" },
  { id: "ro", label: "RO Drinking Water Purifiers", icon: "Drop" },
  { id: "housekeeping", label: "Daily Housekeeping", icon: "Sparkle" },
  { id: "water", label: "24/7 Water Supply", icon: "Timer" },
  { id: "cctv", label: "CCTV Surveillance", icon: "VideoCamera" },
  { id: "guard", label: "24/7 Security Guard", icon: "ShieldCheck" },
  { id: "parking", label: "Ample Parking", icon: "Car" },
  { id: "games", label: "Play Area with Indoor Games", icon: "GamepadController" },
];

export const MENU = [
  {
    day: "Monday",
    breakfast: "Idli, Sambar, Chutney",
    lunch: "Rice, Dal, Veg Curry, Curd",
    dinner: "Chapati, Paneer Curry",
    nonVeg: false,
  },
  {
    day: "Tuesday",
    breakfast: "Poha, Tea",
    lunch: "Rice, Sambar, Potato Fry",
    dinner: "Chapati, Chicken Curry",
    nonVeg: true,
  },
  {
    day: "Wednesday",
    breakfast: "Upma, Fresh Fruit",
    lunch: "Veg Pulao, Raita",
    dinner: "Chapati, Dal Fry",
    nonVeg: false,
  },
  {
    day: "Thursday",
    breakfast: "Dosa, Chutney",
    lunch: "Rice, Rajma, Curd",
    dinner: "Chapati, Mixed Veg Curry",
    nonVeg: false,
  },
  {
    day: "Friday",
    breakfast: "Poori, Bhaji",
    lunch: "Rice, Sambar, Beans Fry",
    dinner: "Chicken Biryani, Raita",
    nonVeg: true,
  },
  {
    day: "Saturday",
    breakfast: "Bread, Jam, Banana",
    lunch: "Rice, Dal, Aloo Curry",
    dinner: "Fried Rice, Manchurian",
    nonVeg: false,
  },
  {
    day: "Sunday",
    breakfast: "Masala Dosa",
    lunch: "Special Thali — Rice, 2 Curries, Sweet",
    dinner: "Veg Fried Rice, Noodles",
    nonVeg: false,
  },
];

export const RULES = [
  {
    id: "curfew",
    no: "01",
    icon: "MoonStars",
    title: "Night Curfew",
    desc: "Night entry is allowed only up to 11:00 PM.",
  },
  {
    id: "billing",
    no: "02",
    icon: "CalendarBlank",
    title: "Billing Cycle",
    desc: "Rent is calculated from the 1st to the end of the month.",
  },
  {
    id: "due",
    no: "03",
    icon: "Wallet",
    title: "Payment Due Date",
    desc: "Advance fees must be cleared by the 5th of every month.",
  },
  {
    id: "deposit",
    no: "04",
    icon: "Files",
    title: "Deposits & Maintenance",
    desc: "Security deposit and maintenance fees are to be paid separately.",
  },
];