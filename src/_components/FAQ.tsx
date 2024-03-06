import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { useCallback, useState } from "react";
import { HiPlusCircle } from "react-icons/hi";
import { HiMiniMinusCircle } from "react-icons/hi2";
import FaqData from "../_data/FaqData";

const FAQ = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = useCallback(
    (value: number) => {
      setOpen(open === value ? 0 : value);
    },
    [open]
  );

  const renderAccordionIcon = (isOpen: boolean) => {
    const commonProps = {
      className: "rounded-full",
      style: {
        height: 30,
        width: 30,
      },
    };

    return isOpen ? (
      <HiMiniMinusCircle
        {...commonProps}
        style={{ ...commonProps.style, color: "white" }}
      />
    ) : (
      <HiPlusCircle
        {...commonProps}
        style={{
          ...commonProps.style,
          color: "#22577a",
          height: 25,
          width: 25,
        }}
      />
    );
  };

  return (
    <div className="w-full bg-white sm:w-[95%] px-3 py-10 flex flex-col gap-4">
      <div className="flex flex-col gap-1 mb-3">
        <p className="text-center font-semibold text-xl sm:text-2xl">
          Frequently Asked{" "}
          <span className="text-[#22577a] font-extrabold">Questions</span>
        </p>
        <div className="h-1 w-[30%] sm:w-[10%] self-center rounded-sm bg-[#22577a]" />
      </div>
      <div className="flex flex-col gap-4">
        {FaqData.map((faq, index) => {
          const isOpen = open === index + 1;
          return (
            <Accordion
              placeholder={""}
              id={faq.id}
              className={`faq_button w-full sm:w-[80%]  ${
                isOpen ? "bg-[#22577a]" : "bg-[#caf0f8]"
              }   sm:self-center shadow-md rounded-t-md ${
                isOpen && "rounded-b-md"
              } `}
              open={isOpen}
              key={faq.id}
            >
              <AccordionHeader
                placeholder={""}
                className="p-3 flex justify-between items-center gap-4"
                onClick={() => handleOpen(index + 1)}
              >
                <p
                  className={`text-sm ${
                    isOpen ? "text-white" : "text-black"
                  } font-bold flex-1`}
                >
                  {faq.title}
                </p>
                {renderAccordionIcon(isOpen)}
              </AccordionHeader>
              <AccordionBody className="p-4 text-left bg-[#caf0f8] text-black rounded-b-md">
                {faq.desc}
              </AccordionBody>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
