import { useState } from "react";
import Script from "next/script";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { SiGooglemeet } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { EMAIL } from "../../utils/constants";
import { useChatVisibleState } from "../../providers/ChatVisible.provider";

interface props {
  viewCalendly: boolean;
  setViewCalendly: (value: boolean) => void;
}

function Connectbutton({ viewCalendly, setViewCalendly }: props) {
  const { setIsChatVisible } = useChatVisibleState();

  const handleClick = () => {
    window.location.href = `mailto:${EMAIL}`;
  };

  return (
    <div
      className="flex  md:mt-10 items-center flex-col gap-y-10 md:gap-y-24"
      style={{ maxWidth: "1300px" }}
    >
      <span className="text-3xl tracking-wider md:text-5xl px-4 flex-wrap font-bold capitalize mx-auto text-center">
        CONNECT FROM ANYWHERE
      </span>

      <div className="flex flex-col md:mt-20 justify-between gap-x-10 gap-y-5 md:flex-row">
        <button
          className="flex flex-wrap justify-center flex-col connect-wrapper rounded-md"
          onClick={() => {
            setIsChatVisible(true);
          }}
        >
          <TfiHeadphoneAlt className="mx-auto h-16 w-16" />
          <h2 className="mx-auto">Chat With Me</h2>
        </button>

        <button
          onClick={() => setViewCalendly(true)}
          className="flex flex-wrap justify-center  flex-col connect-wrapper rounded-md"
        >
          <SiGooglemeet className="mx-auto h-16 w-16 " />
          <h2 className="mx-auto">Book a Meeting</h2>
        </button>

        <button
          type="button"
          onClick={handleClick}
          className="flex flex-wrap justify-center  flex-col connect-wrapper rounded-md"
        >
          <HiOutlineMail className="mx-auto h-16 w-16" />
          <h2 className="mx-auto">Send An Email</h2>
        </button>
      </div>
    </div>
  );
}

export default Connectbutton;
