import { Phone, Mail, MapPin, Send, MessageCircle, Clock, CheckCircle2, ArrowRight } from "lucide-react";
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

  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const isOpen =
    (day >= 1 && day <= 6 && hour >= 9 && hour < 20) ||
    (day === 0 && hour >= 10 && hour < 14);

  const infoCards = [
    {
      icon: MapPin,
      title: "Our Location",
      value: CLINIC.address,
      sub: "Get Directions →",
      href: "#",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      border: "border-primary/10",
    },
    {
      icon: Phone,
      title: "Phone",
      value: CLINIC.phoneDisplay,
      sub: "Emergency: 24/7",
      href: `tel:${CLINIC.phone}`,
      iconBg: "bg-secondary/10",
      iconColor: "text-secondary",
      border: "border-secondary/10",
    },
    {
      icon: Mail,
      title: "Email",
      value: CLINIC.email,
      sub: "Reply within 2 hours",
      href: `mailto:${CLINIC.email}`,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      border: "border-amber-100",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat with Us",
      sub: "Instant Response",
      href: whatsappBookingUrl(),
      iconBg: "bg-[#25D366]/10",
      iconColor: "text-[#25D366]",
      border: "border-[#25D366]/15",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-primary/4 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[50%] bg-gradient-to-tr from-secondary/4 to-transparent pointer-events-none" />

      <div className="container-clinic mx-auto relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="section-label mb-3">Get in Touch</p>
          <h2 className="section-title mb-4">
            Visit Us in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {CLINIC.city}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions? Our team is ready to help you book your appointment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── Left: Info ── */}
          <div className="space-y-6">

            {/* Open Now */}
            <div className={`flex items-center gap-4 rounded-2xl px-5 py-4 border ${isOpen ? "bg-green-50 border-green-200" : "bg-slate-50 border-slate-200"}`}>
              <div className="relative flex-shrink-0">
                <span className={`w-3 h-3 rounded-full block ${isOpen ? "bg-green-500" : "bg-slate-400"}`} />
                {isOpen && <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />}
              </div>
              <div className="flex-1">
                <p className={`text-sm font-bold ${isOpen ? "text-green-800" : "text-slate-700"}`}>
                  {isOpen ? "We're Open Right Now" : "Currently Closed"}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{CLINIC.hours.weekdays} · {CLINIC.hours.sunday}</p>
              </div>
              {isOpen && <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />}
            </div>

            {/* Info cards grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {infoCards.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.title === "WhatsApp" ? "_blank" : undefined}
                  rel={card.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                  className={`bg-white rounded-2xl p-5 border ${card.border} shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group block`}
                >
                  <div className={`w-11 h-11 rounded-xl ${card.iconBg} flex items-center justify-center ${card.iconColor} mb-4 group-hover:scale-110 transition-transform`}>
                    <card.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-foreground mb-1">{card.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-2">{card.value}</p>
                  <p className={`text-xs font-bold flex items-center gap-1 ${card.iconColor}`}>
                    {card.sub} <ArrowRight className="w-3 h-3" />
                  </p>
                </a>
              ))}
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 border border-border/40 shadow-sm">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-4.5 h-4.5 text-primary" />
                </div>
                <h3 className="font-bold text-base">Working Hours</h3>
              </div>
              <div className="space-y-3 text-sm">
                {[
                  { day: "Monday – Saturday", time: "9:00 AM – 8:00 PM", highlight: false },
                  { day: "Sunday", time: "10:00 AM – 2:00 PM", highlight: false },
                  { day: "Emergency", time: "24 / 7", highlight: true },
                ].map((row) => (
                  <div key={row.day} className={`flex justify-between items-center py-2 border-b border-border/30 last:border-0 ${row.highlight ? "text-red-600" : ""}`}>
                    <span className={row.highlight ? "font-bold" : "text-muted-foreground"}>{row.day}</span>
                    <span className="font-bold">{row.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="h-[260px] w-full rounded-3xl overflow-hidden shadow-lg border border-border/40 relative group">
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

          {/* ── Right: Form ── */}
          <div className="bg-white rounded-3xl border border-border/40 shadow-xl overflow-hidden">
            {/* Form header */}
            <div className="bg-gradient-to-r from-primary to-secondary p-8 text-white relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <h3 className="text-2xl font-bold font-heading mb-1 relative z-10">Send us a Message</h3>
              <p className="text-white/80 text-sm relative z-10">We'll get back to you within 2 hours.</p>
            </div>

            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground uppercase tracking-wide">Full Name</label>
                    <input type="text" placeholder="Your name" required
                      className="w-full px-4 py-3 rounded-xl border border-border/50 bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                      value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground uppercase tracking-wide">Email Address</label>
                    <input type="email" placeholder="your@email.com" required
                      className="w-full px-4 py-3 rounded-xl border border-border/50 bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                      value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wide">Subject</label>
                  <input type="text" placeholder="How can we help?" required
                    className="w-full px-4 py-3 rounded-xl border border-border/50 bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                    value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wide">Message</label>
                  <textarea placeholder="Your message..." rows={4} required
                    className="w-full px-4 py-3 rounded-xl border border-border/50 bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none text-sm"
                    value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                </div>
                <button type="submit" className="btn-primary w-full py-4 text-base rounded-2xl flex items-center justify-center gap-2 group shadow-xl shadow-primary/25">
                  Send via WhatsApp
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-xs text-center text-muted-foreground">
                  🔒 Your information is private and secure.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
