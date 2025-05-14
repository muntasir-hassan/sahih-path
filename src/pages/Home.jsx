import Footer from "../components/Footer";
import Header from "../components/Header";
import imgSrc from "/sahih path banner logo.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-muted text-text px-4 py-16 max-md:mb-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-10">
            <img
              src={imgSrc}
              alt="Sahih Path Banner"
              className="mx-auto rounded-md shadow-md max-w-96"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Welcome to Sahih Path
          </h1>
          <p className="text-lg sm:text-xl mb-8 leading-relaxed">
            Learn authentic Hadith, deepen your understanding of the Sunnah, and
            grow in knowledge through structured lessons and engaging
            quizzes—all in one place.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/hadith-lessons"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-accent transition"
            >
              Start Learning
            </Link>
            <Link
              to="/buy-quiz"
              className="border border-primary text-primary px-6 py-3 rounded-md font-semibold hover:bg-accent hover:text-white transition"
            >
              Take a Quiz
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
