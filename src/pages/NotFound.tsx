import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, SearchX } from "lucide-react";
import Navbar from "@/components/clinic/Navbar";
import Footer from "@/components/clinic/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="text-center px-4">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center relative z-10 mx-auto">
              <SearchX className="w-16 h-16 text-muted-foreground" />
            </div>
          </div>

          <h1 className="mb-2 text-6xl font-bold font-heading text-primary">404</h1>
          <h2 className="mb-6 text-2xl font-bold font-heading text-foreground">Page Not Found</h2>
          <p className="mb-8 text-lg text-muted-foreground max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <Link
            to="/"
            className="btn-primary inline-flex items-center shadow-lg shadow-primary/25 hover:shadow-primary/40"
          >
            <Home className="w-4 h-4 mr-2" />
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
