import Globe from "./Globe";
import ConnectLink from "./ConnetLink"

function Hero() {
  return (
    <div
      className=" flex  justify-center w-screen h-screen mx-auto"
      style={{ maxWidth: "1300px" }}
    >
      <Globe />
      <ConnectLink />
    </div>
  );
}

export default Hero;
