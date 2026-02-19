import Navbar from "@/components/clinic/Navbar";
import Footer from "@/components/clinic/Footer";
import { Cookie, Settings, Info } from "lucide-react";
import { useEffect } from "react";

const CookiePolicy = () => {
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
                            <Cookie className="w-8 h-8" />
                        </div>
                        <h1 className="text-4xl font-bold font-heading mb-4">Cookie Policy</h1>
                        <p className="text-muted-foreground">Last updated: Feb 20, 2026</p>
                    </div>

                    <div className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-primary">
                        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm mb-8">
                            <h2 className="flex items-center gap-3 text-2xl mb-4">
                                <Info className="w-6 h-6 text-primary" />
                                What Are Cookies?
                            </h2>
                            <p>
                                Cookies are small text files that are placed on your computer or mobile device when you visit a website.
                                They are widely used to make websites work more efficiently and provide information to the owners of the site.
                            </p>
                        </div>

                        <section className="space-y-6">
                            <h3>1. How We Use Cookies</h3>
                            <p>We use cookies for several reasons, including:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly (e.g., secure login, appointment booking).</li>
                                <li><strong>Performance Cookies:</strong> These help us understand how visitors interact with our website by collecting anonymous information.</li>
                                <li><strong>Functional Cookies:</strong> These allow the website to remember choices you make (such as your user name, language or the region you are in).</li>
                            </ul>

                            <h3>2. Managing Cookies</h3>
                            <p>
                                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
                                If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
                            </p>

                            <h3>3. Third-Party Cookies</h3>
                            <p>
                                In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Google Analytics: To help us understand how you use the site and ways that we can improve your experience.</li>
                                <li>Social Media Buttons: We use social media buttons and/or plugins on this site that allow you to connect with your social network in various ways.</li>
                            </ul>
                        </section>

                        <div className="mt-12 p-6 bg-muted/50 rounded-xl border border-border/50 flex items-start gap-4">
                            <Settings className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-lg mb-2">Cookie Preferences</h4>
                                <p className="text-sm text-muted-foreground mb-0">
                                    You can change your cookie preferences at any time by visiting your browser settings.
                                    For more information, please contact us at privacy@lifecare.com.
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

export default CookiePolicy;
