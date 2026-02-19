import { CheckCircle2, Target, Eye, Award, UserCheck, Zap, HeartHandshake, ArrowRight } from "lucide-react";
import clinicInterior from "@/assets/clinic-interior.jpg";

const values = [
  { icon: UserCheck, title: "Experienced Doctors", desc: "Board-certified specialists with decades of clinical expertise." },
  { icon: Zap, title: "Advanced Equipment", desc: "State-of-the-art diagnostic and treatment technology." },
  { icon: Award, title: "Affordable Pricing", desc: "Transparent pricing with flexible payment plans for all." },
  { icon: HeartHandshake, title: "24/7 Support", desc: "Round-the-clock emergency care and patient support." },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl mix-blend-multiply pointer-events-none" />

      <div className="container-clinic mx-auto relative z-10">
        {/* Intro + Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-primary/60 animate-pulse" />
              About Us
            </div>
            <h2 className="section-title mb-6">
              Your Health Is Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">Greatest Priority</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              LifeCare Health Center has been a beacon of trusted medical care for over a decade.
              We combine <strong className="text-foreground">cutting-edge technology</strong> with genuine compassion to deliver healthcare
              experiences that make a real difference in people's lives.
            </p>
            <p className="text-base leading-relaxed mb-8 text-muted-foreground">
              Our multidisciplinary team of specialists collaborates seamlessly to provide
              comprehensive, patient-centered care across all major medical disciplines.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "NABH Accredited",
                "ISO 9001:2015 Certified",
                "15,000+ Happy Patients",
                "Advanced Digital Records",
                "Multilingual Staff",
                "Insurance Support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            <a href="#doctors" className="btn-primary inline-flex group">
              Meet Our Specialists
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
              <img
                src={clinicInterior}
                alt="LifeCare Clinic Interior"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Floating card */}
              <div
                className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/20 z-20"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-4xl font-bold font-heading text-primary mb-1">10+</div>
                    <div className="text-sm font-medium text-muted-foreground">Years of Excellence</div>
                  </div>
                  <div className="h-12 w-px bg-border" />
                  <div>
                    <div className="text-4xl font-bold font-heading text-primary mb-1">50+</div>
                    <div className="text-sm font-medium text-muted-foreground">Expert Doctors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {[
            {
              icon: Target,
              title: "Our Mission",
              desc: "To provide accessible, compassionate, and technologically advanced medical care that improves the health and wellbeing of every patient we serve, regardless of background.",
              gradient: "bg-gradient-to-br from-primary to-blue-700",
              shadow: "shadow-primary/25",
            },
            {
              icon: Eye,
              title: "Our Vision",
              desc: "To be the most trusted healthcare destination in the region — a place where innovation meets empathy, and where every patient feels heard, valued, and healed.",
              gradient: "bg-gradient-to-br from-secondary to-teal-700",
              shadow: "shadow-secondary/25",
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`rounded-[2rem] p-10 text-white shadow-xl ${item.gradient} ${item.shadow} relative overflow-hidden group`}
            >
              {/* Decorative circle */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 shadow-inner border border-white/10">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-heading">{item.title}</h3>
              <p className="text-white/90 text-base leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">Why Choose Us</p>
          <h3 className="text-3xl sm:text-4xl font-bold font-heading">
            The LifeCare Difference
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item) => (
            <div key={item.title} className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h4 className="font-bold font-heading text-lg mb-3 text-center group-hover:text-primary transition-colors">{item.title}</h4>
              <p className="text-sm leading-relaxed text-muted-foreground text-center">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
