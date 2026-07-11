import { Search, Camera } from "lucide-react";
import { useState } from "react";
import clinicInterior from "@/assets/clinic-interior.jpg";
import heroClinic from "@/assets/hero-clinic.jpg";
import { CLINIC } from "@/lib/clinic-config";

const images = [
  { src: clinicInterior, alt: "Clinic Exterior",    label: "Clinic Exterior",    category: "Facility", span: "md:col-span-2 md:row-span-2" },
  { src: heroClinic,     alt: "Reception",          label: "Reception",          category: "Facility", span: "md:col-span-1 md:row-span-1" },
  { src: clinicInterior, alt: "Laboratory",         label: "Laboratory",         category: "Equipment", span: "md:col-span-1 md:row-span-1" },
  { src: heroClinic,     alt: "Consultation Room",  label: "Consultation Room",  category: "Facility", span: "md:col-span-1 md:row-span-2" },
  { src: clinicInterior, alt: "Our Doctors",        label: "Our Doctors",        category: "Team",     span: "md:col-span-1 md:row-span-1" },
  { src: heroClinic,     alt: "Waiting Area",       label: "Waiting Area",       category: "Facility", span: "md:col-span-2 md:row-span-1" },
];

const categories = ["All", "Facility", "Equipment", "Team"];

const GallerySection = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? images : images.filter((img) => img.category === active);

  return (
    <section id="gallery" className="section-padding bg-[#F8FAFC]">
      <div className="container-clinic mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="section-label mb-3">Our Facility</p>
          <h2 className="section-title mb-4">
            Inside{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {CLINIC.name}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A glimpse into our modern, hygienic, and welcoming clinic in {CLINIC.city}.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-white text-muted-foreground border border-border/50 hover:border-primary/30 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[240px]">
          {filtered.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-3xl group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400" />

              {/* Category pill */}
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                {img.category}
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <p className="text-white font-bold text-lg font-heading mb-1">{img.label}</p>
                <div className="flex items-center gap-2 text-white/70 text-xs font-semibold uppercase tracking-wider">
                  <Search className="w-3 h-3" />
                  View Larger
                </div>
              </div>

              {/* Camera icon center on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            📍 Located at <strong className="text-foreground">{CLINIC.address}</strong>
          </p>
        </div>

      </div>
    </section>
  );
};

export default GallerySection;
