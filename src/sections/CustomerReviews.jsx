import React from "react";
import { reviews } from "../constants";
import { CustomerReviewCard } from "../components/CustomerReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <div className="flex flex-col flex-1 justify-center items-center">
        <h3 className="font-bold text-4xl font-palanquin text-center">
          What our <span className="text-coral-red">Customers</span> Say?
        </h3>
        <p className="info-text text-center m-auto mt-4 max-w-lg">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="flex flex-1 flex-wrap justify-evenly max-lg:flex-col mt-24 gap-14">
        {reviews.map((review) => (
          <CustomerReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
