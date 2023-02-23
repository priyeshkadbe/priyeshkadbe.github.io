import { useState } from "react";
import Globe from "./Globe";
import ConnectLink from "./ConnetLink";
import Calendly from "./Calendly";

function ContactPage() {
  const [viewCalendly, setViewCalendly] = useState(false);

  return (
    <div
      className="relative flex  justify-center  h-screen mx-auto"
      style={{ maxWidth: "1200px", minHeight: "110vh" }}
    >
      <Globe />
      {viewCalendly ? (
        <Calendly
          viewCalendly={viewCalendly}
          setViewCalendly={setViewCalendly}
        />
      ) : (
        <>
          <ConnectLink
            viewCalendly={viewCalendly}
            setViewCalendly={setViewCalendly}
          />
        </>
      )}
    </div>
  );
}

export default ContactPage;
