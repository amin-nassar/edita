import { PropsWithChildren } from "react";
import Marker from "./Marker";

interface Props {
  icon?: string;
  containerClassName?: string;
  href?: string;
  onClick?: () => void;
  markerFill?: string;
}

const Button = ({
  children,
  containerClassName = "",
  icon = "",
  onClick = () => {},
  href = "",
  markerFill = "",
}: PropsWithChildren<Props>) => {
  const classNames = `relative p-0.5 g5 rounded-2xl shadow-500 group cursor-pointer ${containerClassName}`;
  const content = () => {
    return (
      <>
        <span className="g4 inner-before relative flex min-h-[60px] items-center overflow-hidden rounded-2xl px-4 group-hover:before:opacity-100">
          <span className="absolute -left-[1px]">
            <Marker fill={markerFill} />
          </span>
          {icon && (
            <img
              src={icon}
              alt="circle"
              className="z-10 mr-5 size-10 object-contain"
            />
          )}
          <span className="font-poppins text-p1 relative z-2 text-[16px] leading-[24px] font-bold uppercase">
            {children}
          </span>
        </span>

        <span className="glow-before glow-after" />
      </>
    );
  };

  if (href) {
    return (
      <a href={href} className={classNames}>
        {content()}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classNames}>
      {content()}
    </button>
  );
};

export default Button;
