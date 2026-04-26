import { Calendar, Phone, MessageCircle, Clock } from "lucide-react";
import { CLINIC, whatsappBookingUrl } from "@/lib/clinic-config";

const UrgentCTASection = () => (
  <section className="py-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-primary via-blue-700 to-primary">
    {/* Decorative blobs */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

    <div className="container-clinic mx-auto relative z-10 text-center text-white">
      {/* Open Now indicator */}
      <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-semibold mb-8">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        Open Now · {CLINIC.hours.weekdays}
      </div>

      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-4 leading-tight">
        Need a Doctor Today?
      </h2>
      <p className="text-xl text-white/85 mb-3">
        Book your visit in under 30 seconds.
      </p>
      <p className="text-base text-white/70 mb-12 max-w-xl mx-auto">
        Same-day appointments available. Walk-ins welcome. Serving patients across {CLINIC.city}.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#appointment"
          className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-white text-primary hover:bg-white/90 transition-all shadow-2xl hover:scale-105"
        >
          <Calendar className="w-5 h-5" />
          Book Now
        </a>
        <a
          href={`tel:${CLINIC.phone}`}
          className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-white/15 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/25 transition-all hover:scale-105"
        >
          <Phone className="w-5 h-5" />
          Call {CLINIC.phoneDisplay}
        </a>
        <a
          href={whatsappBookingUrl("Hi! I need to book an appointment today.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-[#25D366] text-white hover:bg-[#1ebe5d] transition-all shadow-xl shadow-green-900/30 hover:scale-105"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
      </div>

      <div className="mt-10 flex items-center justify-center gap-2 text-white/60 text-sm">
        <Clock className="w-4 h-4" />
        Emergency line available 24/7 · {CLINIC.phoneDisplay}
      </div>
    </div>
  </section>
);

export default UrgentCTASection;
