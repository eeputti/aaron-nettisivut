"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Etusivu" },
  { href: "/tarjouspyynto", label: "Jätä tarjouspyyntö" },
  { href: "/ennen-jalkeen", label: "Ennen & jälkeen" },
  { href: "/yhteystiedot", label: "Yhteystiedot" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          <Link className="brand" href="/">
            AP Powerbuilding &amp; Demolition Tmi
          </Link>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            Valikko
          </button>

          <nav className="desktop-nav" aria-label="Päänavigaatio">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={pathname === item.href ? "active" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <nav
          id="mobile-navigation"
          className={open ? "nav open" : "nav"}
          aria-label="Mobiilinavigaatio"
        >
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={pathname === item.href ? "active" : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
