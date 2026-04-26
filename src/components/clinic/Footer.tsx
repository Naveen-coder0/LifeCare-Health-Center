import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, Heart, Shield, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { CLINIC, whatsappBookingUrl } from "@/lib/clinic-config";

const Footer = () => (
  <footer className="bg-slate-900 text-white pt-20 pb-10 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-secondary blur-3xl" />
    </div>

    <div className="container-clinic mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary text-white shadow-lg shadow-primary/20">
              <Heart className="w-5 h-5 fill-white" />
            </div>
            <div>
              <span className="font-heading font-bold text-xl tracking-tight text-white block">
                {CLINIC.shortName}
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest">
                Health Center · {CLINIC.city}
              </span>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            Providing trusted, compassionate healthcare in {CLINIC.city} since 2014.
            Your health is our greatest priority.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-2">
            {[
              { icon: Shield, label: "NABH Certified" },
              { icon: Award, label: "ISO 9001" },
              { icon: Clock, label: "24/7 Emergency" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-1.5 bg-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-300">
                <b.icon className="w-3.5 h-3.5 text-primary" />
                {b.label}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {[
              { href: CLINIC.social.facebook, Icon: Facebook },
              { href: CLINIC.social.twitter, Icon: Twitter },
              { href: CLINIC.social.instagram, Icon: Instagram },
              { href: CLINIC.social.linkedin, Icon: Linkedin },
            ].map(({ href, Icon }) => (
              <a key={href} href={href} className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-all duration-300">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-6 text-white">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { label: "Home", href: "#home" },
              { label: "About Us", href: "#about" },
              { label: "Our Doctors", href: "#doctors" },
              { label: "Services", href: "#services" },
              { label: "Book Appointment", href: "#appointment" },
              { label: "Contact Us", href: "#contact" },
            ].map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-6 text-white">Our Services</h4>
          <ul className="space-y-3">
            {[
              { label: "General Physician", id: "general-physician" },
              { label: "Dental Care", id: "dental-care" },
              { label: "Pediatrics", id: "pediatrics" },
              { label: "Orthopedics", id: "orthopedics" },
              { label: "Gynecology", id: "gynecology" },
              { label: "Emergency Care", id: "emergency-care" },
            ].map((s) => (
              <li key={s.id}>
                <Link to={`/services/${s.id}`} className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary/40 group-hover:bg-secondary transition-colors" />
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-6 text-white">Contact Us</h4>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-white text-sm font-semibold mb-0.5">Address</span>
                <span className="text-slate-400 text-sm">{CLINIC.address}</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-0.5">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-white text-sm font-semibold mb-0.5">Phone / Emergency</span>
                <a href={`tel:${CLINIC.phone}`} className="text-slate-400 text-sm hover:text-primary transition-colors">
                  {CLINIC.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-0.5">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-white text-sm font-semibold mb-0.5">Email</span>
                <a href={`mailto:${CLINIC.email}`} className="text-slate-400 text-sm hover:text-primary transition-colors">
                  {CLINIC.email}
                </a>
              </div>
            </li>
          </ul>

          {/* WhatsApp CTA */}
          <a
            href={whatsappBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm bg-[#25D366] text-white hover:bg-[#1ebe5d] transition-all"
          >
            💬 Book via WhatsApp
          </a>
        </div>
      </div>

      {/* Newsletter */}
      <div className="mb-12 p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-white/5 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-1">Health Tips & Clinic Updates</h3>
            <p className="text-slate-400 text-sm">Subscribe to stay informed about your health.</p>
          </div>
          <form className="flex w-full md:w-auto gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-slate-900/50 border border-slate-700 text-white placeholder:text-slate-500 rounded-xl px-4 py-3 w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button className="btn-primary whitespace-nowrap px-6">Subscribe</button>
          </form>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-slate-800/60 relative z-10">
      <div className="container-clinic mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-1 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</p>
          <span className="hidden sm:inline">|</span>
          <p>
            Designed by{" "}
            <a href={whatsappBookingUrl()} target="_blank" rel="noopener noreferrer"
              className="text-primary hover:text-primary-glow font-bold transition-colors">
              Naveen Maan
            </a>
          </p>
        </div>
        <div className="flex gap-6">
          <Link to="/privacy" className="text-xs text-slate-500 hover:text-primary transition-colors font-medium">Privacy Policy</Link>
          <Link to="/terms" className="text-xs text-slate-500 hover:text-primary transition-colors font-medium">Terms of Service</Link>
          <Link to="/cookie-policy" className="text-xs text-slate-500 hover:text-primary transition-colors font-medium">Cookie Policy</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
