import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { services } from "@/lib/diensten";

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
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const dienstenActive = pathname.startsWith("/diensten");

  return (
    <nav className="border-b relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-semibold tracking-tight text-foreground">
            <img
              src="/media/logo.png"
              alt="Desmidse logo"
              className="h-8 w-auto mr-3 object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/over-ons"
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )
              }
            >
              Over ons
            </NavLink>

            {/* Onze diensten dropdown (custom, no Radix) */}
            <div className="relative" ref={menuRef}>
              <button
                type="button"
                className={cn(
                  "inline-flex items-center text-sm font-medium transition-colors",
                  dienstenActive || open
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-haspopup="menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                Onze diensten
                <svg
                  className={cn(
                    "ml-2 h-3 w-3 transition-transform",
                    open ? "rotate-180" : "rotate-0"
                  )}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {open && (
                <div
                  role="menu"
                  className="absolute left-0 top-full mt-2 w-[320px] z-50 rounded-md border bg-popover text-popover-foreground shadow-md"
                >
                  <ul className="p-1">
                    {services.map((service) => (
                      <li key={service.href}>
                        <NavLink
                          to={service.href}
                          className={({ isActive }) =>
                            cn(
                              "block rounded-sm px-3 py-2 text-sm transition-colors",
                              isActive
                                ? "bg-accent text-accent-foreground"
                                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                            )
                          }
                          onClick={() => setOpen(false)}
                        >
                          {service.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )
              }
            >
              Contact
            </NavLink>
          </div>
          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 space-y-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                cn(
                  "block rounded-sm px-2 py-2 text-sm",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )
              }
              onClick={() => setMobileOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/over-ons"
              className={({ isActive }) =>
                cn(
                  "block rounded-sm px-2 py-2 text-sm",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )
              }
              onClick={() => setMobileOpen(false)}
            >
              Over ons
            </NavLink>
            <div>
              <div className="px-2 py-2 text-sm font-medium text-muted-foreground">
                Onze diensten
              </div>
              <ul className="pl-2">
                {services.map((service) => (
                  <li key={service.href}>
                    <NavLink
                      to={service.href}
                      className={({ isActive }) =>
                        cn(
                          "block rounded-sm px-2 py-2 text-sm",
                          isActive
                            ? "text-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        )
                      }
                      onClick={() => setMobileOpen(false)}
                    >
                      {service.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                cn(
                  "block rounded-sm px-2 py-2 text-sm",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )
              }
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
