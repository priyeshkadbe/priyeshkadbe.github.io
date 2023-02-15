import { footer } from "../../utils/constants";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="flex flex-col px-5 py-10 z-5 justify-center">
      <div className="w-full max-w-screen flex mx-auto justify-around flex-wrap items-start">
        {footer.columns.map((item, index) => {
          return (
            <div key={index} className="mb-5 sm:mb-0">
              <h4 className="uppercase text-sm font-bold">{item.title}</h4>
              <div>
                {item.links.map((item, index) => {
                  return (
                    <div key={index} className="my-4">
                      {item.leavesWebsite ? (
                        <a
                          href={item.link}
                          target="_blank"
                          className="items-center flex "
                        >
                          {item.icon && (
                            <span className="pr-2 -mb-1">
                              {/* <Image src={item.icon} width={20} height={20} /> */}
                            </span>
                          )}
                          {item.name}
                        </a>
                      ) : (
                        <Link href={item.link}>{item.name}</Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="text-center flex flex-col sm:text-left pt-8 sm:mt-0 sm:pt-0 border-t sm:border-0">
          <h4 className="uppercase text-sm font-bold">Support My Work</h4>
          <div className="space-y-2 mt-4 w-full flex items-center sm:items-start flex-col">
            {footer.support.buymeacoffee !== "" && (
              <div>
                <a
                  href={`https://buymeacoffee.com/${footer.support.buymeacoffee}`}
                  target="_blank"
                >
                  <img
                    src="/static/misc/buy-me-a-coffee.svg"
                    className="h-12 mr-2 hover:opacity-80 opacity-100 transition-opacity"
                  />
                </a>
              </div>
            )}
            {footer.support.paypal !== "" && (
              <div>
                <a
                  href={`https://paypal.me/${footer.support.paypal}`}
                  target="_blank"
                >
                  <img
                    src="/static/misc/paypal.svg"
                    className="h-12 mr-2 hover:opacity-80 opacity-100 transition-opacity"
                  />
                </a>
              </div>
            )}
            <p className=" text-xs pt-1">
              {footer.support.message}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
