import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "How do I book an appointment?",
    a: "You can book an appointment online using our booking form on this website, call us at 9988324455, or visit the clinic in person. We recommend booking online for the fastest confirmation.",
  },
  {
    q: "Do you accept health insurance?",
    a: "Yes, we accept most major insurance plans including BlueCross BlueShield, Aetna, Cigna, UnitedHealthcare, Medicare, and Medicaid. Please call us to verify your specific plan coverage.",
  },
  {
    q: "Is emergency care available 24/7?",
    a: "Absolutely. Our emergency department operates 24 hours a day, 7 days a week, 365 days a year. We have dedicated trauma teams and on-call specialists available at all times.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash, all major credit/debit cards, mobile payments (Apple Pay, Google Pay), bank transfers, and insurance billing. EMI options are available for select procedures.",
  },
  {
    q: "How long are typical wait times?",
    a: "With our advanced booking system, most booked appointments wait less than 15 minutes. Walk-in patients are seen within 30–45 minutes during off-peak hours. Emergency cases receive immediate attention.",
  },
  {
    q: "Can I get my medical records online?",
    a: "Yes. All patients receive access to our patient portal where they can view lab results, prescriptions, appointment history, and doctor notes securely from any device.",
  },
  {
    q: "Do you offer home visit services?",
    a: "Yes, we offer home visits for elderly patients and those with mobility challenges. Please call us at least 24 hours in advance to schedule a home visit with one of our physicians.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-background relative">
      {/* Decorative elements */}
      <div className="absolute left-0 top-40 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-clinic mx-auto relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold uppercase tracking-widest mb-6">
              <HelpCircle className="w-3.5 h-3.5" />
              Common Questions
            </div>
            <h2 className="section-title mb-6">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">Questions</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
              Can't find what you're looking for? Our support team is always available to assist with specific inquiries.
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex group items-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
            </a>
          </div>

          <div className="lg:col-span-3 space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${open === i
                  ? "bg-white border-primary/20 shadow-lg ring-1 ring-primary/10"
                  : "bg-white/50 border-border/60 hover:border-primary/20"
                  }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className={`font-bold font-heading text-base ${open === i ? "text-primary" : "text-foreground"}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${open === i ? "bg-primary text-white rotate-180" : "bg-muted text-foreground"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-sm leading-relaxed text-muted-foreground border-t border-dashed border-border/60 pt-4">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
