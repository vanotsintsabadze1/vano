import AboutMe from "./AboutMe";

export default function Main() {
  return (
    <div className="w-full py-[3rem] mt-[3rem] px-[2rem] flex items-center flex-col gap-[2rem]">
      <h4 className="font-bold uppercase text-primary text-[6rem] leading-[5rem] md:leading-[12rem] tracking-widest md:text-[12rem]">
        VANO
      </h4>
      <p className="text-white font-medium text-[1.4rem] text-center mt-[1rem] leading-[2.5rem] max-w-[45rem]">
        web developer, comp sci. student @ BSU, music & workout addict.
      </p>
      <AboutMe />
    </div>
  );
}
