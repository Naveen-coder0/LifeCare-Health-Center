import { Calendar, Star, Users, Award } from "lucide-react";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import doctor4 from "@/assets/doctor-4.jpg";
import { CLINIC, whatsappBookingUrl } from "@/lib/clinic-config";

const doctors = [
  {
    image: doctor1,
    name: "Dr. Mohit",
    degree: "MBBS, MD (General Medicine)",
    specialization: "General Physician",
    experience: "10+ Years",
    patients: "1,500+",
    rating: 5.0,
    available: true,
    highlight: "Primary Care Expert",
  },
  {
    image: doctor2,
    name: "Dr. Gurtej Sidhu",
    degree: "MBBS, MD, DM (Cardiology)",
    specialization: "Cardiologist",
    experience: "12+ Years",
    patients: "2,000+",
    rating: 5.0,
    available: true,
    highlight: "Heart Specialist",
  },
  {
    image: doctor3,
    name: "Dr. Priya Sharma",
    degree: "MBBS, MS (Gynecology)",
    specialization: "Gynecologist",
    experience: "8+ Years",
    patients: "1,200+",
    rating: 5.0,
    available: true,
    highlight: "Women's Health",
  },
  {
    image: doctor4,
    name: "Dr. Arjun Mehta",
    degree: "MBBS, MD (Pediatrics)",
    specialization: "Pediatrician",
    experience: "7+ Years",
    patients: "1,800+",
    rating: 5.0,
    available: false,
    highlight: "Child Specialist",
  },
];

const DoctorsSection = () => (
  <section id="doctors" className="section-padding bg-background relative">
    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    <div className="container-clinic mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="section-label mb-3">Our Team</p>
        <h2 className="section-title mb-4">
          Meet Our Expert{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Doctors
          </span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Qualified specialists in {CLINIC.city} with years of combined experience
          and genuine dedication to your care.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {doctors.map((doc) => (
          <div
            key={doc.name}
            className="group bg-white rounded-3xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-72">
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className={`absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                doc.available ? "bg-green-500 text-white" : "bg-slate-500 text-white"
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${doc.available ? "bg-white animate-pulse" : "bg-white/60"}`} />
                {doc.available ? "Available Today" : "Next Available"}
              </div>
              {/* Highlight badge */}
              <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1">
                <Award className="w-3 h-3" />
                {doc.highlight}
              </div>
            </div>

            {/* Info */}
            <div className="p-6 relative">
              <div className="absolute -top-5 right-6 bg-white shadow-md rounded-full px-3 py-1 flex items-center gap-1.5 border border-border/50">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="text-xs font-bold">{doc.rating}</span>
              </div>

              <div className="mb-4">
                <h3 className="font-bold font-heading text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                  {doc.name}
                </h3>
                <p className="text-xs font-medium text-secondary bg-secondary/10 inline-block px-2 py-0.5 rounded-md mb-2">
                  {doc.specialization}
                </p>
                <p className="text-xs text-muted-foreground mb-1">{doc.degree}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">{doc.experience} Exp.</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" /> {doc.patients} patients
                  </span>
                </div>
              </div>

              <a
                href="#appointment"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 bg-primary/5 text-primary hover:bg-primary hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-4">
          Need help choosing the right specialist? We'll guide you.
        </p>
        <a
          href={whatsappBookingUrl("Hi! I need help choosing the right doctor at Medstar Clinic.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-[#25D366] text-white hover:bg-[#1ebe5d] transition-all shadow-lg shadow-green-500/20"
        >
          Ask on WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default DoctorsSection;
