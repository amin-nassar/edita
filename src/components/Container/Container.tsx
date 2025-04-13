import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}

const Container = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
