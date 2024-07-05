import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import Navigation from "./Navigation";
import { ArrowRightSquareIcon } from "lucide-react";

const sidebarAnimation = {
  hidden: {
    x: 400,
  },
  visible: {
    x: 0,
  },
};

interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ setModal }: Props) {
  return createPortal(
    <motion.div
      variants={sidebarAnimation}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-screen h-screen flex flex-col gap-[3rem] items-center justify-center fixed md:hidden bg-[rgba(0,0,0,0.8)] top-0 right-0"
    >
      <Navigation className="flex flex-col items-center justify-center gap-[3rem] text-white text-[1.8rem] font-light" />
      <button onClick={() => setModal(false)}>
        <ArrowRightSquareIcon size={30} color="white" className=" brightness-75" />
      </button>
    </motion.div>,
    document.body
  );
}
