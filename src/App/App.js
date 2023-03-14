import "./App.css";

import Homepage from "../pages/Homepage";
import Stagepage1 from "../pages/Stagepage1";
import Stagepage2 from "../pages/Stagepage2";

import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";







function App() {
    return (
        <div className="App">
            <Navbar />
          
            <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route path="/Stagepage1" element={<Stagepage1 />} />
                <Route path="/Stagepage2" element={<Stagepage2/>} />
                
            </Routes>
       


        </div>
    );
}

export default App; 