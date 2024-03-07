import { useMemo, useState } from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import Slider from "react-slick";
import PlanData from "../_data/PlanData";
import useWindowDimensions from "../hooks/useWindowDimensions";
import PlanCard from "./PlanCard";
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Plans = () => {
  const { width } = useWindowDimensions();
  const [isSwiped, setIsSwiped] = useState(false);

  const handleSwipe = () => setIsSwiped(!isSwiped);

  const renderPlanCard = useMemo(
    () =>
      PlanData.map((plan) => (
        <PlanCard
          key={plan.id}
          title={plan.title}
          name={plan.name}
          amount={plan.amount}
          test={plan.test}
          noOfTest={plan.noOfTest}
          isSwiped={isSwiped}
          id={plan.id}
          btnId={plan.btnid}
        />
      )),
    [isSwiped]
  );

  return (
    <div className="w-full sm:w-[95%] px-3 py-6 flex flex-col my-5 gap-2">
      <div className="flex gap-1 px-1 self-center">
        <RiDoubleQuotesL color="#22577a" size="1.2rem" />
        <p className="text-center font-bold text-xl sm:text-2xl text-[#22577a]">
          Your Health, Your Way <br /> Clearvikalp Plan Selection
        </p>
        <RiDoubleQuotesR color="#22577a" size="1.2rem" />
      </div>
      <p className="text-center font-medium text-sm sm:text:lg mb-3 text-gray-700 w-[80%] self-center">
        Select Your Wellness Journey with Basic, Plus, and Pro Options
      </p>
      {width! < 1050 ? (
        <Slider
          arrows
          prevArrow={<FaCircleArrowLeft color="#22577a" size="2rem" />}
          nextArrow={<FaCircleArrowRight color="#22577a" size="2rem" />}
          initialSlide={0}
          onSwipe={handleSwipe}
          className="w-[90%] self-center m-0 overflow-visible"
          {...settings}
        >
          {renderPlanCard}
        </Slider>
      ) : (
        <div className="w-full grid grid-cols-2 sm:p-5">{renderPlanCard}</div>
      )}
    </div>
  );
};

export default Plans;
