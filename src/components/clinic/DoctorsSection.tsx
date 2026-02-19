import { Calendar, Star, Linkedin, Twitter, Mail } from "lucide-react";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import doctor4 from "@/assets/doctor-4.jpg";

const doctors = [
  {
    image: doctor1,
    name: "Dr. Sarah Mitchell",
    degree: "MBBS, MD (Internal Medicine)",
    specialization: "General Physician",
    experience: "12 Years",
    rating: 4.9,
  },
  {
    image: doctor2,
    name: "Dr. James Carter",
    degree: "BDS, MDS (Oral Surgery)",
    specialization: "Dental Surgeon",
    experience: "9 Years",
    rating: 4.8,
  },
  {
    image: doctor3,
    name: "Dr. Robert Chen",
    degree: "MBBS, MS (Orthopedics)",
    specialization: "Orthopedic Surgeon",
    experience: "18 Years",
    rating: 4.9,
  },
  {
    image: doctor4,
    name: "Dr. Aisha Patel",
    degree: "MBBS, MD (Pediatrics)",
    specialization: "Pediatrician",
    experience: "7 Years",
    rating: 4.7,
  },
];

const DoctorsSection = () => {
  return (
    <section id="doctors" className="section-padding bg-background relative">
      <div className="container-clinic mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-label mb-3">Our Team</p>
          <h2 className="section-title mb-4">
            Meet Our Expert{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">Doctors</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our team of board-certified specialists brings decades of combined experience
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
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 filter grayscale-[10%] group-hover:grayscale-0"
                  loading="lazy"
                />
                {/* Social Overlay */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  {[Linkedin, Twitter, Mail].map((Icon, i) => (
                    <button key={i} className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="p-6 relative">
                {/* Rating Badge */}
                <div className="absolute -top-5 right-6 bg-white shadow-md rounded-full px-3 py-1 flex items-center gap-1.5 border border-border/50">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span className="text-xs font-bold">{doc.rating}</span>
                </div>

                <div className="mb-4">
                  <h3 className="font-bold font-heading text-lg text-foreground mb-1 group-hover:text-primary transition-colors">{doc.name}</h3>
                  <p className="text-xs font-medium text-secondary bg-secondary/10 inline-block px-2 py-0.5 rounded-md mb-2">
                    {doc.degree}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {doc.specialization} · <span className="text-foreground font-semibold">{doc.experience}</span>
                  </p>
                </div>

                <a
                  href="#appointment"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 bg-muted/50 text-muted-foreground hover:bg-primary hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20"
                >
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
