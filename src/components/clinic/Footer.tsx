import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-secondary blur-3xl"></div>
      </div>

      <div className="container-clinic mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary text-white shadow-lg shadow-primary/20">
                <Heart className="w-5 h-5 fill-white" />
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight text-white">
                LifeCare
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Providing world-class healthcare with a compassionate touch. Our mission is to improve the health and well-being of our community.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Our Doctors", "Services", "Book Appointment", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                    {item}
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
                { label: "Cardiology", id: "cardiology" },
                { label: "Neurology", id: "neurology" },
                { label: "Pediatrics", id: "pediatrics" },
                { label: "Orthopedics", id: "orthopedics" },
                { label: "Dental Care", id: "dental-care" },
                { label: "Ophthalmology", id: "ophthalmology" }
              ].map((service) => (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`} className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/40 group-hover:bg-secondary transition-colors"></span>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-white text-sm font-semibold mb-1">Address</span>
                  <span className="text-slate-400 text-sm">Chandigarh, India</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-white text-sm font-semibold mb-1">Emergency</span>
                  <a href="tel:9988324455" className="text-slate-400 text-sm hover:text-primary transition-colors">9988324455</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-white text-sm font-semibold mb-1">Email</span>
                  <a href="mailto:naveen.maan2006@gmail.com" className="text-slate-400 text-sm hover:text-primary transition-colors">naveen.maan2006@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter - Simplified for visual balance */}
        <div className="mb-16 p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-white/5 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">Subscribe to our Newsletter</h3>
              <p className="text-slate-400 text-sm">Stay updated with the latest health tips and clinic news.</p>
            </div>
            <form className="flex w-full md:w-auto gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-900/50 border border-slate-700 text-white placeholder:text-slate-500 rounded-xl px-4 py-3 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-primary/50"
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
            <p>© {new Date().getFullYear()} LifeCare. All rights reserved.</p>
            <span className="hidden sm:inline">|</span>
            <p>
              Designed & Developed by{" "}
              <a
                href="https://wa.me/9988324455"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow font-bold transition-colors"
              >
                Naveen Maan
              </a>
            </p>
          </div>

          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-slate-500 transition-colors hover:text-primary font-medium">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-slate-500 transition-colors hover:text-primary font-medium">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-xs text-slate-500 transition-colors hover:text-primary font-medium">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
