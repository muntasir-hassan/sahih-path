import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to={"/"} className="text-2xl font-bold tracking-tight">
          {" "}
          Sahih Path
        </Link>

        <nav className="hidden md:flex gap-6 text-lg font-medium">
          <Link to="/hadith-lessons" className="hover:text-accent transition">
            Hadith Lessons
          </Link>
          <Link to={"/buy-quiz"} className="hover:text-[--color-accent] transition">
            Quizzes
          </Link>
          <Link to="/about" className="hover:text-[--color-accent] transition">
            About
          </Link>
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor">
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-primary textprimary-foreground px-4 pb-4">
          <Link to="/hadith-lessons" className="block py-1 hover:text-accent">
            Hadith Lessons
          </Link>
          <Link to="/buy-quiz" className="block py-1 hover:text-accent">
            Quizzes
          </Link>
          <Link to="/about" className="block py-1 hover:text-accent">
            About
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
