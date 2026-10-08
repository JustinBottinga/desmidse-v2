import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { services } from "@/lib/diensten";
import { isExternalLink, site, type NavItem } from "@/lib/site";
import contact from "@/content/pages/contact.json";

const desktopLink = ({ isActive }: { isActive: boolean }) =>
  cn(
    "inline-flex min-h-11 items-center text-base font-semibold transition-colors",
    isActive
      ? "text-foreground underline decoration-primary decoration-[3px] underline-offset-8"
      : "text-muted-foreground hover:text-foreground",
  );

const mobileLink = ({ isActive }: { isActive: boolean }) =>
  cn(
    "flex min-h-11 items-center rounded-lg px-3 text-base font-semibold",
    isActive
      ? "bg-accent text-foreground"
      : "text-muted-foreground hover:bg-accent hover:text-foreground",
  );

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false); // desktop services dropdown
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const items = site.navigatie.items;
  const logoStyle = site.navigatie.logoStijl ?? "klein-tekst";
  const logoSmall = site.navigatie.logoKlein || "/media/logo.png";
  const logoText = site.navigatie.logoTekst || site.metadata.siteNaam;
  const showCall = site.navigatie.belKnopTonen !== false;
  const closeAll = () => {
    setOpen(false);
    setMobileOpen(false);
  };

  function renderLink(
    item: NavItem,
    className: ({ isActive }: { isActive: boolean }) => string,
  ) {
    if (isExternalLink(item.link)) {
      return (
        <a
          href={item.link}
          className={className({ isActive: false })}
          onClick={closeAll}
        >
          {item.label}
        </a>
      );
    }
    return (
      <NavLink
        to={item.link}
        end={item.link === "/" || item.dropdown}
        className={className}
        onClick={closeAll}
      >
        {item.label}
      </NavLink>
    );
  }

  return (
    <header className="relative z-50 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-16 items-center justify-between gap-4 py-2">
          <Link
            to="/"
            className="flex min-h-11 items-center gap-3"
            onClick={closeAll}
          >
            {logoStyle === "groot" ? (
              <img
                src={site.navigatie.logoGroot || logoSmall}
                alt={logoText}
                className="h-12 w-auto max-w-[60vw] object-contain mix-blend-multiply md:h-14"
              />
            ) : (
              <>
                <img
                  src={logoSmall}
                  alt={logoStyle === "klein" ? logoText : ""}
                  className="h-8 w-auto object-contain mix-blend-multiply"
                />
                {logoStyle === "klein-tekst" ? (
                  <span className="font-display text-lg font-bold tracking-tight text-foreground">
                    {logoText}
                  </span>
                ) : null}
              </>
            )}
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Hoofdmenu"
            className="hidden items-center gap-6 md:flex"
          >
            {items.map((item) => {
              if (!item.dropdown) {
                return <div key={item.label}>{renderLink(item, desktopLink)}</div>;
              }
              const active =
                !!item.link && pathname.startsWith(item.link) && item.link !== "/";
              return (
                <div className="relative" ref={menuRef} key={item.label}>
                  <button
                    type="button"
                    className={cn(
                      "inline-flex min-h-11 items-center text-base font-semibold transition-colors",
                      active || open
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                      active &&
                        "underline decoration-primary decoration-[3px] underline-offset-8",
                    )}
                    aria-haspopup="menu"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                  >
                    {item.label}
                    <ChevronDown
                      aria-hidden="true"
                      className={cn(
                        "ml-1.5 h-4 w-4 transition-transform",
                        open ? "rotate-180" : "rotate-0",
                      )}
                    />
                  </button>
                  {open && (
                    <div
                      role="menu"
                      className="absolute left-0 top-full z-50 mt-2 w-[320px] rounded-xl border border-border bg-popover text-popover-foreground shadow-sm"
                    >
                      <ul className="p-1">
                        {item.link ? (
                          <li>
                            <NavLink
                              to={item.link}
                              end
                              className={({ isActive }) =>
                                cn(
                                  "flex min-h-11 items-center rounded-lg px-3 text-base transition-colors",
                                  isActive
                                    ? "bg-accent font-semibold text-accent-foreground"
                                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                                )
                              }
                              onClick={closeAll}
                            >
                              Alle diensten
                            </NavLink>
                          </li>
                        ) : null}
                        {services.map((service) => (
                          <li key={service.href}>
                            <NavLink
                              to={service.href}
                              className={({ isActive }) =>
                                cn(
                                  "flex min-h-11 items-center rounded-lg px-3 text-base transition-colors",
                                  isActive
                                    ? "bg-accent font-semibold text-accent-foreground"
                                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                                )
                              }
                              onClick={closeAll}
                            >
                              {service.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
            {showCall ? (
              <Button asChild>
                <a href={`tel:${contact.gegevens.telefoonNummer}`}>
                  <Phone aria-hidden="true" className="mr-2 h-4 w-4" />
                  {contact.gegevens.telefoon}
                </a>
              </Button>
            ) : null}
          </nav>

          {/* Mobile: bel- en menuknop */}
          <div className="flex items-center gap-1 md:hidden">
            {showCall ? (
              <Button asChild size="icon">
                <a
                  href={`tel:${contact.gegevens.telefoonNummer}`}
                  aria-label={`Bel ${contact.gegevens.telefoon}`}
                >
                  <Phone aria-hidden="true" className="h-5 w-5" />
                </a>
              </Button>
            ) : null}
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-foreground hover:bg-accent"
              aria-label={mobileOpen ? "Sluit menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobiel-menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <X aria-hidden="true" className="h-6 w-6" />
              ) : (
                <Menu aria-hidden="true" className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <nav
          id="mobiel-menu"
          aria-label="Mobiel menu"
          className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-border md:hidden"
        >
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-3 sm:px-6 lg:px-8">
            {items.map((item) => {
              if (!item.dropdown) {
                return <div key={item.label}>{renderLink(item, mobileLink)}</div>;
              }
              return (
                <div key={item.label}>
                  {item.link ? (
                    renderLink(item, mobileLink)
                  ) : (
                    <div className="flex min-h-11 items-center px-3 text-base font-semibold text-foreground">
                      {item.label}
                    </div>
                  )}
                  <ul className="ml-3 border-l-2 border-border pl-2">
                    {services.map((service) => (
                      <li key={service.href}>
                        <NavLink
                          to={service.href}
                          className={mobileLink}
                          onClick={closeAll}
                        >
                          {service.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
