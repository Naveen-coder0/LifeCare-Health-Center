// ============================================================
// 🏥 CLINIC CONFIGURATION — Edit this file to personalize
// ============================================================

export const CLINIC = {
  name: "Medstar Multispecialty Clinic",
  shortName: "Medstar",
  city: "Chandigarh",
  country: "India",
  tagline: "Trusted Healthcare for Every Family",
  phone: "9501594424",
  phoneDisplay: "+91 95015 94424",
  whatsapp: "919501594424",
  email: "info@medstarclinic.in",
  address: "SCO 3-4-5-6, Adjacent Gali No. 1, Near Govt. Sr. Sec. School, Ekta Market, Burail, Sector 45, Chandigarh – 160047",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.8!2d76.7794!3d30.6942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ef96b%3A0xa5ff67f9527d5a9!2sSector%2045%2C%20Chandigarh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  hours: {
    weekdays: "Mon – Sat: 9:00 AM – 8:00 PM",
    sunday: "Sun: 10:00 AM – 2:00 PM",
    emergency: "Emergency: 24 / 7",
  },
  stats: {
    rating: "5.0",
    reviews: "59",
    patients: "2000+",
    doctors: "8+",
    years: "5+",
  },
  social: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
};

export const whatsappBookingUrl = (message = "Hello! I would like to book an appointment at Medstar Multispecialty Clinic.") =>
  `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;
