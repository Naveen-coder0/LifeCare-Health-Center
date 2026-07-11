import { useState, useEffect } from "react";
import { Calendar, Phone, Star, Users, Clock, Stethoscope, ArrowRight } from "lucide-react";
import heroClinic from "@/assets/hero-clinic.jpg";
import { CLINIC, whatsappBookingUrl } from "@/lib/clinic-config";

const floatingCards = [
  { icon: Star, label: "5.0 Rating", sub: "59 Google Reviews", color: "text-amber-500", bg: "bg-amber-50" },
  { icon: Clock, label: "Open 24 Hours", sub: "Emergency Care", color: "text-green-600", bg: "bg-green-50" },
  { icon: Stethoscope, label: "Expert Doctors", sub: "8+ Specialists", color: "text-primary", bg: "bg-primary/10" },
  { icon: Users, label: "2000+ Patients", sub: "Trusted by Families", color: "text-secondary", bg: "bg-secondary/10" },
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
      <div
        className={`fixed top-0 left-0 right-0 z-[60] bg-primary text-white py-2.5 px-4 flex items-center justify-between gap-4 shadow-lg transition-all duration-300 ${
          showSticky ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <span className="text-sm font-semibold hidden sm:block">
          ⭐ {CLINIC.stats.rating} Rating · {CLINIC.stats.reviews} Google Reviews · {CLINIC.city}
        </span>
        <div className="flex items-center gap-3 ml-auto">
          <a
            href={`tel:${CLINIC.phone}`}
            className="flex items-center gap-1.5 text-sm font-bold bg-white/20 hover:bg-white/30 px-4 py-1.5 rounded-full transition-colors"
          >
            <Phone className="w-3.5 h-3.5" /> Call Now
          </a>
          <a
            href="#appointment"
            className="flex items-center gap-1.5 text-sm font-bold bg-white text-primary hover:bg-white/90 px-4 py-1.5 rounded-full transition-colors"
          >
            <Calendar className="w-3.5 h-3.5" /> Book Now
          </a>
        </div>
      </div>

      {/* ── Hero ── */}
      <section id="home" className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 -z-10 w-3/4 h-full bg-gradient-to-l from-primary/10 to-transparent opacity-60 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 w-2/3 h-2/3 bg-gradient-to-r from-secondary/10 to-transparent opacity-50 blur-3xl" />
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 -z-10 w-72 h-72 rounded-full border border-primary/10" />
        <div className="absolute top-32 right-20 -z-10 w-48 h-48 rounded-full border border-secondary/10" />

        <div className="container-clinic mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* ── Left ── */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-5 animate-fade-up bg-secondary/10 border border-secondary/20 text-secondary">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-secondary" />
                Trusted Healthcare for Every Family
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-5 animate-fade-up text-foreground font-heading">
                Medstar{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Multispecialty
                </span>
                <br />
                Clinic
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-3 max-w-xl animate-fade-up delay-100">
                Trusted Healthcare in <strong className="text-foreground">Chandigarh</strong>
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-xl animate-fade-up delay-100">
                Modern healthcare with experienced doctors, compassionate care, advanced diagnostics, and personalized treatment for every patient.
              </p>

              {/* Rating badge */}
              <div className="flex items-center gap-2 mb-8 animate-fade-up delay-150 bg-amber-50 border border-amber-200 rounded-full px-4 py-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-amber-800">{CLINIC.stats.rating} / 5</span>
                <span className="text-amber-400">·</span>
                <span className="text-sm font-semibold text-amber-700">{CLINIC.stats.reviews} Google Reviews</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-10 w-full sm:w-auto animate-fade-up delay-200">
                <a href="#appointment" className="btn-primary group text-base px-7 py-3.5 shadow-xl shadow-primary/30">
                  <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Book Appointment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>

              {/* Floating stat cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full animate-fade-up delay-300">
                {floatingCards.map((card) => (
                  <div key={card.label} className="bg-white rounded-2xl p-3 border border-border/50 shadow-sm text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    <div className={`w-8 h-8 rounded-xl ${card.bg} flex items-center justify-center mx-auto mb-2`}>
                      <card.icon className={`w-4 h-4 ${card.color}`} />
                    </div>
                    <p className="text-xs font-bold text-foreground leading-tight">{card.label}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{card.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right Image ── */}
            <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in delay-200">
              <div className="relative w-full max-w-lg lg:max-w-none aspect-square lg:aspect-auto h-full">
                <div className="absolute inset-4 bg-gradient-to-tr from-primary to-secondary rounded-[2rem] rotate-3 opacity-20 blur-lg" />
                <img
                  src={heroClinic}
                  alt="Medstar Multispecialty Clinic – Chandigarh"
                  className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl z-10"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" }}
                />

                {/* Floating badge – 24/7 */}
                <div className="absolute -bottom-6 left-6 z-20 bg-card p-4 rounded-xl shadow-lg border border-border/50 flex items-center gap-4 animate-bounce-slow">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <span className="text-xs font-black leading-none text-center">24/7</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Always Open</div>
                    <div className="text-xs text-muted-foreground">Emergency Care</div>
                  </div>
                </div>

                {/* Floating badge – rating */}
                <div className="absolute top-10 -right-6 z-20 bg-white p-4 rounded-xl shadow-lg border border-border/50 hidden sm:flex items-center gap-3 animate-float">
                  <div className="flex flex-col items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                    </div>
                    <span className="text-lg font-black text-foreground mt-1">5.0</span>
                    <span className="text-[10px] text-muted-foreground">Google Rating</span>
                  </div>
                </div>

                {/* Floating badge – location */}
                <div className="absolute bottom-16 -right-4 z-20 bg-white p-3 rounded-xl shadow-lg border border-border/50 hidden sm:flex items-center gap-2 animate-float">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Stethoscope className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-bold block">Sector 45</span>
                    <span className="text-[10px] text-muted-foreground">Chandigarh</span>
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
