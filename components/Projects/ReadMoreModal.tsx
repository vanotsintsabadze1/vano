import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, HammerIcon, Link as LinkIcon } from "lucide-react";

interface Details extends ReadMoreDetails {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const modalAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default function ReadMoreModal({ setModal, title, description, stack, url, isFinished }: Details) {
  return createPortal(
    <motion.div
      variants={modalAnimation}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="w-full h-screen fixed px-[1rem] top-0 right-0 bg-[rgba(0,0,0,0.8)] flex justify-center items-center"
    >
      <div className="xs:w-full sm:w-[40rem] p-[2rem] bg-white rounded-[1rem] shadow-md flex flex-col gap-[2rem]">
        <div className="w-full flex flex-col gap-[.5rem]">
          <h2 className="text-gray-400 font-bold uppercase text-[1.2rem]">Title:</h2>
          <p className="font-medium text-[1.3rem]">{title}</p>
        </div>
        <div className="w-full flex flex-col gap-[.5rem]">
          <h2 className="text-gray-400 font-bold uppercase text-[1.2rem]">Description:</h2>
          <p className="font-medium text-[1.3rem]">{description}</p>
        </div>
        <div className="w-full flex flex-col gap-[1rem]">
          <h2 className="text-gray-400 font-bold uppercase text-[1.2rem]">Stack:</h2>
          <div className="w-full flex flex-wrap gap-x-[2rem] gap-y-[1rem]">
            {stack.map((stack, idx) => (
              <div
                key={idx}
                className="px-[2rem] h-[2.5rem] flex items-center justify-center bg-black rounded-md text-[1.3rem] font-semibold text-white"
              >
                {stack}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-[.5rem]">
          <h2 className="text-gray-400 font-bold uppercase text-[1.2rem]">Live Version:</h2>
          <div className="font-medium text-[1.3rem]">
            {url === "" ? (
              "Not deployed"
            ) : (
              <div className="flex items-center gap-[1rem]">
                <Link href={url} target="blank" className="text-blue-600 text-[1.4rem]">
                  Go to the link
                </Link>
                <LinkIcon className="text-blue-600" size={15} />
              </div>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col gap-[.5rem]">
          <h2 className="text-gray-400 font-bold uppercase text-[1.2rem]">Status:</h2>
          <div
            className={`font-medium ${
              isFinished ? "text-green-600" : "text-yellow-600"
            } drop-shadow-xl text-[1.4rem] uppercase flex items-center gap-[1rem]`}
          >
            <p>{isFinished ? "Finished" : "Building"}</p>
            {isFinished ? <Check size={20} color="green" /> : <HammerIcon size={20} color="orange" />}
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <button
            onClick={() => setModal(false)}
            className="w-[12rem] h-[3.2rem] rounded-md bg-black text-white font-bold shadow-sm text-[1.3rem]"
          >
            Close
          </button>
        </div>
      </div>
    </motion.div>,
    document.body
  );
}
