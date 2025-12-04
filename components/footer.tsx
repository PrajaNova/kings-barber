import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Scissors,
} from "lucide-react";
import { businessInfo, productCategories, services } from "##/lib/schema";

const serviceLinks = services.slice(0, 6);
const productLinks = productCategories.slice(0, 4);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
                <Scissors className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold">
                  {businessInfo.name}
                </span>
                <span className="block text-xs text-accent-foreground/70">
                  Est. {businessInfo.established}
                </span>
              </div>
            </div>
            <p className="text-sm text-accent-foreground/80 mb-4">
              {businessInfo.tagline}. Premium barbering services by UK-trained
              professionals.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/kingsbarbersingapore/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-accent-foreground/10 flex items-center justify-center hover:bg-accent-foreground/20 transition-colors"
                data-testid="link-footer-instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/kingsbarbersg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-accent-foreground/10 flex items-center justify-center hover:bg-accent-foreground/20 transition-colors"
                data-testid="link-footer-facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                    data-testid={`link-footer-service-${service.id}`}
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {productLinks.map((category) => (
                <li key={category.id}>
                  <a
                    href="#products"
                    className="text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                    data-testid={`link-footer-product-${category.id}`}
                  >
                    {category.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#products"
                  className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  View All Products
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${businessInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                  data-testid="link-footer-phone"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  {businessInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="flex items-center gap-2 text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                  data-testid="link-footer-email"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  {businessInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-accent-foreground/80">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>{businessInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-foreground/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p
              className="text-sm text-accent-foreground/60"
              data-testid="text-copyright"
            >
              &copy; {currentYear} {businessInfo.name}. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-accent-foreground/60 hover:text-accent-foreground transition-colors"
                data-testid="link-privacy-policy"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-accent-foreground/60 hover:text-accent-foreground transition-colors"
                data-testid="link-terms-service"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
