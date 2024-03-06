import React from "react";
import StepData from "../_data/StepsData";

const StepsJourney = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const divs = document.querySelectorAll(".journy-card");

      let foundVisible = false;

      divs.forEach((div, index: number) => {
        const rect = div.getBoundingClientRect();
        const isMiddleVisible = rect.top <= window.innerHeight / 2;
        if (isMiddleVisible) {
          setActiveIndex(index);
          foundVisible = true;
        }
      });

      if (!foundVisible) {
        setActiveIndex(-1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="w-[100%] sm:w-[95%] flex flex-col my-10 items-center">
      <p className="text-center text-black font-semibold text-xl sm:text-2xl px-3 mb-4">
        Your Health Checkup journey with{" "}
        <span className="text-[#22577a] font-extrabold ">Clear Vikalp</span>{" "}
        simplified in{" "}
        <span className="text-[#22577a] font-extrabold">4 Easy Steps.</span>
      </p>
      <div className="flex w-[90%] flex-col items-center">
        {StepData.map((steps, index) => (
          <React.Fragment key={index}>
            <div
              className={`w-[90%] md:w-[45%] ${
                index % 2 === 0 ? "md:self-end" : "md:self-start"
              } gap-4 relative rounded-2xl p-4 flex flex-col justify-between shadow-2xl ring-1 ring-slate-900/10 
            journy-card ${activeIndex! >= index ? "active" : ""}
            `}
              style={{
                backgroundColor: activeIndex! >= index ? "#22577a" : "white",
                transition: "background-color 0.5s ease",
              }}
            >
              <p
                className={`text-lg text-center font-semibold ${
                  activeIndex! >= index ? "text-white" : "text-[#22577a]"
                }`}
              >
                {steps.title}
              </p>
              <ul className="px-2">
                {steps.subtitles.map((sub) => (
                  <li
                    key={sub}
                    className={`text-xs ${
                      activeIndex! >= index ? "text-white" : "text-black"
                    }  font-bold text-start sm:text-center mb-2 list-disc`}
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
            {index + 1 < StepData.length && (
              <div className="h-4 bg-[#22577a] self-center w-[2px]"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StepsJourney;
