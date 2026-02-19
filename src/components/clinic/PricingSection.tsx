import { Check, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "Basic Checkup",
    price: "₹499",
    period: "per visit",
    description: "Essential health screening for routine wellness monitoring",
    features: [
      "Complete Blood Count",
      "Blood Pressure & BMI",
      "Physical Examination",
      "Doctor Consultation",
      "Health Report",
    ],
    popular: false,
    color: "bg-blue-50 text-blue-600",
    btnColor: "bg-blue-100 text-blue-700 hover:bg-blue-200",
  },
  {
    name: "Full Body Checkup",
    price: "₹2,499",
    period: "per visit",
    description: "Comprehensive health assessment covering all major organs and systems",
    features: [
      "60+ Lab Tests",
      "Chest X-Ray & ECG",
      "Ultrasound Abdomen",
      "Thyroid Profile",
      "Specialist Consultation",
      "Digital Health Report",
      "Diet & Lifestyle Advice",
    ],
    popular: true,
    color: "bg-primary text-white",
    btnColor: "bg-white text-primary hover:bg-white/90",
  },
  {
    name: "Dental Package",
    price: "₹799",
    period: "per visit",
    description: "Complete oral health evaluation and preventive dental care",
    features: [
      "Dental X-Rays",
      "Teeth Cleaning",
      "Cavity Screening",
      "Gum Assessment",
      "Treatment Plan",
    ],
    popular: false,
    color: "bg-teal-50 text-teal-600",
    btnColor: "bg-teal-100 text-teal-700 hover:bg-teal-200",
  },
  {
    name: "Emergency Consult",
    price: "₹999",
    period: "flat fee",
    description: "Immediate emergency assessment available 24/7 any day of the week",
    features: [
      "24/7 Availability",
      "Rapid Assessment",
      "Emergency Labs",
      "Specialist On-Call",
      "Priority Treatment",
    ],
    popular: false,
    color: "bg-rose-50 text-rose-600",
    btnColor: "bg-rose-100 text-rose-700 hover:bg-rose-200",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-clinic mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5 fill-current" />
            Affordable Care
          </div>
          <h2 className="section-title mb-4">
            Transparent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">Pricing Plans</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Quality healthcare shouldn't break the bank. Choose a package that fits
            your needs with no hidden costs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-[2rem] p-8 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full ${plan.popular
                ? "bg-primary text-white shadow-xl shadow-primary/30 scale-105 z-10 ring-4 ring-primary/20"
                : "bg-card border border-border/50 shadow-sm hover:shadow-lg"
                }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-white/10 text-center text-xs font-bold py-1.5 uppercase tracking-widest text-white/90">
                  Most Popular
                </div>
              )}

              <div className={plan.popular ? "mt-4" : ""}>
                <h3 className={`font-bold font-heading text-xl mb-2 ${plan.popular ? "text-white" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 leading-relaxed ${plan.popular ? "text-white/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>

                <div className="mb-8 p-4 rounded-2xl bg-black/5 flex items-baseline gap-1">
                  <span className={`text-4xl font-bold font-heading ${plan.popular ? "text-white" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm font-medium ${plan.popular ? "text-white/70" : "text-muted-foreground"}`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-3">
                      <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular ? "bg-white/20" : "bg-primary/10"}`}>
                        <Check className={`w-3 h-3 ${plan.popular ? "text-white" : "text-primary"}`} />
                      </div>
                      <span className={`text-sm font-medium ${plan.popular ? "text-white/90" : "text-foreground/80"}`}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </ul>

                <a
                  href="#appointment"
                  className={`block text-center py-4 rounded-xl text-sm font-bold transition-transform active:scale-95 shadow-sm ${plan.btnColor}`}
                >
                  Choose Plan
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs mt-12 text-muted-foreground">
          * Prices are inclusive of consultation fees. Insurance accepted. Call us for corporate packages.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
