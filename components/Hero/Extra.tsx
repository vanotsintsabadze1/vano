"use client";

import { TreePalmIcon } from "lucide-react";

export default function Extra() {
  return (
    <div className="flex w-full p-[2rem] items-center flex-col gap-[2rem] lg:mt-[5rem]">
      <p className="text-[1.3rem] text-white">to touch down, just check my linktree.</p>
      <button className="animate-bounce" onClick={() => window.open("https://linktr.ee/vanotsintsabadze", "_blank")}>
        <TreePalmIcon size={25} color="white" />
      </button>
    </div>
  );
}
