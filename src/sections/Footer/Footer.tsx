import Container from "@/components/Container";
import { socials } from "@/constants";

const Footer = () => {
  return (
    <footer>
      <Container className="py-10">
        <div className="flex w-full max-md:flex-col text-[12px] font-semibold leading-[18px] tracking-[0.03em]">
          <div className="flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-70">
              Made with <span className="text-red-500">❤</span> By{" "}
              <a
                className="text-p1 hover:underline cursor-pointer"
                href="https://www.linkedin.com/in/amin-m-nassar/"
                target="_blank"
              >
                Amin Nassar
              </a>
            </p>
          </div>
          <div className="flex items-center justify-center sm:ml-auto">
            <p className="after:absolute after:-right-5 after:top-[calc(50%-1px)] after:h-0.5 after:w-0.5 after:rounded-half after:bg-p2 after:content-[''] cursor-pointer relative mr-9 text-p5 transition-all duration-500 hover:text-p1">
              Privacy Policy
            </p>
            <p className="cursor-pointer text-p5 transition-all duration-500 hover:text-p1">
              Terms of Use
            </p>
          </div>

          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map((social) => (
              <li key={social.id}>
                <a
                  href={social.url}
                  className="flex size-10 items-center justify-center rounded-full border-2 border-s4/25 bg-s1/5 transition-all duration-500 hover:border-s4"
                >
                  <img
                    src={social.icon}
                    alt={social.title}
                    className="size-1/3 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
