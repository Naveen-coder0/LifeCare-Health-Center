import { Phone, AlertCircle, MessageCircle } from "lucide-react";
import { CLINIC, whatsappBookingUrl } from "@/lib/clinic-config";

const EmergencyBanner = () => (
  <section className="py-10 px-4 sm:px-6 relative overflow-hidden bg-red-600">
    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

    <div className="container-clinic mx-auto relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white shadow-xl animate-pulse">
            <AlertCircle className="w-8 h-8" />
          </div>
          <div className="text-white">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-1">Medical Emergency?</h2>
            <p className="text-lg font-medium opacity-90">24/7 Support Available in {CLINIC.city}. Don't Hesitate.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <a
            href={`tel:${CLINIC.phone}`}
            className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white text-red-600 font-bold text-base shadow-2xl hover:scale-105 hover:bg-red-50 transition-all"
          >
            <Phone className="w-5 h-5 fill-current" />
            Call {CLINIC.phoneDisplay}
          </a>
          <a
            href={whatsappBookingUrl("EMERGENCY: I need urgent medical help.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#25D366] text-white font-bold text-base shadow-xl hover:scale-105 hover:bg-[#1ebe5d] transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default EmergencyBanner;
