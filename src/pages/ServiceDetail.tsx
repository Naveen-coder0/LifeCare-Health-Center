import { useParams, Link } from "react-router-dom";
import { services } from "@/data/services";
import { ArrowLeft, CheckCircle2, Calendar } from "lucide-react";
import Navbar from "@/components/clinic/Navbar";
import Footer from "@/components/clinic/Footer";
import { useEffect } from "react";

const ServiceDetail = () => {
    const { id } = useParams();
    const service = services.find((s) => s.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background">
                <h1 className="text-3xl font-bold font-heading mb-4">Service Not Found</h1>
                <Link to="/" className="btn-primary">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-grow pt-24">
                {/* Hero Section */}
                <section className={`relative py-20 px-4 overflow-hidden ${service.bg} bg-opacity-30`}>
                    <div className="container-clinic mx-auto relative z-10">
                        <Link to="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Services
                        </Link>

                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className={`w-24 h-24 rounded-3xl flex items-center justify-center ${service.bg} shadow-lg`}>
                                <service.icon className={`w-12 h-12 ${service.color}`} />
                            </div>
                            <div className="flex-1">
                                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-foreground">
                                    {service.title}
                                </h1>
                                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative background blob */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none mix-blend-overlay" />
                </section>

                {/* Details Section */}
                <section className="py-16 px-4">
                    <div className="container-clinic mx-auto grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold font-heading mb-4">Overview</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {service.longDescription}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold font-heading mb-6">Key Features</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border/50">
                                            <CheckCircle2 className={`w-5 h-5 ${service.color}`} />
                                            <span className="font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar CTA */}
                        <div className="lg:col-span-1">
                            <div className="bg-card rounded-3xl p-8 border border-border shadow-lg sticky top-32">
                                <h3 className="text-xl font-bold font-heading mb-2">Need a Consultation?</h3>
                                <p className="text-muted-foreground mb-6">
                                    Book an appointment with our {service.title} specialists today.
                                </p>
                                <Link
                                    to="/#appointment"
                                    className="w-full btn-primary justify-center py-4 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30"
                                >
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Book Appointment
                                </Link>

                                <div className="mt-6 pt-6 border-t border-border flex items-center justify-center gap-2 text-sm text-muted-foreground">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    Available Today
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ServiceDetail;
