interface NavLinkProps {
  title: string;
}

const NavLink = ({ title }: NavLinkProps) => {
  return (
    <div className="text-[16px] font-bold leading-[24px] text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5">
      {title}
    </div>
  );
};

export default NavLink;
