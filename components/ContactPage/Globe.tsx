import { useEffect } from "react";

const Globe = () => {
  useEffect(() => {
    const script2 = document.createElement("script");
    script2.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/87/three.js";
    document.head.appendChild(script2);

    const script3 = document.createElement("script");
    script3.src =
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/617753/ThreeOrbitControls.js";
    document.head.appendChild(script3);

    const script4 = document.createElement("script");
    script4.src =
      "https://rawgit.com/spite/THREE.MeshLine/master/src/THREE.MeshLine.js";
    document.head.appendChild(script4);

    const script = document.createElement("script");
    script.src = "./scripts/globe.js";
    document.head.appendChild(script);

    return () => {
      // clean up the script when the component in unmounted
      document.head.removeChild(script2);
      document.head.removeChild(script3);
      document.head.removeChild(script4);
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="absolute  z-0 ">
      <div className="globe js-globe">
        <div className="svg-wrapper"></div>
        <ul className="globe-list js-list"></ul>
        <canvas className="globe-canvas js-canvas"></canvas>
      </div>
    </div>
  );
};

export default Globe;
