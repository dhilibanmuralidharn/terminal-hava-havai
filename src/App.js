import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import DetailedView from "./components/detailedView/DetailedView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<DetailedView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
