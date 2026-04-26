import { MessageCircle } from "lucide-react";
import { CLINIC, whatsappBookingUrl } from "@/lib/clinic-config";

const FloatingWhatsApp = () => (
  <a
    href={whatsappBookingUrl()}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
    aria-label="Chat on WhatsApp"
  >
    {/* Tooltip */}
    <span className="hidden sm:block bg-white text-slate-800 px-3 py-2 rounded-xl text-xs font-bold shadow-lg border border-border opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap">
      💬 Chat with {CLINIC.shortName}
    </span>

    {/* Button */}
    <div className="relative w-14 h-14 flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300">
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <MessageCircle className="w-7 h-7 fill-current relative z-10" />
    </div>
  </a>
);

export default FloatingWhatsApp;
