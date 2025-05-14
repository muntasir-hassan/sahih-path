import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import BuyQuiz from "./pages/BuyQuiz";
import About from "./pages/About";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hadith-lessons" element={<Lessons />}></Route>
          <Route path="/buy-quiz" element={<BuyQuiz />}></Route>
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
