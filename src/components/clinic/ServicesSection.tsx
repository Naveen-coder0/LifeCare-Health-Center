import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { CLINIC } from "@/lib/clinic-config";

// Patient-outcome benefit lines per service
const benefits: Record<string, string> = {
  "general-physician": "Get diagnosed & treated same day",
  "dental-care": "Pain-free procedures, brighter smile",
  "pediatrics": "Child-friendly care parents trust",
  "gynecology": "Private, compassionate women's care",
  "orthopedics": "Restore mobility, reduce pain fast",
  "diagnostics": "Accurate results in under 2 hours",
  "vaccination": "Protect your family, stay healthy",
  "emergency-care": "Rapid response, 24/7 availability",
};

const ServicesSection = () => (
  <section id="services" className="section-padding bg-muted/30">
    <div className="container-clinic mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="section-label mb-3">Our Services</p>
        <h2 className="section-title mb-4">
          Healthcare Services in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">
            {CLINIC.city}
          </span>
        </h2>
        <p className="text-lg text-muted-foreground">
          From routine checkups to specialized treatments — all under one roof,
          close to home.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <Link
            key={service.id}
            to={`/services/${service.id}`}
            className="group bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block flex flex-col"
          >
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${service.bg} group-hover:scale-110`}
            >
              <service.icon className={`w-7 h-7 ${service.color}`} />
            </div>

            <h3 className="font-bold font-heading text-lg mb-2 group-hover:text-primary transition-colors">
              {service.title}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
              {service.desc}
            </p>

            {/* Patient outcome benefit */}
            <div className="flex items-center gap-2 text-xs font-semibold text-green-700 bg-green-50 rounded-lg px-3 py-2 mb-5">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
              {benefits[service.id] ?? "Expert care, real results"}
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3">
              Book This Service <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="#appointment"
          className="btn-primary px-8 py-3.5 text-base shadow-xl shadow-primary/25"
        >
          Book Any Service Now
        </a>
      </div>
    </div>
  </section>
);

export default ServicesSection;
