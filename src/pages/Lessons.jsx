import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import hadiths from "../data/hadiths.json";
import HadithLessons from "../components/HadithListing";
import Header from "../components/Header";
import Footer from "../components/Footer";
const LessonsPage = () => {
  const totalHadiths = hadiths.length;

  // Initial state is null to avoid race condition
  const [currentIndex, setCurrentIndex] = useState(null);

  // Set from localStorage only once
  useEffect(() => {
    const savedIndex = localStorage.getItem("recentHadithIndex");
    if (savedIndex !== null) {
      setCurrentIndex(Number(savedIndex));
    } else {
      setCurrentIndex(0); // default if nothing saved
    }
  }, []);

  // Save on every change, once index is defined
  useEffect(() => {
    if (currentIndex !== null) {
      localStorage.setItem("recentHadithIndex", currentIndex.toString());
    }
  }, [currentIndex]);

  const nextHadith = () => {
    setCurrentIndex((prev) => (prev + 1 < totalHadiths ? prev + 1 : 0));
  };

  const prevHadith = () => {
    setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : totalHadiths - 1));
  };

  if (currentIndex === null) return null; // Or show loading spinner

  return (
    <>
      <Header />
      <div className="min-h-screen bg-muted text-text p-6">
        <HadithLessons hadiths={[hadiths[currentIndex]]} />
        <div className="flex justify-between mt-6 max-w-3xl mx-auto">
          <button
            onClick={prevHadith}
            className="px-4 py-2 bg-primary text-white rounded w-24"
          >
            Previous
          </button>

          
            <Link
              to="/buy-quiz"
              className="px-6 py-3 bg-accent text-text rounded-lg"
            >
              Do Quiz
            </Link>
        
          <button
            onClick={nextHadith}
            className="px-4 py-2 bg-primary text-white rounded  w-24"
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LessonsPage;
