import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { CLINIC, whatsappBookingUrl } from "@/lib/clinic-config";

const faqs = [
  {
    q: "Do I need an appointment to visit Medstar Clinic?",
    a: `While walk-ins are welcome during working hours, we recommend booking an appointment online or calling us at ${CLINIC.phoneDisplay} to minimize your waiting time and ensure the right specialist is available for you.`,
  },
  {
    q: "What are your consultation timings?",
    a: "We are open Monday to Saturday from 9:00 AM to 8:00 PM, and on Sundays from 10:00 AM to 2:00 PM. Emergency consultations are available 24/7. Please call us for after-hours emergencies.",
  },
  {
    q: "Do you accept walk-in patients?",
    a: "Yes, we welcome walk-in patients during our working hours. However, for specialist consultations like Cardiology or Gynecology, we recommend booking in advance to avoid waiting. Emergency cases are always attended to immediately.",
  },
  {
    q: "Which specialties are available at Medstar?",
    a: "Medstar Multispecialty Clinic offers General Medicine, Cardiology, Pediatrics, Gynecology, Orthopedics, Diabetes Care, Preventive Health Checkups, and Emergency Consultation — all under one roof in Sector 45, Chandigarh.",
  },
  {
    q: "How do I book an appointment?",
    a: `You can book an appointment using our online booking form on this website, call us at ${CLINIC.phoneDisplay}, message us on WhatsApp, or visit the clinic directly. Online booking gets you the fastest confirmation.`,
  },
  {
    q: "Is emergency care available 24/7?",
    a: `Yes. Our emergency consultation line is available 24 hours a day, 7 days a week. For urgent medical needs, call us at ${CLINIC.phoneDisplay} and our on-call doctor will assist you immediately.`,
  },
  {
    q: "How long are typical wait times?",
    a: "With our appointment system, most booked patients are seen within 10–15 minutes. Walk-in patients are typically attended to within 20–30 minutes during regular hours. We prioritize minimal waiting time for all our patients.",
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
              href={whatsappBookingUrl("Hi! I have a question about your services.")}
              target="_blank"
              rel="noopener noreferrer"
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
