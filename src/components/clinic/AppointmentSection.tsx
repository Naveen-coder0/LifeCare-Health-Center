import { useState } from "react";
import { Calendar, User, Phone, Mail, Clock, MessageSquare, CheckCircle2, MapPin } from "lucide-react";

const departments = [
  "General Physician", "Dental Care", "Pediatrics", "Gynecology",
  "Orthopedics", "Diagnostics", "Vaccination", "Emergency Care",
];

const doctors: Record<string, string[]> = {
  "General Physician": ["Dr. Sarah Mitchell", "Dr. Mark Johnson"],
  "Dental Care": ["Dr. James Carter", "Dr. Priya Sharma"],
  "Pediatrics": ["Dr. Aisha Patel", "Dr. Tom Wilson"],
  "Gynecology": ["Dr. Laura Kim", "Dr. Nina Roberts"],
  "Orthopedics": ["Dr. Robert Chen", "Dr. Alan Scott"],
  "Diagnostics": ["Dr. Emily Davis"],
  "Vaccination": ["Dr. Susan Lee"],
  "Emergency Care": ["Dr. On-Call Physician"],
};

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "05:00 PM",
];

const AppointmentSection = () => {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", department: "",
    doctor: "", date: "", time: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.phone.trim() || !/^\+?[\d\s\-()]{7,15}$/.test(form.phone))
      errs.phone = "Enter a valid phone number.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email.";
    if (!form.department) errs.department = "Select a department.";
    if (!form.doctor) errs.doctor = "Select a doctor.";
    if (!form.date) errs.date = "Select a date.";
    if (!form.time) errs.time = "Select a time slot.";
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "department" ? { doctor: "" } : {}),
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const inputCls = (field: string) =>
    `w-full rounded-xl px-4 py-3.5 text-sm border bg-muted/50 transition-all outline-none focus:bg-white focus:ring-2 focus:shadow-sm ${errors[field]
      ? "border-destructive/50 focus:ring-destructive/20 focus:border-destructive"
      : "border-border/50 focus:ring-primary/20 focus:border-primary"
    }`;

  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="appointment" className="section-padding bg-background relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -left-20 top-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

      <div className="container-clinic mx-auto relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          {/* Left info */}
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold bg-primary/10 text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Book Appointment
            </div>

            <h2 className="section-title mb-6">
              Schedule Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">Visit Today</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-10">
              Fill out the form and our team will confirm your appointment within 2 hours.
              <br />
              Walk-ins are also welcome during working hours.
            </p>

            <div className="space-y-6">
              {[
                { icon: Clock, title: "Working Hours", sub: "Mon–Sat: 9:00 AM – 8:00 PM" },
                { icon: Phone, title: "Call Us", sub: "9988324455" },
                { icon: Mail, title: "Email Us", sub: "naveen.maan2006@gmail.com" },
                { icon: MapPin, title: "Location", sub: "Chandigarh, India" },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-5 group p-4 rounded-2xl hover:bg-muted/50 transition-colors">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-white shadow-sm border border-border/50 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-0.5">{item.title}</p>
                    <p className="text-sm font-bold text-foreground">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] border border-white/20 shadow-2xl p-8 sm:p-10 relative overflow-hidden">
              {/* Decorative sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/50 to-transparent pointer-events-none" />

              {submitted ? (
                <div className="text-center py-20 animate-fade-in relative z-10">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 bg-green-50 shadow-inner">
                    <CheckCircle2 className="w-12 h-12 text-green-500 animate-bounce-slow" />
                  </div>
                  <h3 className="text-3xl font-bold font-heading mb-4 text-foreground">Appointment Confirmed!</h3>
                  <p className="text-muted-foreground mb-2">
                    Thank you, <strong className="text-foreground">{form.name}</strong>! Your appointment has been booked.
                  </p>
                  <p className="text-sm text-muted-foreground mb-10">
                    We'll send a confirmation to <strong>{form.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", department: "", doctor: "", date: "", time: "", message: "" }); }}
                    className="btn-primary px-8 py-3"
                  >
                    Book Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="relative z-10">
                  <h3 className="font-bold font-heading text-xl mb-8 flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    Patient Details
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-5 mb-8">
                    {/* Name */}
                    <div>
                      <input name="name" value={form.name} onChange={handleChange}
                        placeholder="Full Name *" className={inputCls("name")} />
                      {errors.name && <p className="text-xs text-destructive mt-1.5 ml-1">{errors.name}</p>}
                    </div>
                    {/* Phone */}
                    <div>
                      <input name="phone" value={form.phone} onChange={handleChange}
                        placeholder="Phone Number *" className={inputCls("phone")} />
                      {errors.phone && <p className="text-xs text-destructive mt-1.5 ml-1">{errors.phone}</p>}
                    </div>
                    {/* Email */}
                    <div className="sm:col-span-2">
                      <input name="email" type="email" value={form.email} onChange={handleChange}
                        placeholder="Email Address *" className={inputCls("email")} />
                      {errors.email && <p className="text-xs text-destructive mt-1.5 ml-1">{errors.email}</p>}
                    </div>
                  </div>

                  <h3 className="font-bold font-heading text-xl mb-8 flex items-center gap-2 border-t border-border pt-8">
                    <Calendar className="w-5 h-5 text-primary" />
                    Appointment Preferences
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Department */}
                    <div>
                      <select name="department" value={form.department} onChange={handleChange} className={inputCls("department")}>
                        <option value="">Select Department *</option>
                        {departments.map((d) => <option key={d} value={d}>{d}</option>)}
                      </select>
                      {errors.department && <p className="text-xs text-destructive mt-1.5 ml-1">{errors.department}</p>}
                    </div>
                    {/* Doctor */}
                    <div>
                      <select name="doctor" value={form.doctor} onChange={handleChange}
                        className={`${inputCls("doctor")} ${!form.department ? "opacity-50 cursor-not-allowed" : ""}`} disabled={!form.department}>
                        <option value="">Select Doctor *</option>
                        {(doctors[form.department] || []).map((d) => <option key={d} value={d}>{d}</option>)}
                      </select>
                      {errors.doctor && <p className="text-xs text-destructive mt-1.5 ml-1">{errors.doctor}</p>}
                    </div>
                    {/* Date */}
                    <div>
                      <input name="date" type="date" min={today} value={form.date} onChange={handleChange}
                        className={inputCls("date")} />
                      {errors.date && <p className="text-xs text-destructive mt-1.5 ml-1">{errors.date}</p>}
                    </div>
                    {/* Time */}
                    <div>
                      <select name="time" value={form.time} onChange={handleChange} className={inputCls("time")}>
                        <option value="">Select Time Slot *</option>
                        {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                      {errors.time && <p className="text-xs text-destructive mt-1.5 ml-1">{errors.time}</p>}
                    </div>
                    {/* Message */}
                    <div className="sm:col-span-2">
                      <textarea name="message" value={form.message} onChange={handleChange}
                        rows={3} placeholder="Additional Notes (Optional)"
                        className={`${inputCls("message")} resize-none`} />
                    </div>
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center mt-8 py-4 text-base font-bold shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-[0.98]">
                    Confirm Appointment
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
