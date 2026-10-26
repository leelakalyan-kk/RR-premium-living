export const WHATSAPP_NUMBER = "919550344777";
export const CONTACT_PHONE_DISPLAY = "+91 95503 44777";
export const CONTACT_EMAIL = "rrpremiumliving@gmail.com";
export const FACEBOOK_URL = "https://www.facebook.com/share/1C8aV32Kbg/";
export const INSTAGRAM_URL =
  "https://www.instagram.com/rrpremiumliving?cplk=MXBrMzhsdjVlMHQzdA==";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Locations", href: "/locations" },
  { label: "Spaces", href: "#spaces" },
  { label: "Amenities", href: "#amenities" },
  { label: "Food", href: "#food" },
  { label: "Rules", href: "#rules" },
];

export const HEADER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Locations", href: "/locations" },
  { label: "Spaces", href: "/#spaces" },
  { label: "Book My Stay", href: "/booking/online" },
  { label: "Contact", href: "/contact" },
  { label: "FAQs", href: "/faqs" },
];

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?auto=format&fit=crop&w=2000&q=80",
  hyderabad: "/hyderabad-location.png",
  bangalore:
    "https://images.unsplash.com/photo-1687158266872-fd2773fa76c6?auto=format&fit=crop&w=1400&q=80",
  mens: "https://images.unsplash.com/photo-1588939349575-7ab15c8bd1ef?auto=format&fit=crop&w=1000&q=80",
  womens:
    "https://images.unsplash.com/photo-1662454419716-c4c504728811?auto=format&fit=crop&w=1000&q=80",
  coliving:
    "https://images.unsplash.com/photo-1764006195843-e6f9a5781500?auto=format&fit=crop&w=1000&q=80",
  kitchen:
    "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1200&q=80",
  gym: "/gym.png",
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
  "Open Kitchen",
  "Fully Equipped Gym",
  "Laundry & Washing Machines",
  "Geysers — Hot Water",
  "RO Drinking Water Purifiers",
  "Daily Housekeeping",
  "24/7 Water Supply",
  "CCTV Surveillance",
  "24/7 Security Guard",
  "Ample Parking",
  "High-Speed Wi-Fi",
  "Lift Access",
  "AC & Non-AC Rooms",
  "Play Area with Indoor Games",
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
    image: "/co-living-community.png",
    copy: "Shared living that actually feels shared — open kitchen evenings, indoor games, and a community of students and professionals.",
    points: ["Open kitchen", "Play area & indoor games", "Community living"],
  },
];

export const PROPERTY_STATS = [
  { id: "living-options", label: "Living Options", value: "3" },
  { id: "amenities", label: "Amenities", value: "18+" },
  { id: "residents", label: "Residents", value: "300+" },
  { id: "beds-in-progress", label: "Beds in Progress", value: "400+" },
];

export const LOCATION_PROPERTIES = [
  {
    id: "rr-mens",
    name: "Men's Living",
    image: "/location-gachibowli.png",
    audience: "male",
    audienceLabel: "For Men",
    sharing: [1, 2, 3, 4, 5],
    airConditioning: ["AC", "Non-AC"],
    details: "Comfortable, fully furnished rooms designed for focused everyday living.",
    contact: { name: "Admissions Team", phone: CONTACT_PHONE_DISPLAY, email: CONTACT_EMAIL },
    exclusive: ["Study-friendly rooms", "Daily housekeeping", "High-speed Wi-Fi"],
    gallery: ["/location-gachibowli.png", IMAGES.womens, IMAGES.kitchen],
    food: ["Idli, Sambar, Chutney", "Rice, Dal, Veg Curry, Curd", "Chapati, Paneer Curry"],
    residents: ["The rooms are calm, clean, and close to everything I need.", "The support team made moving in very easy."],
  },
  {
    id: "rr-womens",
    name: "Women's Living",
    image: IMAGES.mens,
    audience: "female",
    audienceLabel: "For Women",
    sharing: [1, 2, 3, 4, 5],
    airConditioning: ["AC", "Non-AC"],
    details: "Secure women-focused living with comfortable rooms and daily housekeeping.",
    contact: { name: "Admissions Team", phone: CONTACT_PHONE_DISPLAY, email: CONTACT_EMAIL },
    exclusive: ["Women-focused security", "Homely meals", "Daily housekeeping"],
    gallery: [IMAGES.mens, IMAGES.womens, IMAGES.kitchen],
    food: ["Dosa, Chutney", "Rice, Sambar, Potato Fry", "Chapati, Dal Fry"],
    residents: ["It feels safe, warm, and genuinely well managed.", "The daily routine here is comfortable and easy."],
  },
  {
    id: "rr-coliving",
    name: "Co-living",
    image: "/location-whitefield.png",
    audience: "co-living",
    audienceLabel: "Co-living",
    sharing: [2, 3, 4, 5],
    airConditioning: ["AC", "Non-AC"],
    details: "Community-first co-living with comfortable rooms and shared spaces.",
    contact: { name: "Admissions Team", phone: CONTACT_PHONE_DISPLAY, email: CONTACT_EMAIL },
    exclusive: ["Open kitchen", "Community events", "Play area & indoor games"],
    gallery: ["/location-whitefield.png", IMAGES.coliving, IMAGES.kitchen],
    food: ["Poha, Tea", "Veg Pulao, Raita", "Fried Rice, Manchurian"],
    residents: ["The community makes it easy to feel at home.", "I love the shared spaces and friendly atmosphere."],
  },
];

