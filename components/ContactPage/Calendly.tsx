import { RxCrossCircled } from "react-icons/rx";
import { CALENDLY_URL } from "../../utils/constants";

interface Props {
  viewCalendly: boolean;
  setViewCalendly: (value: boolean) => void;
}

const Calendly = ({ viewCalendly, setViewCalendly }: Props) => {
  return (
    <div className="flex h-full">
      <div className="flex px-2 w-[360px] h-[700px] md:h-[100vh] md:w-[620px] my-4">
        <div
          onClick={() => setViewCalendly(false)}
          className="absolute left-70 cursor-pointer"
        >
          <RxCrossCircled size={26} className="text-red-500" />
        </div>
        <iframe
          width="100%"
          height="100%"
          title={"Schedule a Meet"}
          src={CALENDLY_URL}
        ></iframe>
      </div>
    </div>
  );
};

export default Calendly;
