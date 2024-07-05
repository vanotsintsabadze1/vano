import Link from "next/link";

interface Props {
  className: string;
}

export default function Navigation({ className }: Props) {
  const nav = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <nav className={className}>
      {nav.map((item, idx) => (
        <Link key={item.name} href={item.href}>
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
