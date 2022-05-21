import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Shared/Navbar";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='max-w-7xl mx-auto px-8'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
