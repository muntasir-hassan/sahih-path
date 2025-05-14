import Footer from "../components/Footer";
import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-muted text-text px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 mt-10">
          <h2 className="text-3xl font-bold text-primary mb-4">
            About Sahih Path
          </h2>
          <p className="mb-4 text-lg leading-relaxed">
            Sahih Path is dedicated to teaching authentic Hadith with clarity
            and purpose. Our goal is to make the sayings of the Prophet Muhammad
            ﷺ accessible, understandable, and applicable to daily life.
          </p>
          <p className="text-lg leading-relaxed">
            Whether you’re a student of knowledge or just beginning your
            journey, we provide structured lessons and engaging quizzes to help
            you understand and remember the Sunnah better, inshaAllah.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
