import { TfiHeadphoneAlt } from "react-icons/tfi";
import { SiGooglemeet } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
function ConnectLink() {
  return (
    <div
      className="flex mt-20 items-center flex-col gap-y-10 md:gap-y-24"
      style={{ maxWidth: "1300px" }}
    >
      <span className="text-3xl md:text-5xl font-bold capitalize mx-auto text-center">
        CONNECT FROM ANYWHERE
      </span>
      <div className="flex flex-col justify-between gap-x-10 gap-y-5 md:flex-row">
        <Link
          href="/"
          className="flex flex-wrap justify-center flex-col connect-wrapper rounded-md"
        >
          <TfiHeadphoneAlt    className="mx-auto h-16 w-16"/>
          <h2 className="mx-auto">Chat With Me</h2>
        </Link>

        <Link
          href="/"
          className="flex flex-wrap justify-center  flex-col connect-wrapper rounded-md"
        >
          <SiGooglemeet   className="mx-auto h-16 w-16"/>
          <h2 className="mx-auto">Book a Meeting</h2>
        </Link>

        <Link
          href="/"
          className="flex flex-wrap justify-center  flex-col connect-wrapper rounded-md"
        >
          <HiOutlineMail    className="mx-auto h-16 w-16"/>
          <h2 className="mx-auto">Send An Email</h2>
        </Link>
      </div>
    </div>
  );
}

export default ConnectLink;
