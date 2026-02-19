import { Search } from "lucide-react";
import clinicInterior from "@/assets/clinic-interior.jpg";
import heroClinic from "@/assets/hero-clinic.jpg";

const images = [
  { src: clinicInterior, alt: "Treatment Room", label: "Treatment Room", span: "md:col-span-2 md:row-span-2" },
  { src: heroClinic, alt: "Reception Area", label: "Reception Area", span: "md:col-span-1 md:row-span-1" },
  { src: clinicInterior, alt: "Diagnostic Lab", label: "Diagnostic Lab", span: "md:col-span-1 md:row-span-1" },
  { src: heroClinic, alt: "Consultation Room", label: "Consultation Room", span: "md:col-span-1 md:row-span-2" },
  { src: clinicInterior, alt: "Medical Equipment", label: "Medical Equipment", span: "md:col-span-1 md:row-span-1" },
  { src: heroClinic, alt: "Patient Ward", label: "Patient Ward", span: "md:col-span-2 md:row-span-1" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-muted/50">
      <div className="container-clinic mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-label mb-3">Our Facility</p>
          <h2 className="section-title mb-4">
            State-of-the-Art{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">Clinic Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Take a glimpse into our modern, hygienic, and welcoming healthcare environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay with glassmorphism */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
              >
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-bold text-lg mb-1 font-heading">{img.label}</p>
                  <div className="flex items-center gap-2 text-white/80 text-xs uppercase tracking-wider font-semibold">
                    <Search className="w-3 h-3" />
                    View Larger
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
