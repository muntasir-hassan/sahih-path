import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

const quizPackages = [
  {
    id: 1,
    title: "Beginner Hadith Quiz Pack",
    description: "10 questions based on basic hadith understanding.",
    points: 100,
  },
  {
    id: 2,
    title: "Intermediate Quiz Bundle",
    description: "20 questions including context and meanings.",
    points: 250,
  },
  {
    id: 3,
    title: "Advanced Scholar's Pack",
    description: "30 challenging questions for deep understanding.",
    points: 500,
  },
  {
    id: 4,
    title: "All-in-One Mega Quiz Pack",
    description: "70+ questions from all levels for full review.",
    points: 999,
  },
];

const BuyQuizPage = () => {
  const [userPoints, setUserPoints] = useState(0);

  useEffect(() => {
    const storedPoints = localStorage.getItem("userPoints");
    if (storedPoints !== null) {
      setUserPoints(Number(storedPoints));
    } else {
      const initial = 500;
      setUserPoints(initial);
      localStorage.setItem("userPoints", initial.toString());
    }
  }, []);

  const handleBuy = (cost) => {
    if (userPoints >= cost) {
      const updated = userPoints - cost;
      setUserPoints(updated);
      localStorage.setItem("userPoints", updated.toString());
      toast.success("Package purchased successfully!");
    } else {
      toast.error("Not enough points!");
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-muted text-text p-6">
        <ToastContainer position="top-center" autoClose={3000} />

        {/* Point Counter */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-primary">
            Your Points: <span className="text-accent">{userPoints}</span>
          </h1>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-center">Buy Quiz Packages</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {quizPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{pkg.title}</h3>
                <p className="text-gray-700 mb-4">{pkg.description}</p>
              </div>
              <div className="mt-auto">
                <div className="text-lg font-bold text-accent mb-2">
                  {pkg.points} Points
                </div>
                <button
                  onClick={() => handleBuy(pkg.points)}
                  className="bg-primary text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BuyQuizPage;
