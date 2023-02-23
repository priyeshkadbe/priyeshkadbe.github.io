import { footer } from "../../utils/constants";
import Link from "next/link";
import Image from "next/image";
import { paypalSVG } from "./icons/paypalSVG";
import { buyMeCoffeeSVG } from "./icons/buyMeCoffeeSVG";
function Footer() {
  return (
    <footer className="flex flex-col px-5 py-10 z-5 justify-center items-center">
      <div className="w-full max-w-4xl px-6 text-center flex md:mx-auto justify-between flex-wrap items-start">
        {footer.columns.map((item, index) => {
          return (
            <div key={index} className="mb-5 sm:mb-0 text-left ">
              <h4 className="uppercase text-lg font-bold tracking-widest">
                {item.title}
              </h4>
              <div>
                {item.links.map((item, index) => {
                  return (
                    <div key={index} className="my-4 ">
                      {item.leavesWebsite ? (
                        <Link
                          href={item.link}
                          target="_blank"
                          className="items-center flex "
                        >
                          {item.icon && (
                            <Link href={item.link} className="pr-2">
                              {item.icon}
                            </Link>
                          )}
                          {item.name}
                        </Link>
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
        <div className="w-full md:w-auto text-center flex flex-col  pt-8 md:mt-0 md:pt-0 border-t md:border-0">
          {/* <div className=" mt-4 md:mt-0  flex items-center  flex-col"> */}

          <h4 className="uppercase text-lg font-bold tracking-widest">
            Support My Work
          </h4>
          <div className="space-y-2 m  w-full flex items-center md:items-start flex-col">
            {footer.support.buymeacoffee !== "" && (
              <div className="hover:bg">
                <a
                  href={`https://buymeacoffee.com/${footer.support.buymeacoffee}`}
                  target="_blank"
                >
                  <div className="h-12 mx-4   hover:opacity-80 opacity-100 transition-opacity">
                    {buyMeCoffeeSVG()}
                  </div>
                </a>
              </div>
            )}
            {footer.support.paypal !== "" && (
              <div>
                <a
                  href={`https://paypal.me/${footer.support.paypal}`}
                  target="_blank"
                >
                  <div className="h-12  mx-4  hover:opacity-80 opacity-100 transition-opacity flex justify-center">
                    {paypalSVG()}
                  </div>
                </a>
              </div>
            )}
            <p className=" text-xs pt-3 ">{footer.support.message}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
