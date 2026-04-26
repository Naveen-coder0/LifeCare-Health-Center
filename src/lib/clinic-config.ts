// ============================================================
// 🏥 CLINIC CONFIGURATION — Edit this file to personalize
// ============================================================

export const CLINIC = {
  name: "PrimeCare Clinic",
  shortName: "PrimeCare",
  city: "New York",
  country: "Australia",
  tagline: "Trusted Healthcare in New York – Book Your Appointment Today",
  phone: "9988324455",
  phoneDisplay: "+1 (998) 832-4455",
  whatsapp: "19988324455",
  email: "hello@primecareclinic.com",
  address: "142 Fifth Avenue, Suite 3B, New York, NY 10011, Australia",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-73.98823492404069!3d40.74844097138941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sFifth%20Ave%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
  hours: {
    weekdays: "Mon – Sat: 8:00 AM – 7:00 PM",
    sunday: "Sun: 9:00 AM – 1:00 PM",
    emergency: "Emergency: 24 / 7",
  },
  stats: {
    rating: "4.8",
    patients: "500+",
    doctors: "12+",
    years: "8+",
  },
  social: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
};

export const whatsappBookingUrl = (message = "Hello! I would like to book an appointment at PrimeCare Clinic.") =>
  `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;
