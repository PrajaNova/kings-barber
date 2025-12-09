import { Mail, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import {
  CONTACT_PHONE_NUMBER,
  CONTACT_WHATSAPP_NUMBER,
  FOOTER_CONTENT,
} from "##/lib/constants";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10 py-12 lg:py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-20">
          {/* Left Column - Map */}
          <div className="relative h-[300px] w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-amber-500/5">
            <iframe
              src={FOOTER_CONTENT.map.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kings Barber Location"
              className="grayscale invert brightness-75 hover:grayscale-0 hover:invert-0 hover:brightness-100 transition-all duration-500"
            />
          </div>

          {/* Middle Column - Contact Info */}
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            <div>
              <h3 className="mb-2 text-lg font-bold uppercase tracking-widest text-amber-500">
                Visit Us
              </h3>
              <p className="text-xl text-white leading-relaxed">
                {FOOTER_CONTENT.contact.address}
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold uppercase tracking-widest text-amber-500">
                Open Daily
              </h3>
              <p className="text-xl text-white">
                {FOOTER_CONTENT.contact.hours}
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold uppercase tracking-widest text-amber-500">
                Call Us
              </h3>
              <p className="text-xl text-white">
                {FOOTER_CONTENT.contact.phone}
              </p>
            </div>
          </div>

          {/* Right Column - Quick Actions */}
          <div className="flex flex-col items-center justify-center space-y-6 lg:items-end">
            <h3 className="text-lg font-bold uppercase tracking-widest text-white mb-2">
              Get in Touch
            </h3>
            <div className="flex flex-col gap-4 w-full max-w-[280px]">
              {/* WhatsApp */}
              <Link
                href={`https://wa.me/${CONTACT_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-amber-500 hover:border-amber-500 hover:text-black"
              >
                <span className="font-semibold text-gray-300 group-hover:text-black">
                  WhatsApp Us
                </span>
                <MessageCircle className="h-6 w-6 text-amber-500 group-hover:text-black" />
              </Link>

              {/* Call */}
              <Link
                href={`tel:${CONTACT_PHONE_NUMBER}`}
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-amber-500 hover:border-amber-500 hover:text-black"
              >
                <span className="font-semibold text-gray-300 group-hover:text-black">
                  Call Us
                </span>
                <Phone className="h-6 w-6 text-amber-500 group-hover:text-black" />
              </Link>

              {/* Email */}
              <Link
                href={`mailto:${FOOTER_CONTENT.contact.email}`}
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-amber-500 hover:border-amber-500 hover:text-black"
              >
                <span className="font-semibold text-gray-300 group-hover:text-black">
                  Email Us
                </span>
                <Mail className="h-6 w-6 text-amber-500 group-hover:text-black" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 border-t border-white/10 pt-4 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-500">
            Powered by &nbsp;
            <a
              href="/"
              className="font-semibold text-amber-500 hover:text-amber-400 transition-colors"
            >
              @PrajaNova
            </a>
          </p>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Kings Barber. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
