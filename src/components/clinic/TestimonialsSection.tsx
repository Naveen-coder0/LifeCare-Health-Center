import { Star, ChevronLeft, ChevronRight, Quote, Users, ThumbsUp } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { CLINIC } from "@/lib/clinic-config";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "General Checkup · Chandigarh",
    rating: 5,
    text: "Dr. Mitchell was incredibly thorough. She explained everything clearly and I left feeling confident about my health. The clinic is clean, modern, and the staff is very welcoming.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Pediatrics · Mother of two",
    rating: 5,
    text: "Dr. Patel is amazing with kids. My 4-year-old was scared but she made him laugh and feel at ease. The pediatric department is top-notch. We won't go anywhere else.",
    image: "https://randomuser.me/api/portraits/women/76.jpg",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Orthopedics · Sports Injury",
    rating: 5,
    text: "Dr. Chen diagnosed my knee injury in one visit after two other clinics missed it. His treatment plan had me back on the field in 6 weeks. Truly exceptional care.",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    role: "Annual Checkup · Regular Patient",
    rating: 5,
    text: "I've been coming here for 3 years. The booking process is seamless, waiting time is minimal, and the reports are always detailed. Highly recommend to everyone in Chandigarh.",
    image: "https://randomuser.me/api/portraits/women/57.jpg",
    date: "1 week ago",
  },
];

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  return (
    <section id="testimonials" className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-primary blur-3xl" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="container-clinic mx-auto relative z-10">

        {/* Trust stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {[
            { icon: Star, value: CLINIC.stats.rating, label: "Average Rating", color: "text-amber-500" },
            { icon: Users, value: CLINIC.stats.patients, label: "Happy Patients", color: "text-primary" },
            { icon: ThumbsUp, value: "98%", label: "Would Recommend", color: "text-green-600" },
            { icon: Star, value: "500+", label: "Google Reviews", color: "text-amber-500" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-5 text-center border border-border/50 shadow-sm">
              <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color} fill-current`} />
              <div className="text-2xl font-bold font-heading text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="section-label mb-3">Patient Reviews</p>
            <h2 className="section-title">
              What Patients in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">
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
              className="w-12 h-12 rounded-full border border-primary/20 bg-background hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-all duration-300 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-12 h-12 rounded-full border border-primary/20 bg-background hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-all duration-300 shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-6 pb-10">
            {testimonials.map((t) => (
              <div key={t.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6">
                <div className="bg-card p-8 rounded-3xl h-full border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group flex flex-col">
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs text-muted-foreground ml-2">{t.date}</span>
                  </div>

                  <p className="text-foreground leading-relaxed italic mb-8 relative z-10 flex-1">
                    "{t.text}"
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <h4 className="font-bold font-heading text-base">{t.name}</h4>
                      <p className="text-xs text-primary font-medium">{t.role}</p>
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
