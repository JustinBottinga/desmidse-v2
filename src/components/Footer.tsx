import { Link } from "react-router-dom";
import { services } from "@/lib/diensten";
import { isExternalLink, site } from "@/lib/site";
import contact from "@/content/pages/contact.json";

const headingClass =
  "mb-3 font-mono text-xs font-medium uppercase tracking-[0.14em] text-[#FF9A6B]";
const linkClass =
  "inline-flex min-h-11 items-center transition-colors hover:text-white hover:underline md:min-h-0";

export default function Footer() {
  const { footer } = site;
  const columns = 2 + (footer.toonDiensten === false ? 0 : 1);

  return (
    <footer className="relative z-10 bg-foreground text-ink-text">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div
          className={
            columns === 3
              ? "grid grid-cols-1 gap-8 md:grid-cols-3"
              : "grid grid-cols-1 gap-8 md:grid-cols-2"
          }
        >
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className={headingClass}>{contact.adres.kop}</h3>
              <p>{contact.adres.bedrijfsnaam}</p>
              <p>{contact.adres.straat}</p>
              <p>
                {contact.adres.postcode} {contact.adres.plaats}
              </p>
            </div>
            <div>
              <h3 className={headingClass}>{contact.titel}</h3>
              <p>
                <span className="text-ink-text/70">e-mail: </span>
                <a
                  href={`mailto:${contact.gegevens.email}`}
                  className="break-all hover:text-white hover:underline"
                >
                  {contact.gegevens.email}
                </a>
              </p>
              <p>
                <span className="text-ink-text/70">telefoon: </span>
                <a
                  href={`tel:${contact.gegevens.telefoonNummer}`}
                  className="hover:text-white hover:underline"
                >
                  {contact.gegevens.telefoon}
                </a>
              </p>
              <p>
                <span className="text-ink-text/70">KvK: </span>
                {contact.gegevens.kvk}
              </p>
            </div>
          </div>

          {/* Services */}
          {footer.toonDiensten === false ? null : (
            <div>
              <h3 className={headingClass}>{footer.dienstenKop}</h3>
              <ul className="space-y-1 md:space-y-2">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link to={service.href} className={linkClass}>
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h3 className={headingClass}>{footer.paginaKop}</h3>
            <ul className="space-y-1 md:space-y-2">
              {footer.paginaLinks.map((item) => (
                <li key={`${item.label}-${item.link}`}>
                  {isExternalLink(item.link) ? (
                    <a href={item.link} className={linkClass}>
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.link} className={linkClass}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {footer.onderregel ? (
          <p className="mt-10 border-t border-ink-line pt-6 text-sm text-ink-text/70">
            {footer.onderregel}
          </p>
        ) : null}
      </div>
    </footer>
  );
}
