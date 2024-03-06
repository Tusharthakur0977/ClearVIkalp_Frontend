import React from "react";
import { BookModalContext } from "../../context/BookModalContext";
import BookingCard from "../BookingCard";

const BookTestModal = () => {
  const { isBookModal } = React.useContext(BookModalContext);

  return (
    <div
      className={`fixed top-0 left-0 z-50 h-full w-full flex justify-center items-center  bg-[rgba(0,0,0,0.7)] ${
        isBookModal ? "flex" : "hidden"
      }`}
    >
      <BookingCard />
    </div>
  );
};

export default BookTestModal;
