// ============================================================
// 🏥 CLINIC CONFIGURATION — Edit this file to personalize
// ============================================================

export const CLINIC = {
  name: "LifeCare Health Center",
  shortName: "LifeCare",
  city: "Chandigarh",
  tagline: "Trusted Healthcare in Chandigarh",
  phone: "9988324455",
  phoneDisplay: "+91 99883 24455",
  whatsapp: "919988324455",
  email: "naveen.maan2006@gmail.com",
  address: "SCO 45, Sector 17, Chandigarh, India – 160017",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.566512514854!2d76.7794179151307!3d30.73331488163697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1614151234567!5m2!1sen!2sin",
  hours: {
    weekdays: "Mon – Sat: 9:00 AM – 8:00 PM",
    sunday: "Sun: 10:00 AM – 2:00 PM",
    emergency: "Emergency: 24 / 7",
  },
  stats: {
    rating: "4.8",
    patients: "500+",
    doctors: "15+",
    years: "10+",
  },
  social: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
};

export const whatsappBookingUrl = (message = "Hello! I would like to book an appointment.") =>
  `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;
