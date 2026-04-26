import { Phone, Mail, MapPin, Send, MessageCircle, Clock, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { CLINIC, whatsappBookingUrl } from "@/lib/clinic-config";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello ${CLINIC.name}!%0AName: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/${CLINIC.whatsapp}?text=${msg}`, "_blank");
    toast.success("Opening WhatsApp to send your message...");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  // Simple "open now" check (Mon–Sat 9–20, Sun 10–14)
  const now = new Date();
  const day = now.getDay(); // 0=Sun
  const hour = now.getHours();
  const isOpen =
    (day >= 1 && day <= 6 && hour >= 9 && hour < 20) ||
    (day === 0 && hour >= 10 && hour < 14);

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 z-0 hidden lg:block" />

      <div className="container-clinic mx-auto relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="section-label mb-3">Get in Touch</p>
          <h2 className="section-title mb-4">
            Visit Us in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">{CLINIC.city}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions? Our team is ready to help you book your appointment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Open Now badge */}
            <div className={`flex items-center gap-3 rounded-2xl px-5 py-4 border ${
              isOpen
                ? "bg-green-50 border-green-200"
                : "bg-slate-50 border-slate-200"
            }`}>
              <span className={`w-3 h-3 rounded-full flex-shrink-0 ${isOpen ? "bg-green-500 animate-pulse" : "bg-slate-400"}`} />
              <div>
                <p className={`text-sm font-bold ${isOpen ? "text-green-800" : "text-slate-700"}`}>
                  {isOpen ? "We're Open Right Now" : "Currently Closed"}
                </p>
                <p className="text-xs text-muted-foreground">{CLINIC.hours.weekdays} · {CLINIC.hours.sunday}</p>
              </div>
              {isOpen && <CheckCircle2 className="w-5 h-5 text-green-600 ml-auto" />}
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Address */}
              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Our Location</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{CLINIC.address}</p>
              </div>

              {/* Phone */}
              <a href={`tel:${CLINIC.phone}`} className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 group block">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Phone</h3>
                <p className="text-muted-foreground text-sm">{CLINIC.phoneDisplay}</p>
                <p className="text-xs text-primary mt-2 font-medium">Emergency: 24/7</p>
              </a>

              {/* Email */}
              <a href={`mailto:${CLINIC.email}`} className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 group block">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-muted-foreground text-sm">{CLINIC.email}</p>
                <p className="text-xs text-primary mt-2 font-medium">We reply within 2 hours</p>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366]/5 rounded-2xl p-6 border border-[#25D366]/20 shadow-sm hover:shadow-lg transition-all duration-300 group block"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                <p className="text-muted-foreground text-sm">Chat with Us</p>
                <p className="text-xs text-[#25D366] mt-2 font-medium">Instant Response</p>
              </a>
            </div>

            {/* Hours */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-lg">Working Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday – Saturday</span>
                  <span className="font-semibold">9:00 AM – 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-semibold">10:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between text-red-600">
                  <span>Emergency</span>
                  <span className="font-bold">24 / 7</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-[280px] w-full rounded-3xl overflow-hidden shadow-lg border border-border relative group">
              <iframe
                src={CLINIC.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title={`${CLINIC.name} Location`}
                className="grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-3xl border border-border shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8" />
            <h3 className="text-2xl font-bold font-heading mb-6 flex items-center gap-2">
              Send us a Message
              <Send className="w-5 h-5 text-primary" />
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Full Name</label>
                  <input type="text" placeholder="Your name" required
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                    value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Email Address</label>
                  <input type="email" placeholder="your@email.com" required
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                    value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Subject</label>
                <input type="text" placeholder="How can we help?" required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                  value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Message</label>
                <textarea placeholder="Your message..." rows={4} required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm resize-none"
                  value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
              </div>
              <button type="submit" className="btn-primary w-full py-3.5 text-base flex items-center justify-center gap-2 group">
                Send via WhatsApp
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-center text-muted-foreground">
                Your message will open in WhatsApp for you to send.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
