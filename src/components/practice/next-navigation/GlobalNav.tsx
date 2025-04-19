"use client";

import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { label: "Home", path: "/home" },
  { label: "About", path: "/about" },
];

export const GlobalNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav>
      {navItems.map((item) => (
        <button
          key={item.path}
          aria-current={pathname === item.path ? "page" : undefined}
          onClick={() => router.push(item.path)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};
