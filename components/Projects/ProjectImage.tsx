"use client";
import Image from "next/image";
import { toast } from "react-hot-toast";

interface Props {
  image: string;
  title: string;
  url: string;
}

export default function ProjectImage({ image, title, url }: Props) {
  function onImageClickRedirect() {
    if (url === "") {
      toast.error("This project is currently being rebuilt.");
      return;
    } else {
      window.open(url, "_blank");
    }
  }

  return (
    <div className="xs:w-[28rem] xs:h-[16rem] sm:w-[32rem] sm:h-[20rem] relative" onClick={onImageClickRedirect}>
      <Image
        src={image}
        alt={title}
        fill
        className="rounded-[1rem] shadow-md hover:scale-105 cursor-pointer duration-200 ease-in-out"
      />
    </div>
  );
}
