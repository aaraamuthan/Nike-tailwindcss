import React from "react";
import { motion } from "framer-motion";

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1, img: { x: 10 } }}
      whileTap={{ scale: 0.75 }}
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red text-white border-coral-red"
    }
    ${fullWidth && "w-full"}
    `}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="Shop Now"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </motion.button>
  );
};

export default Button;
