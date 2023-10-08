import React from "react";
import { star } from "../assets/icons";

export const CustomerReviewCard = ({
  imgURL,
  customerName,
  rating,
  feedback,
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={imgURL}
        alt={name}
        className="w-[120px] h-[120px] object-cover rounded-full"
      />
      <p className="info-text text-center max-w-sm mt-6">{feedback}</p>
      {/* Rating */}
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img src={star} alt="Rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-1 font-bold font-palanquin text-3xl text-center">
        {customerName}
      </h3>
    </div>
  );
};
