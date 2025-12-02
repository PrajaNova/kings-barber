import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./Button";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary text-white relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Form */}
          <div>
            <div className="mb-12">
              <h2 className="text-secondary font-serif text-lg uppercase tracking-widest mb-2">
                Visit Us
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-400 text-lg">
                Ready for a fresh look? Book an appointment or drop by our shop.
                Walk-ins are welcome based on availability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-secondary shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Location</h4>
                    <p className="text-gray-400">
                      123 Barber Street,
                      <br />
                      Singapore 123456
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-secondary shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <p className="text-gray-400">+65 1234 5678</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="text-secondary shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-gray-400">info@kingsbarber.com.sg</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-secondary shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Hours</h4>
                    <p className="text-gray-400">
                      Mon - Sat: 10am - 8pm
                      <br />
                      Sun: 11am - 6pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-6 bg-white/5 p-8 rounded-lg border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:border-secondary focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:border-secondary focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:border-secondary focus:outline-none transition-colors"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </div>

          {/* Map Placeholder */}
          <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819917806443!2d103.8479363147539!3d1.281906999064956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190c2c94ccb3%3A0x11213560829baa05!2sSingapore!5e0!3m2!1sen!2ssg!4v1625631812345!5m2!1sen!2ssg"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(100%) invert(90%) contrast(80%)",
              }}
              allowFullScreen={true}
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
