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
      className="text-[16px] font-bold leading-[24px] text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:text-h5"
    >
      {title}
    </Link>
  );
};

export default NavLink;
