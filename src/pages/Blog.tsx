import Navbar from "@/components/clinic/Navbar";
import Footer from "@/components/clinic/Footer";
import { blogPosts } from "@/data/blog";
import { BookOpen, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-grow pt-24 pb-16">
                <div className="container-clinic mx-auto px-4">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                            <BookOpen className="w-8 h-8" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">
                            Health Insights & News
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Expert advice, medical news, and wellness tips from our team of experienced healthcare professionals.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((article) => (
                            <Link
                                key={article.id}
                                to={`/blog/${article.id}`}
                                className="group bg-card rounded-2xl p-6 border border-border/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block"
                            >
                                {/* Category badge */}
                                <div
                                    className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-5 tracking-wide uppercase ${article.color}`}
                                >
                                    {article.category}
                                </div>

                                <h3 className="font-bold font-heading text-xl leading-snug mb-3 group-hover:text-primary transition-colors duration-200">
                                    {article.title}
                                </h3>
                                <p className="text-sm leading-relaxed mb-6 text-muted-foreground line-clamp-3">
                                    {article.excerpt}
                                </p>

                                <div className="flex items-center justify-between pt-5 border-t border-border/60">
                                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                                        <User className="w-3.5 h-3.5" />
                                        {article.author}
                                    </div>
                                    <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
                                        <span className="flex items-center gap-1.5">
                                            <Clock className="w-3.5 h-3.5" />
                                            {article.readTime}
                                        </span>
                                        <span className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                                            Read <ArrowRight className="w-3 h-3" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Blog;
