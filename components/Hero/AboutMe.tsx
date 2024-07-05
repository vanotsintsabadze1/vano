import React from "react";
import Extra from "./Extra";

export default function AboutMe() {
  return (
    <section className="w-full flex flex-col items-center mt-[3rem]">
      <div className="flex flex-col gap-[1rem] w-full sm:w-[40rem] md:w-[60rem]">
        <h4 className="font-bold text-white text-[2rem]">hear me out..</h4>
        <p className="text-white font-light  text-[1.3rem] md:text-[1.4rem]">
          i'm 19 and i live in Georgia, Batumi.
          <br /> <br /> i'm a web developer and i work with React.js / Next.js, Typescript & Node.js.
          <br /> <br /> if you somewhat expected fancy animations & useless sections on this website, spoiler, you were
          wrong.
          <br /> <br /> i love minimalistic designs and i hate when people try to hide their crappy skills and make good
          dev impressions with fancy animations.
          <br /> <br /> keep it simple. <br /> <br />
          <span className="font-bold text-[1.4rem] tracking-wider">USE IT WHEN REQUIRED</span> is my motto.
          <br /> <br /> (no it's not, i'm just trying to sound cool, i don't have a motto, i'm 19, i'm not that cool
          yet.)
        </p>
      </div>
      <Extra />
    </section>
  );
}
