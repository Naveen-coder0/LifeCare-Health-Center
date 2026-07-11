import { useState, useEffect } from "react";
import { Phone, Menu, X, MessageCircle, Stethoscope } from "lucide-react";
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
    { href: "#home",        label: "Home" },
    { href: "#about",       label: "About" },
    { href: "#services",    label: "Services" },
    { href: "#doctors",     label: "Doctors" },
    { href: "#appointment", label: "Appointment" },
    { href: "#contact",     label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border/40"
        : "bg-transparent py-2"
    }`}>
      <div className="container-clinic mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-10 h-10 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/25 transition-transform group-hover:scale-110 duration-300">
              <Stethoscope className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-lg leading-none text-foreground tracking-tight">
                {CLINIC.shortName}
              </span>
              <span className="hidden sm:block text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-0.5">
                Multispecialty Clinic
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-0.5 bg-white/60 backdrop-blur-sm px-2 py-1.5 rounded-full border border-border/40 shadow-sm">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="cursor-pointer px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-primary hover:bg-white rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ── Desktop CTAs ── */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href={whatsappBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-[#25D366] hover:text-[#1ebe5d] transition-colors px-3 py-2 rounded-xl hover:bg-[#25D366]/8"
            >
              <div className="w-7 h-7 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                <MessageCircle className="w-3.5 h-3.5" />
              </div>
              <span className="hidden xl:inline">WhatsApp</span>
            </a>
            <a
              href={`tel:${CLINIC.phone}`}
              className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-xl hover:bg-primary/5"
            >
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="hidden xl:inline">{CLINIC.phoneDisplay}</span>
            </a>
            <a
              href="#appointment"
              onClick={(e) => handleNavClick(e, "#appointment")}
              className="btn-primary text-sm px-5 py-2.5 rounded-xl shadow-md shadow-primary/20 hover:shadow-primary/35 cursor-pointer"
            >
              Book Now
            </a>
          </div>

          {/* ── Mobile Toggle ── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-foreground hover:bg-primary/8 hover:text-primary transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-t border-border/40 shadow-xl transition-all duration-300 ease-in-out origin-top ${
        mobileOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
      }`}>
        <div className="container-clinic mx-auto px-4 py-5 space-y-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="flex items-center gap-3 p-3 rounded-xl text-sm font-semibold text-muted-foreground hover:bg-primary/6 hover:text-primary transition-all duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-border/40 mt-3 flex flex-col gap-2.5">
            <a href={`tel:${CLINIC.phone}`} className="flex items-center justify-center gap-2 p-3 rounded-xl font-bold text-sm bg-primary/8 text-primary">
              <Phone className="w-4 h-4" /> {CLINIC.phoneDisplay}
            </a>
            <a href={whatsappBookingUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-3 rounded-xl font-bold text-sm bg-[#25D366]/10 text-[#25D366]">
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
            <a href="#appointment" onClick={(e) => handleNavClick(e, "#appointment")} className="btn-primary w-full justify-center py-3.5 rounded-xl">
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
