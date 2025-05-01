import { Element } from "react-scroll";
import { Marker } from "@/components/Button";
import { links, logos } from "@/constants";
import Container from "@/components/Container";

const Download = () => {
  return (
    <section>
      <Element
        name="download"
        className="g7 relative pt-24 pb-32 max-lg:pb-24 max-md:py-16"
      >
        <Container>
          <div className="flex items-center">
            <div className="relative mr-6 flex-(--flex-540) max-xl:flex-(--flex-280) max-lg:flex-(--flex-256) max-md:flex-(--flex-100)">
              <div className="mb-10">
                <img
                  src="/edita/images/edita.svg"
                  alt="Edita"
                  width={160}
                  height={55}
                />
              </div>
              <p className="mb-10 max-w-md text-[22px] leading-[36px]">
                Edit anywhere, anytime—iOS, Android, PC, or Web. Your
                creativity, your choice.
              </p>

              <ul className="flex flex-wrap items-center gap-6">
                {links.map((link) => (
                  <li
                    key={link.id}
                    className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                  >
                    <a
                      href={link.url}
                      className="download_tech-icon_before rounded-half border-s3 bg-s1 transition-borderColor relative flex size-22 items-center justify-center border-2 duration-500"
                    >
                      <span className="absolute -top-2 rotate-90">
                        <Marker />
                      </span>
                      <img
                        src="/edita/images/lines.svg"
                        alt="Lines"
                        className="absolute size-13/20 object-contain"
                      />
                      <span className="download_tech-icon">{link.icon}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-10 max-md:hidden">
              <div className="download_preview-before download_preview-after rounded-40 border-s5 relative w-[955px] border-2 p-6">
                <div className="bg-s1 relative rounded-3xl px-6 pt-14 pb-6">
                  <div className="absolute top-6 left-6 flex items-center gap-2.5">
                    <span className="rounded-half bg-p2 inline-block size-2.5" />
                    <span className="rounded-half bg-s3 inline-block size-2.5" />
                    <span className="rounded-half bg-p1/15 inline-block size-2.5" />
                  </div>

                  <img
                    src="/edita/images/screen.webp"
                    alt="Screen"
                    loading="lazy"
                    width={855}
                    height={655}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <ul className="mt-24 flex justify-center max-lg:hidden">
            {logos.map((logo) => (
              <li key={logo.id} className="mx-10">
                <img
                  src={logo.url}
                  alt={logo.title}
                  width={logo.width}
                  height={logo.height}
                />
              </li>
            ))}
          </ul>
        </Container>
      </Element>
    </section>
  );
};

export default Download;
