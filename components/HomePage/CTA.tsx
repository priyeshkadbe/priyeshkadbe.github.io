import Link from "next/link";
import React from "react";

function CTA() {
  return (
    <div className="mx-auto max-w-4xl flex flex-col md:flex-col justify-center my-20">
      <span className="font-bold text-4xl mx-auto text-center my-6 tracking-widest">
        INTERESTED IN WORKING TOGETHER
      </span>
      <Link href="/contact">
        <div className="mt-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
          Get In Touch
        </div>
      </Link>
    </div>
  );
}

export default CTA;
