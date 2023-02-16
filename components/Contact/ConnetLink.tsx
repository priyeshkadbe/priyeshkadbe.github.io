import { useState } from 'react';
import Script from 'next/script';
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { SiGooglemeet } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import {CRIPS_WEBSITE_ID,EMAIL} from "../../utils/constants";

import Link from "next/link";
function ConnectLink() {

  const [isChatBotScriptLoaded, setIsChatBotScriptLoaded] = useState(false);

  function handleButtonClick() {
    setIsChatBotScriptLoaded(true);
  }


  return (

    <div
      className="flex mt-10 md:mt-20 items-center flex-col gap-y-10 md:gap-y-24"
      style={{ maxWidth: "1300px" }}
    >
      <span className="text-3xl md:text-5xl px-4 flex-wrap font-bold capitalize mx-auto text-center">
        CONNECT FROM ANYWHERE
      </span>
      <div className="flex flex-col justify-between gap-x-10 gap-y-5 md:flex-row">
        <button
          onClick={handleButtonClick}
          className="flex flex-wrap justify-center flex-col connect-wrapper rounded-md"
        >
          <TfiHeadphoneAlt className="mx-auto h-16 w-16" />
          <h2 className="mx-auto">Chat With Me</h2>
        </button>

        <button
          
          className="flex flex-wrap justify-center  flex-col connect-wrapper rounded-md"
        >
          <SiGooglemeet className="mx-auto h-16 w-16" />
          <h2 className="mx-auto">Book a Meeting</h2>
        </button>

        <Link
          href={`mailto:${EMAIL}`}
          className="flex flex-wrap justify-center  flex-col connect-wrapper rounded-md"
        >
          <HiOutlineMail className="mx-auto h-16 w-16" />
          <h2 className="mx-auto">Send An Email</h2>
        </Link>
      </div>
      
    </div>
  );
}

export default ConnectLink;
