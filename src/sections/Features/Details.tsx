import type { Detail } from "@/types";

interface DetailProps {
  details: Detail[];
}

const Details = ({ details }: DetailProps) => {
  return (
    <div className="border-s3 rounded-7xl relative w-full border-2 px-[5%] max-md:hidden">
      <div className="bg-s3/20 absolute top-[6.5rem] right-0 left-0 z-10 h-[1px] w-full" />
      <ul className="flex grow justify-around">
        {details.map(({ id, icon, title }) => {
          return (
            <li key={id} className="relative px-4 pt-16 pb-14">
              <div className="bg-s3/20 absolute bottom-0 left-1/2 z-10 h-full w-[1px]" />
              <div className="border-s2 hover:border-s4 shadow-500 mx-auto mb-3 flex size-20 items-center justify-center rounded-full border-2 transition-all duration-500">
                <img
                  src={icon}
                  alt=""
                  className="z-20 size-17/20 object-contain"
                />
              </div>
              <h3 className="relative z-2 mx-auto max-w-36 text-center text-[14px] leading-[18px] font-semibold tracking-[0.03em] uppercase">
                {title}
              </h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Details;
