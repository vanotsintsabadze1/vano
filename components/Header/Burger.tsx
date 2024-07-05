"use client";
import { useState, useEffect } from "react";
import { MenuIcon } from "lucide-react";
import Sidebar from "./Sidebar";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Burger() {
  const [isSideBarOpen, setSideBar] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isSideBarOpen) {
      setSideBar(false);
    }
  }, [pathname]);

  return (
    <div className="absolute right-[1rem] top-1/2 -translate-y-1/2 md:hidden">
      <button onClick={() => setSideBar(!isSideBarOpen)}>
        <MenuIcon size={30} color="white" />
      </button>
      <AnimatePresence>{isSideBarOpen && <Sidebar setModal={setSideBar} />}</AnimatePresence>
    </div>
  );
}
