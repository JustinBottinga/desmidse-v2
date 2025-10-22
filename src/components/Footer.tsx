import { Link } from "react-router-dom";
import { services } from "@/lib/diensten";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Adres</h3>
              <p>De Smidse BTA</p>
              <p>Smidsstraat 30</p>
              <p>7686 BL Daarlerveen</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <p>
                <span className="text-gray-400">e-mail: </span>
                <a
                  href="mailto:info@desmidsebta.nl"
                  className="hover:text-blue-400"
                >
                  info@desmidsebta.nl
                </a>
              </p>
              <p>
                <span className="text-gray-400">telefoon: </span>
                <a href="tel:0629080748" className="hover:text-blue-400">
                  06 290 80 748
                </a>
              </p>
              <p>
                <span className="text-gray-400">KvK: </span>
                08159387
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Onze Diensten</h3>
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
        </div>
      </div>
    </footer>
  );
}
