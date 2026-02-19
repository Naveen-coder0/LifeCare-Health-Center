import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // WhatsApp Redirect
    const phoneNumber = "9988324455";
    const message = `Halo LifeCare!%0AMy Name: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');

    toast.success("Opening WhatsApp to send your message...");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 z-0 hidden lg:block"></div>

      <div className="container-clinic mx-auto relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="section-label mb-3">Get in Touch</p>
          <h2 className="section-title mb-4">
            We'd Love to Hear <span className="text-gradient">From You</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions or need assistance? Our team is here to help you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Address Card */}
              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Our Location</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Chandigarh,<br />India
                </p>
              </div>

              {/* Phone Card */}
              <a href="tel:9988324455" className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 group block">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Phone Number</h3>
                <p className="text-muted-foreground text-sm">9988324455</p>
                <p className="text-xs text-primary mt-2 font-medium">Available 24/7</p>
              </a>

              {/* Email Card */}
              <a href="mailto:naveen.maan2006@gmail.com" className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 group block">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Email Address</h3>
                <p className="text-muted-foreground text-sm">naveen.maan2006@gmail.com</p>
                <p className="text-xs text-primary mt-2 font-medium">Drop us a line</p>
              </a>

              {/* Whatsapp Card */}
              <a
                href="https://wa.me/9988324455"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366]/5 rounded-2xl p-6 border border-[#25D366]/20 shadow-sm hover:shadow-lg transition-all duration-300 group block"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                <p className="text-muted-foreground text-sm">Chat with Us</p>
                <p className="text-xs text-[#25D366] mt-2 font-medium">Instant Response</p>
              </a>
            </div>

            {/* Map */}
            <div className="h-[300px] w-full rounded-3xl overflow-hidden shadow-lg border border-border relative group">
              {/* Placeholder Map Image/Iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.566512514854!2d76.7794179151307!3d30.73331488163697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1614151234567!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Clinic Location"
                className="grayscale group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-3xl border border-border shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8"></div>

            <h3 className="text-2xl font-bold font-heading mb-6 flex items-center gap-2">
              Send us a Message
              <Send className="w-5 h-5 text-primary" />
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-foreground">Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">Message</label>
                <textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-3.5 text-base flex items-center justify-center gap-2 group"
              >
                Send via WhatsApp
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                Your message will be formatted and opened in WhatsApp for you to send.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
