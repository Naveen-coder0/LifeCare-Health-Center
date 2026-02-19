import Navbar from "@/components/clinic/Navbar";
import Footer from "@/components/clinic/Footer";
import { FileSignature, AlertCircle } from "lucide-react";
import { useEffect } from "react";

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-grow pt-24 pb-16">
                <div className="container-clinic mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-6">
                            <FileSignature className="w-8 h-8" />
                        </div>
                        <h1 className="text-4xl font-bold font-heading mb-4">Terms of Service</h1>
                        <p className="text-muted-foreground">Last updated: Feb 20, 2026</p>
                    </div>

                    <div className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-primary">
                        <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 text-amber-900 mb-10 flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 mt-0.5 text-amber-600 flex-shrink-0" />
                            <p className="m-0 text-sm">
                                <strong>Medical Disclaimer:</strong> The content on this website is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                            </p>
                        </div>

                        <section className="space-y-6">
                            <h3>1. Acceptance of Terms</h3>
                            <p>
                                By accessing and using the LifeCare Health Center website and services, you accept and agree to be bound by the terms and provision of this agreement.
                            </p>

                            <h3>2. Use of Services</h3>
                            <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for all activities that occur under your account or appointment booking.</p>

                            <h3>3. Appointment Scheduling</h3>
                            <p>
                                Appointments booked online are subject to confirmation. We reserve the right to reschedule or cancel appointments due to physician availability or emergency situations.
                                Cancellations must be made at least 24 hours in advance.
                            </p>

                            <h3>4. Payment Terms</h3>
                            <p>
                                Payment for services is due at the time of service unless otherwise arranged. We accept major credit cards and insurance plans as verified. You are responsible for any co-pays, deductibles, or non-covered services.
                            </p>

                            <h3>5. Intellectual Property</h3>
                            <p>
                                The content, organization, graphics, design, and other matters related to the Site are protected under applicable copyrights and other proprietary laws. Copying, redistribution, use, or publication by you of any such matters or any part of the Site is strictly prohibited.
                            </p>

                            <h3>6. Limitation of Liability</h3>
                            <p>
                                LifeCare Health Center shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the site or services.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsOfService;
