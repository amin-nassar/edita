import { PropsWithChildren } from "react";

interface PricingButtonProps {
  onClick: () => void;
  selected?: boolean;
}

const PricingButton = ({
  onClick,
  children,
  selected,
}: PropsWithChildren<PricingButtonProps>) => {
  const className = `text-[16px] font-bold leading-[24px] relative z-2 h-16 flex-1 uppercase text-p5 transition-colors duration-500 hover:text-p4 ${
    selected ? "text-p4" : ""
  }`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default PricingButton;
