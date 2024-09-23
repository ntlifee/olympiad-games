import "./styles/main.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar'
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import SquareGame from "./pages/SquareGame/SquareGame";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/square" element={<SquareGame />} />
            </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
