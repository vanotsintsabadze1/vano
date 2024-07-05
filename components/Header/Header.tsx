import Image from "next/image";
import Burger from "./Burger";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="w-full px-[1rem] bg-primary sticky">
      <div className="w-full relative flex items-center md:justify-between justify-center">
        <div className="px-[2rem] py-[1.8rem]">
          <div className="w-[3rem] h-[3rem] relative">
            <Image src="/images/logos/logo_sm.webp" fill alt="header_logo" className="invert grayscale" />
          </div>
        </div>
        <Burger />
        <div className="hidden md:flex px-[3rem] items-center justify-center">
          <Navigation className="text-white font-bold text-[1.3rem] uppercase flex items-center justify-center gap-[3rem]" />
        </div>
      </div>
    </header>
  );
}
