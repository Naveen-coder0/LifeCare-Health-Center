import { useRef, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Patient since 2021",
    rating: 5,
    text: "The care I received at LifeCare was exceptional. The doctors listened to my concerns and explained everything clearly. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Mother of two",
    rating: 5,
    text: "Dr. Patel was amazing with my kids. The pediatric department is top-notch and the staff made us feel very comfortable.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Cardiac Patient",
    rating: 5,
    text: "State-of-the-art facilities and a very professional team. My heart surgery recovery was faster than I expected thanks to their guidance.",
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  },
  {
    id: 4,
    name: "Sneha Gupta",
    role: "Regular Checkups",
    rating: 5,
    text: "I come here for my annual checkups. The process is smooth, the waiting time is minimal, and the reports are detailed.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
];

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section id="testimonials" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-primary blur-3xl"></div>
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-secondary blur-3xl"></div>
      </div>

      <div className="container-clinic mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="section-label mb-3">Testimonials</p>
            <h2 className="section-title">
              What Our Patients <span className="text-gradient">Say About Us</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-4">
              Real stories from real patients who have experienced our compassionate care.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-primary/20 bg-background hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-all duration-300 shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-primary/20 bg-background hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-all duration-300 shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-6 pb-10">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6">
                <div className="bg-card p-8 rounded-3xl h-full border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group">
                  {/* Quote Icon */}
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />

                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-foreground leading-relaxed italic mb-8 relative z-10">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <h4 className="font-bold font-heading text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-primary font-medium">{testimonial.role}</p>
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
