"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavbarItemProps = {
  text: string;
  href: string;
  needLateralNavbar: boolean;
  isDroppedDown: boolean;
};

export default function NavbarItem(props: NavbarItemProps) {
  const pathname = usePathname();
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (pathname.startsWith(props.href)) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [props.href, pathname]);

  return (
    <li
      className={`text-black lg:pt-4 text-lg text-center border-2 lg:border-0 border-slate-300 border-x-transparent border-b-transparent w-100 animated-bottom-border ${
        isSelected ? "underline underline-offset-8" : ""
      }`}
      aria-hidden={
        props.needLateralNavbar && !props.isDroppedDown ? "true" : "false"
      }
    >
      <Link
        prefetch={true}
        className="block px-6 py-4 lg:p-0  "
        href={props.href}
        tabIndex={props.needLateralNavbar && !props.isDroppedDown ? -1 : 0}
      >
        {props.text}
      </Link>
    </li>
  );
}
