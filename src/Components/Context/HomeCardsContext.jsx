import { createContext, useState } from "react";

const HomeCardsContext = createContext();
export default HomeCardsContext;

export const HomeCardsContextProvider = ({ children }) => {
  const cards = [
    {
      id: "1",
      title: "Modern Wooden Chair",
      image:
        "https://i.pinimg.com/474x/d3/b5/56/d3b556746572d8454e9c7bba747be97d.jpg",
      shortDescription: "Elegant wooden chair",
      description:
        "A handcrafted wooden chair made with sustainable oak wood, designed to bring a touch of elegance and comfort to your living space. Perfect for both modern and traditional interiors.",
      price: 89.99,
    },
    {
      id: "2",
      title: "Wireless Bluetooth Headphones",
      image:
        "https://primebazar.com/public/uploads/all/9FNa4Lha3n2rpe58dlS1VDNgGuzpzZATp3Ijx9Ek.png",
      shortDescription: "Noise-cancelling headphones",
      description:
        "Experience immersive sound with our latest wireless Bluetooth headphones, featuring active noise cancellation, 40-hour battery life, and ultra-soft ear cushions for long-lasting comfort.",
      price: 129.99,
    },
    {
      id: "3",
      title: "Stainless Steel Water Bottle",
      image:
        "https://images.othoba.com/images/thumbs/0706672_stainless-steel-h2o-sports-water-bottle-700ml.jpeg",
      shortDescription: "Keeps drinks cold/hot",
      description:
        "This double-walled stainless steel water bottle keeps your beverages cold for up to 24 hours and hot for up to 12. It's leakproof, BPA-free, and ideal for work, travel, or workouts.",
      price: 24.99,
    },
    {
      id: "4",
      title: "Minimalist Wall Clock",
      image:
        "https://writingsonthewall.in/cdn/shop/files/writingsonthewallluxuryclock_1_-Copy.jpg?v=1727273405&width=1100",
      shortDescription: "Silent modern clock",
      description:
        "A sleek and minimalist wall clock designed with a noiseless quartz mechanism. Its matte black frame and simple numeric design make it a stylish addition to any room.",
      price: 39.99,
    },
    {
      id: "5",
      title: "Luxury Cotton Bedsheet Set",
      image:
        "https://lmg.com.sg/wp-content/uploads/2020/12/Bedsheet-w-Logo.png",
      shortDescription: "4-piece cotton bedsheet",
      description:
        "Upgrade your sleep with our premium 100% cotton bedsheet set, featuring a soft sateen finish. Includes 1 flat sheet, 1 fitted sheet, and 2 pillowcases. Breathable, durable, and machine washable.",
      price: 59.99,
    },
    {
      id: "6",
      title: "Ergonomic Office Chair",
      image:
        "https://i5.walmartimages.com/seo/Mainstays-Ergonomic-Mesh-Back-Office-Chair-with-Flip-Up-Arms-for-Adults-Black-Fabric-275lb_584c4cc5-fc4d-46d3-9a23-5a3fb5bb134e.6c681a1d24f26e9c017a3a011877e2d8.jpeg",
      shortDescription: "Comfortable work chair",
      description:
        "Designed for productivity and comfort, this ergonomic office chair includes lumbar support, a breathable mesh back, and adjustable height and tilt settings. Ideal for long work hours.",
      price: 199.99,
    },
  ];
  const [searchQuery, setsearchQuery] = useState("");
  const [filterValue, setfilterValue] = useState("");

  return (
    <HomeCardsContext.Provider
      value={{
        cards,
        searchQuery,
        setsearchQuery,
        filterValue,
        setfilterValue,
      }}
    >
      {children}
    </HomeCardsContext.Provider>
  );
};
