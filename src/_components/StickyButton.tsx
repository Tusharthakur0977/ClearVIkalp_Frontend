import React from "react";

interface IStickyButton {
  label: string;
  isSticky?: boolean;
  bgColor?: string;
  color: string;
  extraClasses?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  isLoading?: boolean;
  id: string;
  isAnimated?: boolean;
}

const StickyButton: React.FC<IStickyButton> = ({
  bgColor,
  color,
  isSticky,
  label,
  extraClasses,
  onClick,
  disabled,
  type,
  isLoading,
  id,
  isAnimated,
}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      id={id}
      type={type || "button"}
      disabled={disabled}
      onClick={onClick}
      style={{
        backgroundColor: bgColor ? `${bgColor}` : "white",
      }}
      className={`text-${color} ${
        isAnimated && "breathing-button"
      } font-bold ${extraClasses}  focus:ring-4 focus:ring-primary-200 rounded-lg text-sm px-5 py-2.5 text-center ${
        isSticky && isVisible && "fixed bottom-2 mx-auto"
      } ${disabled && "opacity-70 cursor-not-allowed"} `}
    >
      {isLoading ? "Loaidng " : label}
    </button>
  );
};

export default StickyButton;
