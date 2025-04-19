import { Link } from "react-scroll";

interface NavLinkProps {
  title: string;
  onClick: () => void;
}

const NavLink = ({ title, onClick }: NavLinkProps) => {
  return (
    <Link
      onClick={onClick}
      to={title}
      smooth
      spy
      activeClass="text-p3!"
      offset={-100}
      className="text-p4 hover:text-p1 max-lg:text-h5 cursor-pointer text-[16px] leading-[24px] font-bold uppercase transition-colors duration-500 max-lg:my-4 max-lg:leading-(--text-h5--line-height)"
    >
      {title}
    </Link>
  );
};

export default NavLink;
