import { Divider } from "@mui/material";
import React, { useState } from "react";
import ReviewModal from "../../components/ReviewModel";

const ListReview = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <>
      <section className="bg-light_grey shadow-sm w-full rounded-lg px-5 py-5">
        <div className="flex items-center justify-between relative ">
          <h1 className="font-semibold custom_title text-2xl py-4">
            Feedback and Reviews for Hospital ABC
          </h1>
          <button onClick={handleOpen} className="bg-blue text-white px-3 py-2 hover:bg-light_blue rounded-3xl">Post A Review</button>
        </div>
        <div className="pt-7 space-y-5">
          {[1, 2, 3, 4, 5].map((item) => (
            <>
              <div className="flex justify-between">
                <h1 className="text-lg">{"😃 Excellent"}</h1>
                <h1 className="text-lg">Date</h1>
              </div>
              <div className="pt-1">
                <h1 className="text-sm">
                  I recently visited Hospital ABC for a routine check-up, and I
                  was impressed by the professionalism and care provided by the
                  staff. The doctors were thorough and attentive, and the nurses
                  were friendly and efficient. The facility was clean and
                  well-maintained. I felt genuinely cared for throughout my
                  visit. Highly recommend Hospital ABC for anyone seeking
                  quality healthcare.
                </h1>
              </div>
              <Divider />
            </>
          ))}
        </div>
      </section>
      <ReviewModal open={open} handleClose={handleClose} />
    </>
  );
};

export default ListReview;
