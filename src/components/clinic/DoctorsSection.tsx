import { Calendar, Star, Users, Award, Stethoscope } from "lucide-react";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import doctor4 from "@/assets/doctor-4.jpg";
import { CLINIC, whatsappBookingUrl } from "@/lib/clinic-config";

const doctors = [
  {
    image: doctor1,
    name: "Dr. Anil Sharma",
    degree: "MBBS, MD (Internal Medicine)",
    specialization: "General Physician",
    experience: "14 Years",
    patients: "3,200+",
    rating: 5.0,
    available: true,
    highlight: "Primary Care Expert",
    accentColor: "from-blue-500 to-blue-700",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    image: doctor2,
    name: "Dr. Rajeev Kapoor",
    degree: "MBBS, MD, DM (Cardiology)",
    specialization: "Cardiologist",
    experience: "16 Years",
    patients: "2,800+",
    rating: 5.0,
    available: true,
    highlight: "Heart Specialist",
    accentColor: "from-red-500 to-rose-700",
    tagColor: "bg-red-100 text-red-700",
  },
  {
    image: doctor3,
    name: "Dr. Sunita Verma",
    degree: "MBBS, MS (Obstetrics & Gynecology)",
    specialization: "Gynecologist",
    experience: "11 Years",
    patients: "2,100+",
    rating: 5.0,
    available: true,
    highlight: "Women's Health",
    accentColor: "from-pink-500 to-rose-600",
    tagColor: "bg-pink-100 text-pink-700",
  },
  {
    image: doctor4,
    name: "Dr. Vikram Nair",
    degree: "MBBS, MD (Pediatrics)",
    specialization: "Pediatrician",
    experience: "9 Years",
    patients: "2,500+",
    rating: 5.0,
    available: false,
    highlight: "Child Specialist",
    accentColor: "from-violet-500 to-purple-700",
    tagColor: "bg-violet-100 text-violet-700",
  },
];

const DoctorsSection = () => (
  <section id="doctors" className="section-padding bg-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/4 rounded-full blur-3xl pointer-events-none" />

    <div className="container-clinic mx-auto relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="section-label mb-3">Our Team</p>
        <h2 className="section-title mb-4">
          Meet Our Expert{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Doctors
          </span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Qualified specialists with years of combined experience and genuine dedication to your care.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {doctors.map((doc) => (
          <div
            key={doc.name}
            className="group bg-white rounded-3xl overflow-hidden border border-border/40 shadow-sm hover:shadow-2xl transition-all duration-400 hover:-translate-y-3 relative"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-72">
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-t ${doc.accentColor} opacity-0 group-hover:opacity-30 transition-opacity duration-400 z-10`} />
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-full object-cover object-top transition-transform duration-600 group-hover:scale-108"
                loading="lazy"
              />

              {/* Availability badge */}
              <div className={`absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm ${doc.available ? "bg-green-500/90 text-white" : "bg-slate-500/90 text-white"}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${doc.available ? "bg-white animate-pulse" : "bg-white/60"}`} />
                {doc.available ? "Available Today" : "Next Available"}
              </div>

              {/* Specialty highlight */}
              <div className={`absolute bottom-4 left-4 z-20 ${doc.tagColor} px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 backdrop-blur-sm`}>
                <Award className="w-3 h-3" />
                {doc.highlight}
              </div>
            </div>

            {/* Info */}
            <div className="p-6 relative">
              {/* Rating float */}
              <div className="absolute -top-5 right-5 bg-white shadow-lg rounded-full px-3 py-1.5 flex items-center gap-1.5 border border-border/40">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="text-xs font-black">{doc.rating}</span>
              </div>

              <h3 className="font-bold font-heading text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                {doc.name}
              </h3>

              <div className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-lg mb-2.5 ${doc.tagColor}`}>
                <Stethoscope className="w-3 h-3" />
                {doc.specialization}
              </div>

              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{doc.degree}</p>

              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-5 pb-5 border-b border-border/40">
                <div className="flex items-center gap-1">
                  <span className="font-black text-foreground">{doc.experience}</span>
                  <span>Exp.</span>
                </div>
                <span className="text-border">·</span>
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  <span className="font-semibold">{doc.patients}</span>
                </div>
              </div>

              <a
                href="#appointment"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold transition-all duration-300 bg-primary/6 text-primary hover:bg-primary hover:text-white shadow-sm hover:shadow-lg hover:shadow-primary/25"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <p className="text-muted-foreground mb-5 text-base">
          Need help choosing the right specialist? We'll guide you.
        </p>
        <a
          href={whatsappBookingUrl("Hi! I need help choosing the right doctor.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold text-sm bg-[#25D366] text-white hover:bg-[#1ebe5d] transition-all shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:-translate-y-0.5"
        >
          💬 Ask on WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default DoctorsSection;
