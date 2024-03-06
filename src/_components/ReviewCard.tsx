import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import useWindowDimensions from "../hooks/useWindowDimensions";

interface IReviewCard {
  name: string;
  rating: number;
  image: string;
  desc: string;
}

const ReviewCard: React.FC<IReviewCard> = ({ desc, image, name, rating }) => {
  const { width } = useWindowDimensions();
  return (
    <div className="flex flex-col p-3 mt-8 sm:mt-12 self-center bg-white items-center sm:p-5 gap-3 shadow-xl rounded-md">
      <img
        className="rounded-full top-0 absolute"
        alt=""
        src={image}
        width={width! < 567 ? 90 : 120}
        height={width! < 567 ? 90 : 120}
      />
      <div className="flex flex-col mt-14">
        <RiDoubleQuotesL className="text-amber-500 " size="1.4rem" />

        <p className="text-sm flex font-normal text-gray-700 text-center">
          {desc}
        </p>
        <RiDoubleQuotesR
          className="text-amber-500 font-bold"
          style={{ alignSelf: "end" }}
          size="1.4rem"
        />
      </div>
      <div className="flex gap-2">
        {Array.from({ length: 5 }).map((_, index) => {
          return index + 1 <= rating ? (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="cursor-pointer text-amber-500 w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              ></path>
            </svg>
          ) : (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="cursor-pointer text-amber-500 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              ></path>
            </svg>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewCard;
