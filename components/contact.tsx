"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Clock, Mail, MapPin, Phone, Send, Train } from "lucide-react";
import { useForm } from "react-hook-form";
import { Badge } from "##/components/ui/badge";
import { Button } from "##/components/ui/button";
import { Card, CardContent } from "##/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "##/components/ui/form";
import { Input } from "##/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "##/components/ui/select";
import { Textarea } from "##/components/ui/textarea";
import { useToast } from "##/hooks/use-toast";
import {
  businessInfo,
  type ContactFormData,
  contactFormSchema,
  services,
} from "##/lib/schema";

const transitInfo = [
  { station: "Toa Payoh (NS19)", buses: "139, 145" },
  { station: "Novena (NS20)", buses: "21, 131" },
];

export function Contact() {
  useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceInterest: "",
      message: "",
    },
  });

  const onSubmit = () => {};

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Get in Touch
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Visit Us or Send a Message
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Walk-ins welcome! Or get in touch to book your appointment or ask
            any questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="border-card-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-foreground mb-6">
                  Contact Information
                </h3>

                <div className="space-y-5">
                  <a
                    href={`tel:${businessInfo.phone.replace(/\s/g, "")}`}
                    className="flex items-start gap-4 group"
                    data-testid="link-contact-phone"
                  >
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">
                        {businessInfo.phone}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${businessInfo.email}`}
                    className="flex items-start gap-4 group"
                    data-testid="link-contact-email"
                  >
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">
                        {businessInfo.email}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-muted-foreground">
                        {businessInfo.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Hours</p>
                      <p className="text-muted-foreground">
                        {businessInfo.hours}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-card-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Train className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">
                    Getting Here
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Take the MRT on the North-South (Red) line and connect to
                  these buses:
                </p>
                <div className="space-y-3">
                  {transitInfo.map((info) => (
                    <div
                      key={info.station}
                      className="flex items-center justify-between text-sm p-3 rounded-md bg-muted"
                    >
                      <span className="text-foreground font-medium">
                        {info.station}
                      </span>
                      <span className="text-muted-foreground">
                        Bus {info.buses}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div
              className="rounded-lg overflow-hidden border border-border h-[200px]"
              data-testid="map-location"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.764!2d103.857!3d1.327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da176f6c9c3c8d%3A0x2c6c6c6c6c6c6c6c!2s12%20Boon%20Teck%20Rd%2C%20Singapore%20329586!5e0!3m2!1sen!2ssg!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kings Barber Location"
              />
            </div>
          </div>

          <Card className="border-card-border">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg text-foreground mb-6">
                Send Us a Message
              </h3>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John"
                              data-testid="input-first-name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Doe"
                              data-testid="input-last-name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            data-testid="input-email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+65 9123 4567"
                            data-testid="input-phone"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="serviceInterest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Interest</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger data-testid="select-service">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.id} value={service.id}>
                                {service.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your requirements or questions..."
                            className="min-h-[120px] resize-none"
                            data-testid="textarea-message"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    data-testid="button-submit-contact"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
2;
