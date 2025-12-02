import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-serif font-bold text-secondary mb-4 block"
            >
              King's Barber
            </Link>
            <p className="text-gray-400 mb-6">
              Restoring the classic art of barbering with a modern touch. Look
              sharp, feel confident.
            </p>
            <div className="flex gap-4">
              <a
                href="/"
                className="text-white hover:text-secondary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="/"
                className="text-white hover:text-secondary transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Products", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-secondary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-serif text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-secondary shrink-0" size={20} />
                <span>123 Barber Street, Singapore 123456</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="text-secondary shrink-0" size={20} />
                <span>+65 1234 5678</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="text-secondary shrink-0" size={20} />
                <span>info@kingsbarber.com.sg</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} King's Barber. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
