import ContactFields from "./ContactFields";

export default function ContactCard() {
  return (
    <div className="xs:w-full sm:w-[40rem] flex flex-col gap-[1.5rem] items-center">
      <h1 className="text-[3rem] font-bold text-white">Contact Me</h1>
      <ContactFields />
    </div>
  );
}
