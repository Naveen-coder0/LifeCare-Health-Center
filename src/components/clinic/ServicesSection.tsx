import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-clinic mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-label mb-3">Our Services</p>
          <h2 className="section-title mb-4">
            Comprehensive Medical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">
              Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From routine checkups to specialized treatments, we offer a full spectrum
            of healthcare services under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="group bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${service.bg} group-hover:scale-110`}
              >
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>

              <h3 className="font-bold font-heading text-lg mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {service.desc}
              </p>

              <div className="flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
