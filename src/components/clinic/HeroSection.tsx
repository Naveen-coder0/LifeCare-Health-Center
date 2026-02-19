import { Calendar, Phone, Shield, Clock, Users, ArrowRight } from "lucide-react";
import heroClinic from "@/assets/hero-clinic.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 w-3/4 h-full bg-gradient-to-l from-primary-light/30 to-transparent opacity-50 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-2/3 h-2/3 bg-gradient-to-r from-secondary-light/30 to-transparent opacity-40 blur-3xl" />

      <div className="container-clinic mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Label */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6 animate-fade-up bg-secondary/10 border border-secondary/20 text-secondary">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-secondary" />
              Trusted Healthcare Since 2014
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-up text-foreground font-heading">
              Trusted Care for <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">
                Your Family's
              </span>{" "}
              Health
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl animate-fade-up delay-100">
              Delivering compassionate, advanced medical care with a team of expert
              doctors and state-of-the-art facilities. Your health is our priority.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto animate-fade-up delay-200">
              <a href="#appointment" className="btn-primary group">
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Book Appointment
              </a>
              <a href="tel:+1234567890" className="btn-secondary group">
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Call Now
              </a>
            </div>

            {/* Trust Badges - Mini */}
            <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground animate-fade-up delay-300">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>NABH Certified</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>5000+ Patients</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in delay-200">
            <div className="relative w-full max-w-lg lg:max-w-none aspect-square lg:aspect-auto h-full">
              {/* Main Image with Shape */}
              <div className="absolute inset-4 bg-gradient-to-tr from-primary to-primary-light rounded-[2rem] rotate-3 opacity-20 blur-lg dark:opacity-40"></div>
              <img
                src={heroClinic}
                alt="Modern Clinic Facility"
                className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl z-10"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" }} // Optional geometric touch
              />

              {/* Floating Badge 1 */}
              <div className="absolute -bottom-6 left-6 z-20 bg-card p-4 rounded-xl shadow-lg border border-border/50 flex items-center gap-4 animate-bounce-slow">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">24/7 Service</div>
                  <div className="text-xs text-muted-foreground">Emergency Care</div>
                </div>
              </div>

               {/* Floating Badge 2 */}
               <div className="absolute top-10 -right-6 z-20 bg-card p-4 rounded-xl shadow-lg border border-border/50 hidden sm:flex items-center gap-3 animate-float">
                <div className="flex -space-x-3">
                    {[1,2,3].map((i) => (
                        <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-500 overflow-hidden`}>
                             <Users className="w-4 h-4 text-gray-400" />
                        </div>
                    ))}
                </div>
                <div className="text-xs font-semibold">
                    <span className="text-primary">50+</span> Doctors
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
