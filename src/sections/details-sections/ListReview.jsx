import { Divider } from "@mui/material";
import React, { useState } from "react";
import ReviewModal from "../../components/ReviewModel";
import { emojis } from "../../data/Reviews";

const ListReview = ({ hospital }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getRating = (rating) => {
    const emoji = emojis.find((emoji) => emoji.name === rating);
    return [emoji.value, emoji.name]
  }

  return (
    <>
      <section className="bg-light_grey shadow-sm w-full rounded-lg px-5 py-5">
        <div className="flex items-center justify-between relative ">
          <h1 className="font-semibold custom_title text-2xl py-4">
            Feedback and Reviews for Hospital ABC
          </h1>
          <button
            onClick={handleOpen}
            className="bg-blue text-white px-3 py-2 hover:bg-light_blue rounded-3xl"
          >
            Post A Review
          </button>
        </div>
        <div className="pt-7 space-y-6">
          {hospital.reviews.map((review, index) => (
            <>
              <div key={review._id}>
                <div className="flex justify-between">
                  <h1 className="text-lg">{getRating(review.rating)}</h1>
                  {/* <h1 className="text-lg">{review.date}</h1> */}
                </div>
                <div className="pt-2">
                  <h1 className="text-sm">{review.comment}</h1>
                </div>
              </div>
              {index !== hospital.reviews.length - 1 && <Divider />}
            </>
          ))}
        </div>
      </section>
      <ReviewModal open={open} id={hospital._id} handleClose={handleClose} />
    </>
  );
};

export default ListReview;
