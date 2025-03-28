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
  const classNames = `relative p-0.5 g5 rounded-2xl shadow-500 group ${containerClassName}`;
  const content = () => {
    return (
      <>
        <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl overflow-hidden group-hover:before:opacity-100 inner-before ">
          <span className="absolute -left-[1px]">
            <Marker fill={markerFill} />
          </span>
          {icon && (
            <img
              src={icon}
              alt="circle"
              className="size-10 mr-5 object-contain z-10"
            />
          )}
          <span className="relative z-2 font-poppins text-[16px] font-bold leading-[24px] text-p1 uppercase">
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
