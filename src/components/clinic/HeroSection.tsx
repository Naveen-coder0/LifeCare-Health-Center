import { useState, useEffect } from "react";
import { Calendar, Phone, Star, Users, Clock, Stethoscope, ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import heroClinic from "@/assets/hero-clinic.jpg";
import { CLINIC, whatsappBookingUrl } from "@/lib/clinic-config";

const stats = [
  { icon: Star,        label: "5.0 Rating",      sub: "120+ Google Reviews", color: "text-amber-500",  bg: "bg-amber-50",    border: "border-amber-100" },
  { icon: Clock,       label: "Open 24 Hrs",      sub: "Emergency Care",      color: "text-green-600",  bg: "bg-green-50",    border: "border-green-100" },
  { icon: Stethoscope, label: "10+ Specialists",  sub: "Expert Doctors",      color: "text-primary",    bg: "bg-primary/8",   border: "border-primary/10" },
  { icon: Users,       label: "5,000+ Patients",  sub: "Trusted by Families", color: "text-secondary",  bg: "bg-secondary/8", border: "border-secondary/10" },
];

const HeroSection = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Sticky Bar ── */}
      <div className={`fixed top-0 left-0 right-0 z-[60] bg-primary text-white py-2.5 px-4 flex items-center justify-between gap-4 shadow-lg transition-all duration-300 ${showSticky ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
        <span className="text-sm font-semibold hidden sm:block">
          ⭐ {CLINIC.stats.rating} Rating · {CLINIC.stats.reviews} Google Reviews · {CLINIC.city}
        </span>
        <div className="flex items-center gap-3 ml-auto">
          <a href={`tel:${CLINIC.phone}`} className="flex items-center gap-1.5 text-sm font-bold bg-white/20 hover:bg-white/30 px-4 py-1.5 rounded-full transition-colors">
            <Phone className="w-3.5 h-3.5" /> Call Now
          </a>
          <a href="#appointment" className="flex items-center gap-1.5 text-sm font-bold bg-white text-primary hover:bg-white/90 px-4 py-1.5 rounded-full transition-colors">
            <Calendar className="w-3.5 h-3.5" /> Book Now
          </a>
        </div>
      </div>

      {/* ── Hero ── */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 lg:pt-28 lg:pb-20 overflow-hidden bg-[#F8FAFC]">

        {/* Layered background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[70%] h-full bg-gradient-to-l from-primary/8 via-secondary/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-[50%] h-[60%] bg-gradient-to-tr from-secondary/6 to-transparent" />
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #0F766E 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          {/* Decorative rings */}
          <div className="absolute top-16 right-[8%] w-80 h-80 rounded-full border border-primary/8" />
          <div className="absolute top-28 right-[12%] w-56 h-56 rounded-full border border-secondary/8" />
          <div className="absolute bottom-20 left-[5%] w-48 h-48 rounded-full border border-primary/6" />
        </div>

        <div className="container-clinic mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 items-center">

            {/* ── Left ── */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

              {/* Trust pill */}
              <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-up bg-white border border-primary/15 text-primary shadow-sm shadow-primary/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Trusted Healthcare for Every Family
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold leading-[1.1] mb-5 animate-fade-up font-heading">
                <span className="text-foreground">Medstar</span>{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%] animate-shimmer">
                    Multispecialty
                  </span>
                </span>
                <br />
                <span className="text-foreground">Clinic</span>
              </h1>

              {/* Location line */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 animate-fade-up delay-100">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-base font-semibold text-foreground/70">Sector 22-D, Chandigarh</span>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg animate-fade-up delay-100">
                Modern healthcare with experienced doctors, compassionate care, advanced diagnostics, and personalized treatment for every patient.
              </p>

              {/* Star rating row */}
              <div className="flex items-center gap-3 mb-8 animate-fade-up delay-150">
                <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-4 py-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                  </div>
                  <span className="text-sm font-black text-amber-800">5.0</span>
                  <span className="text-amber-300 text-xs">|</span>
                  <span className="text-xs font-semibold text-amber-700">120+ Reviews</span>
                </div>
                <div className="flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-full px-3 py-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-xs font-bold text-green-700">Verified Clinic</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-10 w-full sm:w-auto animate-fade-up delay-200">
                <a href="#appointment" className="group relative overflow-hidden btn-primary text-base px-8 py-4 shadow-xl shadow-primary/30 rounded-2xl">
                  <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <Calendar className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Book Appointment</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={`tel:${CLINIC.phone}`} className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-base border-2 border-primary/20 text-primary bg-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-primary/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  {CLINIC.phoneDisplay}
                </a>
              </div>

              {/* Stat cards row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full animate-fade-up delay-300">
                {stats.map((s) => (
                  <div key={s.label} className={`bg-white rounded-2xl p-3.5 border ${s.border} shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default`}>
                    <div className={`w-9 h-9 rounded-xl ${s.bg} flex items-center justify-center mx-auto mb-2.5`}>
                      <s.icon className={`w-4.5 h-4.5 ${s.color}`} />
                    </div>
                    <p className="text-xs font-black text-foreground leading-tight">{s.label}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5 font-medium">{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right Image ── */}
            <div className="relative lg:h-[620px] flex items-center justify-center animate-fade-in delay-200">
              <div className="relative w-full max-w-lg lg:max-w-none h-full">

                {/* Glow behind image */}
                <div className="absolute inset-6 bg-gradient-to-tr from-primary/30 to-secondary/20 rounded-[2.5rem] rotate-2 blur-2xl" />

                {/* Main image */}
                <img
                  src={heroClinic}
                  alt="Medstar Multispecialty Clinic – Chandigarh"
                  className="relative w-full h-full object-cover rounded-[2.5rem] shadow-2xl z-10"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)" }}
                />

                {/* Overlay gradient on image */}
                <div className="absolute inset-0 z-10 rounded-[2.5rem] bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none" style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)" }} />

                {/* Floating card – 24/7 */}
                <div className="absolute -bottom-5 left-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-border/40 flex items-center gap-3.5 animate-bounce-slow">
                  <div className="relative w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-black text-green-700 leading-none">24/7</span>
                    <span className="absolute inset-0 rounded-full bg-green-400/30 animate-ping" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-foreground">Always Open</p>
                    <p className="text-xs text-muted-foreground">Emergency Care</p>
                  </div>
                </div>

                {/* Floating card – rating */}
                <div className="absolute top-8 -right-5 z-20 bg-white p-4 rounded-2xl shadow-xl border border-border/40 hidden sm:flex flex-col items-center gap-1 animate-float min-w-[90px]">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                  </div>
                  <span className="text-2xl font-black text-foreground leading-none">5.0</span>
                  <span className="text-[10px] text-muted-foreground font-semibold">Google Rating</span>
                </div>

                {/* Floating card – patients */}
                <div className="absolute bottom-20 -right-5 z-20 bg-white p-3.5 rounded-2xl shadow-xl border border-border/40 hidden sm:flex items-center gap-3 animate-float" style={{ animationDelay: "1s" }}>
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-foreground">5,000+</p>
                    <p className="text-[10px] text-muted-foreground">Happy Patients</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
