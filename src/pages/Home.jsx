import React from "react";
import Hero from "../components/Admin/Layout/Hero";
import GenderCollectionSection from "../components/Admin/Products/GenderCollectionSection";
import NewArrivals from "../components/Admin/Products/NewArrivals";
import ProductDetails from "../components/Admin/Products/productDetails";
import ProductGrid from "../components/Admin/Products/productGrid";
import FeaturedCollection from "../components/Admin/Products/FeaturedCollection";
import FeaturesSection from "../components/Admin/Products/FeaturesSection";

const placeholderProducts = [
  {
    _id: "1",
    name: "product 1",
    price: 100,
    img: [{ url: "https://picsum.photos/500/500?random=3" }],
  },
  {
    _id: "2",
    name: "product 2",
    price: 100,
    img: [{ url: "https://picsum.photos/500/500?random=4" }],
  },
  {
    _id: "3",
    name: "product 3",
    price: 100,
    img: [{ url: "https://picsum.photos/500/500?random=5" }],
  },
  {
    _id: "4",
    name: "product 4",
    price: 100,
    img: [{ url: "https://picsum.photos/500/500?random=6" }],
  },
  {
    _id: "5",
    name: "product 5",
    price: 100,
    img: [{ url: "https://picsum.photos/500/500?random=7" }],
  },
  {
    _id: "6",
    name: "product 6",
    price: 100,
    img: [{ url: "https://picsum.photos/500/500?random=8" }],
  },
  {
    _id: "7",
    name: "product 7",
    price: 100,
    img: [{ url: "https://picsum.photos/500/500?random=9" }],
  },
  {
    _id: "8",
    name: "product 8",
    price: 100,
    img: [{ url: "https://picsum.photos/500/500?random=10" }],
  },
];

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      {/* Best Seller */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetails />

      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>

      <FeaturedCollection />
      <FeaturesSection />
    </div>
  );
};

export default Home;
