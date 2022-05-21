import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Shared/Navbar";

function App() {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
