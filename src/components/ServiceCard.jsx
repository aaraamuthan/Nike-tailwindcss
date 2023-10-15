import React from "react";
import { motion } from "framer-motion";

export const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <motion.div
      whileHover={{ y: -20, borderColor: "rgb(255 100 82 / 1)" }}
      className="flex-1 sm:min-w-[350px] sm:w-[350px] w-full rounded-[20px] px-10 shadow-3xl py-16 border border-slate-gray"
    >
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="font-bold font-palanquin text-3xl mt-5 leading-normal">
        {label}
      </h3>
      <p className="mt-5 font-montserrat break-words text-lg text-slate-gray leading-normal">
        {subtext}
      </p>
    </motion.div>
  );
};
