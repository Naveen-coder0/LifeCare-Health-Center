import Navbar from "@/components/clinic/Navbar";
import Footer from "@/components/clinic/Footer";
import { Shield, Lock, FileText } from "lucide-react";
import { useEffect } from "react";

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-grow pt-24 pb-16">
                <div className="container-clinic mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                            <Shield className="w-8 h-8" />
                        </div>
                        <h1 className="text-4xl font-bold font-heading mb-4">Privacy Policy</h1>
                        <p className="text-muted-foreground">Last updated: Feb 20, 2026</p>
                    </div>

                    <div className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-primary">
                        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm mb-8">
                            <h2 className="flex items-center gap-3 text-2xl mb-4">
                                <Lock className="w-6 h-6 text-primary" />
                                Data Protection & Security
                            </h2>
                            <p>
                                At LifeCare Health Center, we are committed to protecting the privacy and security of your personal health information.
                                We strictly adhere to HIPAA regulations and global data protection standards to ensure your medical records remains confidential.
                            </p>
                        </div>

                        <section className="space-y-6">
                            <h3>1. Information We Collect</h3>
                            <p>We collect information that you strictly provide to us directly, including:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Personal identification (Name, email address, phone number, date of birth)</li>
                                <li>Medical history and health records</li>
                                <li>Insurance information and billing details</li>
                                <li>Appointment scheduling preferences</li>
                            </ul>

                            <h3>2. How We Use Your Information</h3>
                            <p>Your data is used solely for the purpose of providing healthcare services:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>To provide and coordinate your medical care</li>
                                <li>To communicate with you about appointments and test results</li>
                                <li>To process payments and insurance claims</li>
                                <li>To improve our clinic services and patient experience</li>
                            </ul>

                            <h3>3. Information Sharing</h3>
                            <p>
                                We do not sell or rent your personal information. We only share information with:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Healthcare providers directly involved in your care</li>
                                <li>Insurance companies for billing purposes</li>
                                <li>Legal authorities when required by law</li>
                            </ul>

                            <h3>4. Patient Rights</h3>
                            <p>You have the right to access, correct, or request deletion of your personal data. You may also request a copy of your medical records at any time via our patient portal.</p>
                        </section>

                        <div className="mt-12 p-6 bg-muted/50 rounded-xl border border-border/50 flex items-start gap-4">
                            <FileText className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-lg mb-2">Questions?</h4>
                                <p className="text-sm text-muted-foreground mb-0">
                                    If you have any questions about this Privacy Policy, please contact our Data Protection Officer at privacy@lifecare.com.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
