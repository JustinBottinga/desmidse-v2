import { Link } from "react-router-dom";
import { services } from "@/lib/diensten";
import { isExternalLink, site } from "@/lib/site";
import contact from "@/content/pages/contact.json";

export default function Footer() {
  const { footer } = site;
  const showServices = footer.toonDiensten !== false;

  return (
    <footer className="bg-gray-900 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          className={
            showServices
              ? "grid grid-cols-1 md:grid-cols-3 gap-8"
              : "grid grid-cols-1 md:grid-cols-2 gap-8"
          }
        >
          {/* Contact Information */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                {contact.adres.kop}
              </h3>
              <p>{contact.adres.bedrijfsnaam}</p>
              <p>{contact.adres.straat}</p>
              <p>
                {contact.adres.postcode} {contact.adres.plaats}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{contact.titel}</h3>
              <p>
                <span className="text-gray-400">e-mail: </span>
                <a
                  href={`mailto:${contact.gegevens.email}`}
                  className="hover:text-blue-400"
                >
                  {contact.gegevens.email}
                </a>
              </p>
              <p>
                <span className="text-gray-400">telefoon: </span>
                <a
                  href={`tel:${contact.gegevens.telefoonNummer}`}
                  className="hover:text-blue-400"
                >
                  {contact.gegevens.telefoon}
                </a>
              </p>
              <p>
                <span className="text-gray-400">KvK: </span>
                {contact.gegevens.kvk}
              </p>
            </div>
          </div>

          {/* Services */}
          {showServices && (
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {footer.dienstenKop}
              </h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      to={service.href}
                      className="hover:text-blue-400 transition-colors"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h3 className="text-lg font-semibold mb-4">{footer.paginaKop}</h3>
            <ul className="space-y-2">
              {footer.paginaLinks.map((item) => (
                <li key={`${item.label}-${item.link}`}>
                  {isExternalLink(item.link) ? (
                    <a
                      href={item.link}
                      className="hover:text-blue-400 transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.link}
                      className="hover:text-blue-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {footer.onderregel ? (
          <p className="mt-8 border-t border-gray-700 pt-6 text-sm text-gray-400">
            {footer.onderregel}
          </p>
        ) : null}
      </div>
    </footer>
  );
}
