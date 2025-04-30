import Container from "@/components/Container";
import { socials } from "@/constants";

const Footer = () => {
  return (
    <footer>
      <Container className="py-10">
        <div className="flex w-full text-[12px] leading-[18px] font-semibold tracking-[0.03em] max-md:flex-col">
          <div className="flex flex-1 flex-wrap items-center justify-center gap-5">
            <p>
              Made with <span className="text-red-500">❤</span> By{" "}
              <a
                className="text-p1 cursor-pointer hover:underline"
                href="https://www.linkedin.com/in/amin-m-nassar/"
                target="_blank"
              >
                Amin Nassar
              </a>
            </p>
          </div>
          <div className="flex items-center justify-center sm:ml-auto">
            <p className="after:rounded-half after:bg-p2 text-p5 hover:text-p1 relative mr-9 cursor-pointer transition-all duration-500 after:absolute after:top-[calc(50%-1px)] after:-right-5 after:h-0.5 after:w-0.5 after:content-['']">
              Privacy Policy
            </p>
            <p className="text-p5 hover:text-p1 cursor-pointer transition-all duration-500">
              Terms of Use
            </p>
          </div>

          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map((social) => (
              <li key={social.id}>
                <a
                  href={social.url}
                  className="border-s4/25 bg-s1/5 hover:border-s4 flex size-10 items-center justify-center rounded-full border-2 transition-all duration-500"
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
