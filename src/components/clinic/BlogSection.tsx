import { BookOpen, Clock, User, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { Link } from "react-router-dom";

const BlogSection = () => {
  // Determine which posts to show (e.g., first 3)
  const displayPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="section-padding bg-background/50">
      <div className="container-clinic mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <p className="section-label mb-3">Health Articles</p>
            <h2 className="section-title">
              Latest Health{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">Insights</span>
            </h2>
          </div>
          <Link
            to="/blog"
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayPosts.map((article) => (
            <Link
              key={article.id}
              to={`/blog/${article.id}`}
              className="group bg-card rounded-2xl p-6 border border-border/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer block"
            >
              {/* Category badge */}
              <div
                className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-5 tracking-wide uppercase ${article.color}`}
              >
                {article.category}
              </div>

              <h3 className="font-bold font-heading text-lg leading-snug mb-3 group-hover:text-primary transition-colors duration-200">
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
                <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
