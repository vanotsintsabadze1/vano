"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(5, "Name must be at least 5 characters").max(30, "Name must be at most 30 characters"),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(30, "Subject must be at most 30 characters"),
  message: z
    .string()
    .min(5, "Message must be at least 5 characters")
    .max(300, "Message must be at most 300 characters"),
});

export default function ContactFields() {
  const [fields, setFields] = useState({
    name: "",
    subject: "",
    message: "",
  });

  function onSend() {
    const parsedSchema = schema.safeParse(fields);

    if (!parsedSchema.success) {
      toast.error(parsedSchema.error.errors[0].message);
      return;
    }

    window.location.href =
      "mailto:tsintsabadzevano@gmail.com?subject=" + fields.subject + "&body=" + fields.message + " - " + fields.name;

    setFields({ name: "", subject: "", message: "" });
  }

  return (
    <div className="w-full flex flex-col items-center gap-[2rem]">
      <input
        type="text"
        value={fields.name}
        onChange={(e) => setFields((prev) => ({ ...prev, name: e.target.value }))}
        placeholder="Name"
        className="w-[80%] px-[1.2rem] py-[1rem] border-b-2 border-b-indigo-800 text-white placeholder:text-gray-500 text-[1.5rem] bg-transparent"
      />
      <input
        type="text"
        value={fields.subject}
        onChange={(e) => setFields((prev) => ({ ...prev, subject: e.target.value }))}
        placeholder="Subject"
        className="w-[80%] px-[1.2rem] py-[1rem] border-b-2 border-b-indigo-800 text-white placeholder:text-gray-500 text-[1.5rem] bg-transparent"
      />
      <textarea
        value={fields.message}
        onChange={(e) => setFields((prev) => ({ ...prev, message: e.target.value }))}
        placeholder="Description"
        className="w-[80%] resize-none px-[1.2rem] py-[1rem] border-b-2 border-b-indigo-800 text-white placeholder:text-gray-500 text-[1.5rem] bg-transparent"
      />
      <button
        onClick={onSend}
        className="w-[14rem] mt-[2rem] h-[3.5rem] rounded-lg shadow-md bg-indigo-800 text-white font-bold text-[1.3rem] uppercase tracking-wider duration-200 ease-in-out hover:scale-105"
      >
        Send
      </button>
    </div>
  );
}
