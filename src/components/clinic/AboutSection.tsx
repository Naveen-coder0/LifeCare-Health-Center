import { CheckCircle2, Target, Eye, UserCheck, Zap, Award, HeartHandshake, ArrowRight, Clock, Microscope, Smile } from "lucide-react";
import clinicInterior from "@/assets/clinic-interior.jpg";
import { CLINIC } from "@/lib/clinic-config";

const whyUs = [
  { icon: UserCheck,   title: "Experienced Doctors",    desc: "Qualified specialists with years of hands-on clinical expertise across multiple disciplines.", color: "text-blue-600",   bg: "bg-blue-50",   hover: "group-hover:bg-blue-600" },
  { icon: Microscope,  title: "Accurate Diagnosis",     desc: "Advanced diagnostic tools and lab facilities for precise, fast, and reliable results.",       color: "text-violet-600", bg: "bg-violet-50", hover: "group-hover:bg-violet-600" },
  { icon: HeartHandshake, title: "Patient-Centered Care", desc: "Every patient is treated with dignity, empathy, and personalized attention.",               color: "text-rose-500",   bg: "bg-rose-50",   hover: "group-hover:bg-rose-500" },
  { icon: Award,       title: "Affordable Treatment",   desc: "Transparent, patient-friendly pricing with no hidden charges — quality care for all.",        color: "text-amber-600",  bg: "bg-amber-50",  hover: "group-hover:bg-amber-600" },
  { icon: Zap,         title: "Advanced Equipment",     desc: "State-of-the-art diagnostic and treatment technology for the best clinical outcomes.",         color: "text-primary",    bg: "bg-primary/8", hover: "group-hover:bg-primary" },
  { icon: Clock,       title: "24×7 Support",           desc: "Round-the-clock emergency care and patient support — we're always here when you need us.",    color: "text-green-600",  bg: "bg-green-50",  hover: "group-hover:bg-green-600" },
  { icon: Smile,       title: "Minimal Waiting Time",   desc: "Smart appointment scheduling ensures you spend less time waiting and more time healing.",      color: "text-secondary",  bg: "bg-secondary/8", hover: "group-hover:bg-secondary" },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-[#F8FAFC] relative overflow-hidden">
    <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/4 rounded-full blur-3xl pointer-events-none" />

    <div className="container-clinic mx-auto relative z-10">

      {/* ── Intro + Image ── */}
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            About {CLINIC.name}
          </div>
          <h2 className="section-title mb-6">
            Your Health Is Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Greatest Priority
            </span>
          </h2>
          <p className="text-lg leading-relaxed mb-5 text-muted-foreground">
            {CLINIC.name} is a trusted multispecialty healthcare destination in {CLINIC.city}.
            We combine <strong className="text-foreground">experienced doctors</strong> with genuine compassion
            to deliver care that makes a real difference in every patient's life.
          </p>
          <p className="text-base leading-relaxed mb-8 text-muted-foreground">
            Located in the heart of {CLINIC.city}, our clinic offers comprehensive services across General Medicine,
            Cardiology, Pediatrics, Gynecology, Orthopedics, Diabetes Care, and more — all under one roof.
          </p>

          <div className="grid sm:grid-cols-2 gap-3.5 mb-8">
            {[
              "5.0 Google Rating",
              `${CLINIC.stats.reviews} Verified Reviews`,
              `${CLINIC.stats.patients} Happy Patients`,
              "Multispecialty Under One Roof",
              "Patient-First Approach",
              "Affordable Consultation",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-border/40 shadow-sm">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                </div>
                <span className="text-sm font-semibold text-foreground/80">{item}</span>
              </div>
            ))}
          </div>

          <a href="#doctors" className="btn-primary inline-flex group rounded-2xl px-7 py-3.5">
            Meet Our Specialists
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Image with stats overlay */}
        <div className="relative order-1 lg:order-2">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
            <img
              src={clinicInterior}
              alt={`${CLINIC.name} – ${CLINIC.city}`}
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            {/* Stats bar */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-white/20 z-20">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: CLINIC.stats.years,    label: "Years of Service" },
                  { value: CLINIC.stats.doctors,  label: "Expert Doctors" },
                  { value: CLINIC.stats.patients, label: "Happy Patients" },
                ].map((s, i) => (
                  <div key={s.label} className={`text-center ${i < 2 ? "border-r border-border" : ""}`}>
                    <div className="text-2xl font-black font-heading text-primary">{s.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mission & Vision ── */}
      <div className="grid md:grid-cols-2 gap-6 mb-24">
        {[
          {
            icon: Target,
            title: "Our Mission",
            desc: `To provide accessible, compassionate, and quality medical care that improves the health and wellbeing of every patient and family we serve in ${CLINIC.city} and beyond.`,
            gradient: "bg-gradient-to-br from-primary to-teal-700",
            shadow: "shadow-primary/25",
          },
          {
            icon: Eye,
            title: "Our Vision",
            desc: `To be the most trusted multispecialty healthcare destination in ${CLINIC.city} — a place where expertise meets empathy, and where every patient feels heard, valued, and healed.`,
            gradient: "bg-gradient-to-br from-secondary to-cyan-700",
            shadow: "shadow-secondary/25",
          },
        ].map((item) => (
          <div key={item.title} className={`rounded-[2rem] p-10 text-white shadow-xl ${item.gradient} ${item.shadow} relative overflow-hidden group`}>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-black/10 rounded-full blur-2xl" />
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 border border-white/10 relative z-10">
              <item.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-heading relative z-10">{item.title}</h3>
            <p className="text-white/90 text-base leading-relaxed relative z-10">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* ── Why Choose Us ── */}
      <div className="text-center mb-14">
        <p className="section-label mb-3">Why Choose Us</p>
        <h3 className="text-3xl sm:text-4xl font-bold font-heading">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{CLINIC.shortName}</span> Difference
        </h3>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          We go beyond treatment — we build lasting relationships with every patient and family.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {whyUs.slice(0, 4).map((item) => (
          <div key={item.title} className="group bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-border/40 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className={`w-13 h-13 w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center mb-5 ${item.hover} transition-all duration-300 group-hover:scale-110`}>
              <item.icon className={`w-6 h-6 ${item.color} group-hover:text-white transition-colors duration-300`} />
            </div>
            <h4 className="font-bold font-heading text-base mb-2.5 group-hover:text-primary transition-colors">{item.title}</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Bottom 3 cards — wider */}
      <div className="grid sm:grid-cols-3 gap-5 mt-5">
        {whyUs.slice(4).map((item) => (
          <div key={item.title} className="group bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-border/40 relative overflow-hidden flex gap-5 items-start">
            <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center flex-shrink-0 ${item.hover} transition-all duration-300 group-hover:scale-110`}>
              <item.icon className={`w-6 h-6 ${item.color} group-hover:text-white transition-colors duration-300`} />
            </div>
            <div>
              <h4 className="font-bold font-heading text-base mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default AboutSection;
