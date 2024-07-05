"use client";

import { useEffect, useState } from "react";
import ReadMoreModal from "./ReadMoreModal";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";

export default function ProjectReadMore({ title, description, stack, url, isFinished }: ReadMoreDetails) {
  const [isReadMoreOpen, setReadMore] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isReadMoreOpen) {
      setReadMore(false);
    }
  }, [pathname]);

  return (
    <>
      <AnimatePresence>
        {isReadMoreOpen && (
          <ReadMoreModal
            title={title}
            description={description}
            stack={stack}
            url={url}
            isFinished={isFinished}
            setModal={setReadMore}
          />
        )}
      </AnimatePresence>
      <button
        className="font-bold text-[1.5rem] hover:mb-[.5rem] duration-200 ease-in-out"
        onClick={() => setReadMore(true)}
      >
        Read More
      </button>
    </>
  );
}
