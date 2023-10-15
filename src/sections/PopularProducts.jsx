import React from "react";
import { products } from "../constants";
import { PopularProductCard } from "../components/PopularProductCard";
import { motion } from "framer-motion";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our
          <span className="text-coral-red ml-3">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product, index) => (
          <motion.div
            initial={{ opacity: 0, x: index > 1 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 0.95 }}
            transition={{ delay: 0.1 }}
          >
            <PopularProductCard key={product.name} {...product} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
