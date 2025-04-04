import type { Detail } from "../../types";

interface DetailProps {
  details: Detail[];
}

const Details = ({ details }: DetailProps) => {
  return (
    <ul className="relative flex justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl max-md:hidden">
      <div className="absolute bg-s3/20 top-[6.5rem] left-0 right-0 w-full h-[1px] z-10" />
      {details.map(({ id, icon, title }) => {
        return (
          <li key={id} className="relative pt-16 px-4 pb-14">
            <div className="absolute bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10" />
            <div className="flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-20">
              <img
                src={icon}
                alt={title}
                className="size-17/20 object-contain z-20"
              />
            </div>
            <h3 className="relative z-2 max-w-36 mx-auto text-[14px] font-semibold leading-[18px] tracking-[0.03em] text-center uppercase">
              {title}
            </h3>
          </li>
        );
      })}
    </ul>
  );
};

export default Details;
