import { Element } from "react-scroll";
import Marker from "../../components/Button/Marker";
import { links, logos } from "../../constants";

const Download = () => {
  return (
    <section>
      <Element
        name="download"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4">
          <div className="flex items-center">
            <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100">
              <div className="mb-10">
                <img
                  src="/images/edita.svg"
                  alt="Edita"
                  width={160}
                  height={55}
                />
              </div>
              <p className="text-[22px] leading-[36px] mb-10 max-w-md">
                Try it now for free on iOS, Android, PC, Web - whatever your
                flavor, we've got you covered
              </p>

              <ul className="flex flex-wrap items-center gap-6">
                {links.map((link) => (
                  <li
                    key={link.id}
                    className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                  >
                    <a
                      href={link.url}
                      className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500 "
                    >
                      <span className="absolute -top-2 rotate-90">
                        <Marker />
                      </span>
                      <img
                        src="/images/lines.svg"
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
              <div className="download_preview-before download_preview-after rounded-40 relative w-[955px] border-2 border-s5 p-6">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />

                  <img
                    src="/images/screen.png"
                    alt="Screen"
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
        </div>
      </Element>
    </section>
  );
};

export default Download;
