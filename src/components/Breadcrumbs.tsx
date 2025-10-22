import { NavLink, useLocation } from "react-router-dom";
import { useMemo, useRef, useState, useEffect } from "react";
import { services } from "@/lib/diensten";
import { cn } from "@/lib/utils";

function slugFromHref(href: string) {
  const parts = href.split("/").filter(Boolean);
  return parts[parts.length - 1] || "";
}

const slugToLabel = services.reduce<Record<string, string>>((acc, s) => {
  acc[slugFromHref(s.href)] = s.label;
  return acc;
}, {});

export default function Breadcrumbs() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const parts = location.pathname.split("/").filter(Boolean);
  const hide = parts.length <= 1;

  const crumbs = useMemo(() => {
    const list: Array<{ label: string; href: string }> = [
      { label: "Home", href: "/" },
    ];
    if (parts.length === 0) return list; // at home
    if (parts[0] === "over-ons") {
      list.push({ label: "Over ons", href: "/over-ons" });
      return list;
    }
    if (parts[0] === "contact") {
      list.push({ label: "Contact", href: "/contact" });
      return list;
    }
    if (parts[0] === "diensten") {
      list.push({ label: "Diensten", href: "/diensten" });
      if (parts[1]) {
        const sLabel = slugToLabel[parts[1]] ?? parts[1];
        list.push({ label: sLabel, href: `/diensten/${parts[1]}` });
      }
      return list;
    }
    // Fallback for other paths
    list.push({ label: parts[0], href: `/${parts[0]}` });
    return list;
  }, [parts]);

  // Render
  if (hide) return null;
  return (
    <nav aria-label="Breadcrumb" className="py-2 text-sm italic">
      <ol className="flex items-center gap-1 text-muted-foreground">
        {crumbs.map((c, idx) => {
          const isLast = idx === crumbs.length - 1;
          const isDienstenDropdown =
            isLast && parts[0] === "diensten" && parts[1];
          return (
            <li
              key={`${c.href}-${idx}`}
              className="inline-flex items-center gap-1"
            >
              {idx > 0 && (
                <span className="text-muted-foreground/60 px-1">/</span>
              )}
              {!isLast && (
                <NavLink
                  to={c.href}
                  className="hover:text-foreground hover:underline"
                >
                  {c.label}
                </NavLink>
              )}
              {isLast && !isDienstenDropdown && (
                <span className="text-foreground">{c.label}</span>
              )}
              {isDienstenDropdown && (
                <div className="relative" ref={menuRef}>
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center rounded-sm px-2 py-1 hover:bg-accent hover:text-accent-foreground",
                      open ? "bg-accent text-accent-foreground" : ""
                    )}
                    aria-haspopup="menu"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                  >
                    <span className="text-foreground">{c.label}</span>
                    <svg
                      className={cn(
                        "ml-1 h-3 w-3",
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
                      className="absolute left-0 top-full mt-2 min-w-56 z-50 rounded-md border bg-popover text-popover-foreground shadow-md"
                    >
                      <ul className="p-1 max-h-80 overflow-auto">
                        {services.map((s) => (
                          <li key={s.href}>
                            <NavLink
                              to={s.href}
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
                              {s.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
