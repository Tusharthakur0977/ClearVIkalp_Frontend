import React from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

const TopHeader = () => {
  const [isClient, setIsClient] = React.useState(false);
  const { width } = useWindowDimensions();

  React.useEffect(() => {
    // Component did mount
    setIsClient(true);
  }, []);

  const text =
    "Looking for a health checkup? Book the full body health Check-up Today";
  const isTextLongEnough = text.length > 50;
  const shouldApplyClass = isClient && isTextLongEnough && width! < 900;

  return (
    <div className="scrollable-text-container w-[100%] sm:w-[95%] px-3 py-2 text-center text-white text-sm sm:text-base bg-[#22577a] font-bold">
      <div className={shouldApplyClass ? "scrollable-text-content" : ""}>
        {text}
      </div>
    </div>
  );
};

export default TopHeader;
