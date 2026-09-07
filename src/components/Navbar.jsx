import React, { useState, useEffect } from "react";

const links = [
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Experience",href:"#experience"},
  { label: "Education",href: "#education" },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]   = useState("");
  const [open, setOpen]       = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (href) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: (scrolled || open) ? "rgba(13,27,42,0.92)" : "transparent",
      backdropFilter: (scrolled || open) ? "blur(14px)" : "none",
      borderBottom: (scrolled || open) ? "1px solid rgba(201,168,76,0.15)" : "none",
      transition: "all 0.4s ease",
      padding: "0 2.5rem",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      height: "64px",
    }}>
      <span style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "1.25rem",
        fontWeight: 700,
        color: "var(--accent)",
        letterSpacing: "0.04em",
      }}>HK</span>

      <ul className={`nav-links${open ? " open" : ""}`}>
        {links.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              onClick={() => handleLinkClick(l.href)}
              style={{
                color: active === l.href ? "var(--accent)" : "var(--text-muted)",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transition: "color 0.25s",
                paddingBottom: "2px",
                borderBottom: active === l.href ? "1px solid var(--accent)" : "1px solid transparent",
              }}
              onMouseEnter={e => e.target.style.color = "var(--text-primary)"}
              onMouseLeave={e => e.target.style.color = active === l.href ? "var(--accent)" : "var(--text-muted)"}
            >{l.label}</a>
          </li>
        ))}
      </ul>

      <button
        className={`nav-toggle${open ? " open" : ""}`}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
