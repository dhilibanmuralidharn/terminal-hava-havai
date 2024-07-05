import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/home/Home";
import DetailedView from "./components/detailedView/DetailedView";
import TerminalContext from "./context/TerminalContext";

const terminalData = [
  {
    id: 1,
    name: "Indra Gandhi International Airport",
    country: "India",
    code: "DEL",
    Terminals: 3,
  },
  {
    id: 2,
    name: "Dubai International Airport",
    country: "UAE",
    code: "DXB",
    Terminals: 5,
  },
  {
    id: 3,
    name: "Heathrow Airport",
    country: "England",
    code: "LHR",
    Terminals: 6,
  },
  {
    id: 4,
    name: "Istanbul Airport",
    country: "Turkey",
    code: "IST",
    Terminals: 3,
  },
  {
    id: 5,
    name: "Rajiv Gandhi International Airport",
    country: "Texas",
    code: "DFW",
    Terminals: 14,
  },
];

const getTerminalData = () => {
  const localStorageItem = localStorage.getItem("terminalData");
  return localStorageItem ? JSON.parse(localStorageItem) : [];
};

function App() {
  const [terminalList, setTerminalList] = useState(getTerminalData());

  useEffect(() => {
    if (terminalList.length === 0) {
      localStorage.setItem("terminalData", JSON.stringify(terminalData));
      setTerminalList(terminalData);
    }
  }, [terminalList]);

  const removeTerminal = (id) => {
    const updatedList = terminalList.filter((terminal) => terminal.id !== id);
    setTerminalList(updatedList);
    localStorage.setItem("terminalData", JSON.stringify(updatedList));
  };

  return (
    <TerminalContext.Provider value={{ terminalList, removeTerminal }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<DetailedView />} />
        </Routes>
      </BrowserRouter>
    </TerminalContext.Provider>
  );
}

export default App;
