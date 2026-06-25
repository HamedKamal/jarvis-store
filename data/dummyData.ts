export interface Product {
  id: string;
  handle: string;
  title: string;
  price: number;
  description: string;
  featuredImage: string;
  images: string[];
  options: {
    name: string;
    values: string[];
  }[];
  variants: {
    id: string;
    title: string;
    price: number;
    available: boolean;
    options: { [key: string]: string };
    image?: string;
  }[];
  tags: string[];
  watchCount?: number;
  preorderText?: string;
  deliveryEstimate?: string;
}

// Single Hero Product: Ringer Tee
export const ringerTeeProduct: Product = {
  id: "prod_ringer_tee",
  handle: "ringer-tee",
  title: "THE RINGER TEE",
  price: 700,
  description: "Premium quality cotton ringer tee featuring a contrast rib collar and sleeve bands. Crafted with carefully selected heavyweight organic cotton for a structured architectural drape, clean finished seams, and everyday durability.",
  featuredImage: "/assets/BLACK/atef-front.jpg",
  images: [
    "/assets/BLACK/atef-front.jpg",
    "/assets/BLACK/atef-back.jpg",
    "/assets/BLACK/atef-side.jpg",
    "/assets/BLACK/hana-front.jpg",
    "/assets/CREAMY-OLIVE/nour-front_1.jpg",
    "/assets/CREAMY-OLIVE/atef-front_1.jpg",
    "/assets/CREAMY-OLIVE/atef-back_1.jpg",
    "/assets/CREAMY-BURGUNDY/gogo-front.jpg",
    "/assets/CREAMY-BURGUNDY/gogo-back.jpg",
    "/assets/CREAMY-BURGUNDY/nour-front.jpg",
    "/assets/OLIVE-WHITE/gogo-front_1.jpg",
    "/assets/OLIVE-WHITE/gogo-back_1.jpg",
    "/assets/OLIVE-WHITE/hana-front_2.jpg",
    "/assets/ROSE/nour-1.jpg",
    "/assets/ROSE/gogo-front_2.jpg",
    "/assets/ROSE/gogo-back_2.jpg",
    "/assets/ARMY/atef-front_2.jpg",
    "/assets/ARMY/atef-back-side.jpg",
    "/assets/BURGUNDY/hana-front_1.jpg",
    "/assets/BURGUNDY/taha-back.jpg"
  ],
  options: [
    {
      name: "Color",
      values: ["Black / White", "Creamy / Olive", "Creamy / Burgundy", "Olive / White", "Rose / White", "Army / White", "Burgundy / White"]
    },
    {
      name: "Size",
      values: ["S", "M", "L", "XL"]
    }
  ],
  variants: [
    // Black / White variants
    { id: "var_black_s", title: "Black / White / S", price: 700, available: true, options: { "Color": "Black / White", "Size": "S" }, image: "/assets/BLACK/atef-front.jpg" },
    { id: "var_black_m", title: "Black / White / M", price: 700, available: true, options: { "Color": "Black / White", "Size": "M" }, image: "/assets/BLACK/atef-front.jpg" },
    { id: "var_black_l", title: "Black / White / L", price: 700, available: true, options: { "Color": "Black / White", "Size": "L" }, image: "/assets/BLACK/atef-front.jpg" },
    { id: "var_black_xl", title: "Black / White / XL", price: 700, available: true, options: { "Color": "Black / White", "Size": "XL" }, image: "/assets/BLACK/atef-front.jpg" },
    // Creamy / Olive variants
    { id: "var_colive_s", title: "Creamy / Olive / S", price: 700, available: true, options: { "Color": "Creamy / Olive", "Size": "S" }, image: "/assets/CREAMY-OLIVE/nour-front_1.jpg" },
    { id: "var_colive_m", title: "Creamy / Olive / M", price: 700, available: true, options: { "Color": "Creamy / Olive", "Size": "M" }, image: "/assets/CREAMY-OLIVE/nour-front_1.jpg" },
    { id: "var_colive_l", title: "Creamy / Olive / L", price: 700, available: true, options: { "Color": "Creamy / Olive", "Size": "L" }, image: "/assets/CREAMY-OLIVE/nour-front_1.jpg" },
    { id: "var_colive_xl", title: "Creamy / Olive / XL", price: 700, available: true, options: { "Color": "Creamy / Olive", "Size": "XL" }, image: "/assets/CREAMY-OLIVE/nour-front_1.jpg" },
    // Creamy / Burgundy variants
    { id: "var_cburg_s", title: "Creamy / Burgundy / S", price: 700, available: true, options: { "Color": "Creamy / Burgundy", "Size": "S" }, image: "/assets/CREAMY-BURGUNDY/gogo-front.jpg" },
    { id: "var_cburg_m", title: "Creamy / Burgundy / M", price: 700, available: true, options: { "Color": "Creamy / Burgundy", "Size": "M" }, image: "/assets/CREAMY-BURGUNDY/gogo-front.jpg" },
    { id: "var_cburg_l", title: "Creamy / Burgundy / L", price: 700, available: false, options: { "Color": "Creamy / Burgundy", "Size": "L" }, image: "/assets/CREAMY-BURGUNDY/gogo-front.jpg" },
    { id: "var_cburg_xl", title: "Creamy / Burgundy / XL", price: 700, available: false, options: { "Color": "Creamy / Burgundy", "Size": "XL" }, image: "/assets/CREAMY-BURGUNDY/gogo-front.jpg" },
    // Olive / White variants
    { id: "var_owhite_s", title: "Olive / White / S", price: 700, available: true, options: { "Color": "Olive / White", "Size": "S" }, image: "/assets/OLIVE-WHITE/gogo-front_1.jpg" },
    { id: "var_owhite_m", title: "Olive / White / M", price: 700, available: true, options: { "Color": "Olive / White", "Size": "M" }, image: "/assets/OLIVE-WHITE/gogo-front_1.jpg" },
    { id: "var_owhite_l", title: "Olive / White / L", price: 700, available: true, options: { "Color": "Olive / White", "Size": "L" }, image: "/assets/OLIVE-WHITE/gogo-front_1.jpg" },
    { id: "var_owhite_xl", title: "Olive / White / XL", price: 700, available: true, options: { "Color": "Olive / White", "Size": "XL" }, image: "/assets/OLIVE-WHITE/gogo-front_1.jpg" },
    // Rose / White variants
    { id: "var_rose_s", title: "Rose / White / S", price: 700, available: false, options: { "Color": "Rose / White", "Size": "S" }, image: "/assets/ROSE/nour-1.jpg" },
    { id: "var_rose_m", title: "Rose / White / M", price: 700, available: true, options: { "Color": "Rose / White", "Size": "M" }, image: "/assets/ROSE/nour-1.jpg" },
    { id: "var_rose_l", title: "Rose / White / L", price: 700, available: false, options: { "Color": "Rose / White", "Size": "L" }, image: "/assets/ROSE/nour-1.jpg" },
    { id: "var_rose_xl", title: "Rose / White / XL", price: 700, available: false, options: { "Color": "Rose / White", "Size": "XL" }, image: "/assets/ROSE/nour-1.jpg" },
    // Army / White variants
    { id: "var_army_s", title: "Army / White / S", price: 700, available: true, options: { "Color": "Army / White", "Size": "S" }, image: "/assets/ARMY/atef-front_2.jpg" },
    { id: "var_army_m", title: "Army / White / M", price: 700, available: true, options: { "Color": "Army / White", "Size": "M" }, image: "/assets/ARMY/atef-front_2.jpg" },
    { id: "var_army_l", title: "Army / White / L", price: 700, available: true, options: { "Color": "Army / White", "Size": "L" }, image: "/assets/ARMY/atef-front_2.jpg" },
    { id: "var_army_xl", title: "Army / White / XL", price: 700, available: true, options: { "Color": "Army / White", "Size": "XL" }, image: "/assets/ARMY/atef-front_2.jpg" },
    // Burgundy / White variants
    { id: "var_burg_s", title: "Burgundy / White / S", price: 700, available: true, options: { "Color": "Burgundy / White", "Size": "S" }, image: "/assets/BURGUNDY/hana-front_1.jpg" },
    { id: "var_burg_m", title: "Burgundy / White / M", price: 700, available: true, options: { "Color": "Burgundy / White", "Size": "M" }, image: "/assets/BURGUNDY/hana-front_1.jpg" },
    { id: "var_burg_l", title: "Burgundy / White / L", price: 700, available: true, options: { "Color": "Burgundy / White", "Size": "L" }, image: "/assets/BURGUNDY/hana-front_1.jpg" },
    { id: "var_burg_xl", title: "Burgundy / White / XL", price: 700, available: true, options: { "Color": "Burgundy / White", "Size": "XL" }, image: "/assets/BURGUNDY/hana-front_1.jpg" }
  ],
  tags: ["Ringer Tee", "T-Shirt", "Cotton", "Drop 1"],
  watchCount: 42,
  preorderText: "Preorders available | Ships by Jul 10",
  deliveryEstimate: "Estimated delivery : Jul 12 - Jul 15"
};

export const dummyProducts: Product[] = [ringerTeeProduct];
export const dummyCollections = [];
