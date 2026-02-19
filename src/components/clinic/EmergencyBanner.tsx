import { Phone, AlertCircle, ArrowRight } from "lucide-react";

const EmergencyBanner = () => {
  return (
    <section
      className="py-12 px-4 sm:px-6 relative overflow-hidden bg-red-600"
    >
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container-clinic mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white shadow-xl animate-pulse">
              <AlertCircle className="w-10 h-10" />
            </div>
            <div className="text-white">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-2 tracking-tight">
                Medical Emergency?
              </h2>
              <h3 className="text-xl font-medium opacity-95">
                24/7 Support Available. Don't Hesitate.
              </h3>
            </div>
          </div>

          <a
            href="tel:9988324455"
            className="group flex-shrink-0 flex items-center gap-4 px-8 py-4 rounded-2xl bg-white text-red-600 font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-red-50"
          >
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors">
              <Phone className="w-5 h-5 fill-current" />
            </div>
            <span>Call 9988324455</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmergencyBanner;
