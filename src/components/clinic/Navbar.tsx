import { useState, useEffect } from "react";
import { Phone, Menu, X, Heart, MessageCircle } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CLINIC, whatsappBookingUrl } from "@/lib/clinic-config";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    if (href.startsWith("#")) {
      const id = href.substring(1);
      const scroll = () => {
        const el = document.getElementById(id);
        if (el) {
          const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: offset, behavior: "smooth" });
        }
      };
      if (location.pathname !== "/") { navigate("/"); setTimeout(scroll, 100); }
      else scroll();
    } else {
      navigate(href);
    }
  };

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#doctors", label: "Doctors" },
    { href: "#appointment", label: "Appointment" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-border/50"
          : "bg-transparent py-2"
      }`}
    >
      <div className="container-clinic mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary text-white shadow-lg shadow-primary/20 transition-transform group-hover:scale-110 duration-300">
              <Heart className="w-5 h-5 fill-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl leading-none text-primary tracking-tight">
                {CLINIC.shortName}
              </span>
              <span className="hidden sm:block text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mt-0.5">
                Health Center · {CLINIC.city}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/50 backdrop-blur-sm px-2 py-1.5 rounded-full border border-border/50 shadow-sm">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="cursor-pointer px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-white rounded-full transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={whatsappBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-[#25D366] hover:text-[#1ebe5d] transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </div>
              <span className="hidden xl:inline">WhatsApp</span>
            </a>
            <a
              href={`tel:${CLINIC.phone}`}
              className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Phone className="w-4 h-4" />
              </div>
              <span className="hidden xl:inline">{CLINIC.phoneDisplay}</span>
            </a>
            <a
              href="#appointment"
              onClick={(e) => handleNavClick(e, "#appointment")}
              className="btn-primary text-sm px-6 py-2.5 shadow-lg shadow-primary/25 hover:shadow-primary/40 cursor-pointer"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-secondary/10 hover:text-secondary transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-border shadow-lg transition-all duration-300 ease-in-out origin-top ${
          mobileOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="container-clinic mx-auto px-4 py-6 space-y-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="flex items-center justify-between p-3 rounded-xl text-base font-medium text-muted-foreground hover:bg-secondary/5 hover:text-secondary hover:pl-4 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-border mt-4 flex flex-col gap-3">
            <a
              href={`tel:${CLINIC.phone}`}
              className="flex items-center justify-center gap-2 p-3 rounded-xl font-semibold bg-primary/10 text-primary"
            >
              <Phone className="w-4 h-4" /> Call {CLINIC.phoneDisplay}
            </a>
            <a
              href={whatsappBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 rounded-xl font-semibold bg-[#25D366]/10 text-[#25D366]"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
            <a
              href="#appointment"
              onClick={(e) => handleNavClick(e, "#appointment")}
              className="btn-primary w-full justify-center py-3.5"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
