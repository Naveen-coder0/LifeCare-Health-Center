import { Star, ChevronLeft, ChevronRight, Quote, Users, ThumbsUp, BadgeCheck } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { CLINIC } from "@/lib/clinic-config";

const testimonials = [
  {
    id: 1,
    name: "Arjun Malhotra",
    role: "General Checkup · Chandigarh",
    rating: 5,
    text: "Absolutely outstanding experience. The doctors are thorough, professional, and genuinely caring. I walked in anxious and left feeling completely reassured. The clinic is spotless and the staff is incredibly welcoming.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "1 week ago",
    verified: true,
  },
  {
    id: 2,
    name: "Pooja Bhatia",
    role: "Pediatrics · Mother of two",
    rating: 5,
    text: "The pediatric care here is exceptional. My kids actually look forward to their checkups! The doctor is so patient and gentle — my 4-year-old was laughing within minutes. We won't go anywhere else.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "2 weeks ago",
    verified: true,
  },
  {
    id: 3,
    name: "Suresh Iyer",
    role: "Cardiology · Heart Checkup",
    rating: 5,
    text: "The cardiologist here is truly exceptional. After months of vague symptoms, I finally got a clear diagnosis and a treatment plan that's actually working. The ECG and echo facilities are top-notch.",
    image: "https://randomuser.me/api/portraits/men/58.jpg",
    date: "3 weeks ago",
    verified: true,
  },
  {
    id: 4,
    name: "Kavita Reddy",
    role: "Preventive Checkup · Regular Patient",
    rating: 5,
    text: "I've been coming here for my annual health checkups for two years now. The experience is always seamless — minimal waiting, detailed reports, and staff that genuinely cares. Best clinic in Chandigarh.",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    date: "1 month ago",
    verified: true,
  },
  {
    id: 5,
    name: "Manpreet Singh",
    role: "Orthopedics · Sports Injury",
    rating: 5,
    text: "Came in with a knee injury that two other clinics couldn't properly diagnose. The orthopedic specialist here identified the issue immediately and had me back on my feet in 5 weeks. Truly world-class care.",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
    date: "3 weeks ago",
    verified: true,
  },
];

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  return (
    <section id="testimonials" className="section-padding bg-[#F8FAFC] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-[0.04] pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-primary blur-3xl" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="container-clinic mx-auto relative z-10">

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {[
            { icon: Star,       value: CLINIC.stats.rating,  label: "Google Rating",    color: "text-amber-500",  bg: "bg-amber-50",   border: "border-amber-100" },
            { icon: Users,      value: CLINIC.stats.patients, label: "Happy Patients",  color: "text-primary",    bg: "bg-primary/8",  border: "border-primary/10" },
            { icon: ThumbsUp,   value: "98%",                label: "Would Recommend",  color: "text-green-600",  bg: "bg-green-50",   border: "border-green-100" },
            { icon: BadgeCheck, value: CLINIC.stats.reviews, label: "Google Reviews",   color: "text-secondary",  bg: "bg-secondary/8", border: "border-secondary/10" },
          ].map((stat) => (
            <div key={stat.label} className={`bg-white rounded-2xl p-5 text-center border ${stat.border} shadow-sm hover:shadow-md transition-shadow`}>
              <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center mx-auto mb-3`}>
                <stat.icon className={`w-5 h-5 ${stat.color} fill-current`} />
              </div>
              <div className="text-2xl font-black font-heading text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Header + nav */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="section-label mb-3">Patient Reviews</p>
            <h2 className="section-title">
              What Patients in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {CLINIC.city}
              </span>{" "}
              Say
            </h2>
            <p className="text-muted-foreground text-lg mt-4">
              Real stories from real patients who trust {CLINIC.name}.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-12 h-12 rounded-full border-2 border-primary/20 bg-white hover:bg-primary hover:text-white hover:border-primary text-primary flex items-center justify-center transition-all duration-300 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-12 h-12 rounded-full border-2 border-primary/20 bg-white hover:bg-primary hover:text-white hover:border-primary text-primary flex items-center justify-center transition-all duration-300 shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-6 pb-10">
            {testimonials.map((t) => (
              <div key={t.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6">
                <div className="bg-white p-8 rounded-3xl h-full border border-border/40 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group flex flex-col">

                  {/* Decorative quote */}
                  <div className="absolute top-5 right-5 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/8 to-secondary/8 flex items-center justify-center group-hover:from-primary/15 group-hover:to-secondary/15 transition-colors">
                    <Quote className="w-7 h-7 text-primary/30 group-hover:text-primary/50 transition-colors" />
                  </div>

                  {/* Stars + date */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-1">{t.date}</span>
                  </div>

                  <p className="text-foreground/80 leading-relaxed mb-8 relative z-10 flex-1 text-sm">
                    "{t.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3.5 mt-auto pt-5 border-t border-border/40">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/15 shadow-sm"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold font-heading text-sm">{t.name}</h4>
                        {t.verified && <BadgeCheck className="w-4 h-4 text-primary" />}
                      </div>
                      <p className="text-xs text-muted-foreground font-medium">{t.role}</p>
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

export default TestimonialsSection;
