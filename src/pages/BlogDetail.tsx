import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/blog";
import Navbar from "@/components/clinic/Navbar";
import Footer from "@/components/clinic/Footer";
import { Clock, User, Calendar, ArrowLeft, Share2 } from "lucide-react";
import { useEffect } from "react";

const BlogDetail = () => {
    const { id } = useParams();
    const post = blogPosts.find((p) => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col bg-background">
                <Navbar />
                <main className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
                        <Link to="/blog" className="text-primary hover:underline">Back to Blog</Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-grow pt-24 pb-16">
                <article className="container-clinic mx-auto px-4 max-w-4xl">
                    <Link to="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Articles
                    </Link>

                    <div className="mb-10 text-center">
                        <div
                            className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase ${post.color}`}
                        >
                            {post.category}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight text-foreground">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground border-y border-border/50 py-4 max-w-2xl mx-auto">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span className="font-medium text-foreground">{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-lg prose-slate mx-auto prose-headings:font-heading prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80">
                        {post.content.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="mb-4 leading-relaxed whitespace-pre-line text-muted-foreground">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-border flex justify-between items-center">
                        <div className="text-sm text-muted-foreground">
                            Share this article:
                        </div>
                        <div className="flex gap-4">
                            <button className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                                <Share2 className="w-4 h-4 text-foreground" />
                            </button>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
};

export default BlogDetail;
