import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Box} from "@mui/material";
import Garage from "./components/Garage";
import Navbar from "./components/Navbar";
import Winner from "./components/Winner";
const App = () => {
  return (
    <BrowserRouter>
    <Box>
    <Navbar />
      <Routes>
      <Route path="/" element={< Garage/>} />
        <Route path="/Garage" element={< Garage/>} />
        <Route path="/Winner" element={< Winner/>} />
      </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