export const AMENITIES = [
  { id: "laundry", label: "Laundry & Washing Machines", icon: "WashingMachine", info: "Convenient washing facilities help residents keep daily routines simple.", image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600&q=80" },
  { id: "geysers", label: "Geysers — Hot Water", icon: "FireSimple", info: "Reliable hot water is available for comfortable mornings and evenings.", image: "/hot-water.png" },
  { id: "ro", label: "RO Drinking Water Purifiers", icon: "Drop", info: "Clean, filtered drinking water is available for residents throughout the day.", image: "/ro-water.png" },
  { id: "housekeeping", label: "Daily Housekeeping", icon: "Sparkle", info: "Shared spaces and rooms are maintained with consistent daily care.", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80" },
  { id: "water", label: "24/7 Water Supply", icon: "Timer", info: "A dependable water supply keeps everyday living comfortable and uninterrupted.", image: "/water-supply.png" },
  { id: "cctv", label: "CCTV Surveillance", icon: "VideoCamera", info: "Monitored common areas add an extra layer of visibility and security.", image: "/cctv.png" },
  { id: "guard", label: "24/7 Security Guard", icon: "ShieldCheck", info: "On-site security support helps residents feel safe around the clock.", image: "/security-guard.jpg" },
  { id: "parking", label: "Ample Parking", icon: "Bicycle", info: "Dedicated parking makes two-wheeler access easy for residents and visitors.", image: "/parking.png" },
  { id: "wifi", label: "High-Speed Wi-Fi", icon: "WifiHigh", info: "Stay connected for study, work, streaming, and everyday communication.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80" },
  { id: "lift", label: "Lift Access", icon: "Elevator", info: "Lift access makes moving between floors convenient for everyone.", image: "/lift.png" },
  { id: "ac", label: "AC & Non-AC Rooms", icon: "Snowflake", info: "Choose a room style that matches your comfort and budget preferences.", image: IMAGES.hero },
  { id: "games", label: "Play Area with Indoor Games", icon: "Crown", info: "Relax and connect with fellow residents through indoor games and leisure time.", image: "/games.png" },
];

export const MENU = [
  {
    day: "Monday",
    breakfast: "Idli, Sambar, Chutney",
    lunch: "Rice, Dal, Veg Curry, Curd",
    dinner: "Rice, Paneer Curry",
    nonVeg: false,
  },
  {
    day: "Tuesday",
    breakfast: "Poha, Tea",
    lunch: "Rice, Sambar, Potato Fry",
    dinner: "Rice, Dal Fry",
    nonVeg: false,
  },
  {
    day: "Wednesday",
    breakfast: "Upma, Egg & Fresh Fruit",
    lunch: "Veg Pulao, Raita",
    dinner: "Chapathi, Chicken Curry",
    nonVeg: true,
  },
  {
    day: "Thursday",
    breakfast: "Dosa, Chutney",
    lunch: "Rice, Rajma, Curd",
    dinner: "Chapathi, Mixed Veg Curry",
    nonVeg: false,
  },
  {
    day: "Friday",
    breakfast: "Poori, Bhaji",
    lunch: "Rice, Sambar, Beans Fry",
    dinner: "Chapathi, Mixed Veg Curry",
    nonVeg: false,
  },
  {
    day: "Saturday",
    breakfast: "Bread, Jam, Banana",
    lunch: "Rice, Dal, Aloo Curry",
    dinner: "Rice, Manchurian",
    nonVeg: false,
  },
  {
    day: "Sunday",
    breakfast: "Masala Dosa, Egg",
    lunch: "Special Thali — Rice, 2 Curries, Sweet",
    dinner: "Rice, Chicken Curry",
    nonVeg: true,
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