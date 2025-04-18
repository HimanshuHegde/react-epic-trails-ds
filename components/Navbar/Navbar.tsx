import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { MenuSharp } from "../icons";
import { Drawer } from "../drawer";
import { Collapse } from "../Collapse";

type NavbarProps = {
  id?: string;
  openTitle?: string;
  hideOnScroll?: boolean;
  bottomStyle?: "shadow" | "border" | "none";
  transparentBgAtTop?: boolean;
  logo?: React.ReactNode;
  links?: { label: string; href: string }[];
  actions?: React.ReactNode;
};

export const Navbar: React.FC<NavbarProps> = ({
  id,
  openTitle,
  hideOnScroll = false,
  bottomStyle = "shadow",
  transparentBgAtTop = false,
  logo,
  links = [],
  actions,
}) => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 0);

      if (hideOnScroll) {
        setHidden(current > lastScroll && current > 50);
        lastScroll = current;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hideOnScroll]);

  const bottomClass = {
    shadow: "shadow-md",
    border: "border-b border-gray-800",
    none: "",
  }[bottomStyle];

  return (
    <>
      <nav
        id={id}
        className={clsx(
          "w-full fixed top-0 z-50 transition-all duration-300",
          hidden && "transform -translate-y-full",
          transparentBgAtTop && !scrolled ? "bg-transparent" : "bg-black",
          bottomClass
        )}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between text-white">
          {/* Logo or openTitle */}
          <div className="text-lg font-semibold flex items-center gap-2">
            {logo ? logo : <span>{openTitle}</span>}
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-6 text-sm">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-gray-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions (e.g. buttons, profile, etc.) */}
          <div className="flex gap-4">
            <div className="flex items-center gap-4">{actions}</div>
            <button
              className="flex items-center md:hidden"
              onClick={() => setIsOpen(true)}
            >
              <MenuSharp size="2rem" />
            </button>
          </div>
        </div>
      </nav>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position="right"
        size="md"
        title="Settings"
        overlayClassName="md:hidden bg-black/60"
        className="bg-black text-white"
      >
        <div className="flex flex-col gap-6 text-sm pl-4 py-4 bg-black">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 py-2"
            >
              {link.label}
            </a>
          ))}
          
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
