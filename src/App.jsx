import { useState, useEffect } from "react";
import Landing from "./Landing";
import About from "./About";
import Projects from "./LatestLaunches";
import ContactUs from "./ContactUs";
import Services from "./Services";
import Designs from "./Designs";
import { Route } from "wouter";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAllImagesLoaded = () => {
      const images = Array.from(document.images); // Get all images on the page
      const promises = images.map(
        (img) =>
          new Promise((resolve) => {
            if (img.complete) {
              resolve(); // Resolve immediately if already loaded
            } else {
              img.onload = resolve; // Resolve when the image is loaded
              img.onerror = resolve; // Resolve even if the image fails to load
            }
          })
      );
      return Promise.all(promises); // Wait for all images to load
    };

    const handlePageLoad = async () => {
      await checkAllImagesLoaded(); // Wait for all images
      setIsLoading(false); // Set loading to false once everything is ready
    };

    // Ensure page load event is captured
    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => window.removeEventListener("load", handlePageLoad);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          {/* Spinner */}
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75"></div>
        </div>
      ) : (
        // Main content
        <>
          <Route path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/designs" component={Designs} />
        </>
      )}
    </div>
  );
}
