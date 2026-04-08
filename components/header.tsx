"use client";

import { useState } from "react";

const navItems = [
  { href: "#tarjouspyynto", label: "Jätä tarjouspyyntö" },
  { href: "#ennen-jalkeen", label: "Ennen & jälkeen" },
  { href: "#yhteystiedot", label: "Yhteystiedot" },
  { href: "#etusivu", label: "Etusivu" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          <a className="brand" href="#etusivu">
            AP Powerbuilding &amp; Demolition Tmi
          </a>

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
                  <a href={item.href}>{item.label}</a>
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
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
