// import logo from './logo.svg';
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    
    <div>
      
      
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<News key="general" pageSize={20} country="ae" category={"general"}/>} />
        <Route exact path="/business" element={<News key="business" pageSize={20} country="in" category={"business"}/>} />
        <Route exact path="/entertainment" element={<News key="entertainment" pageSize={20} country="ae" category={"entertainment"}/>} />
        <Route exact path="/health" element={<News key="health" pageSize={20} country="in" category={"health"}/>} />
        <Route exact path="/science" element={<News key="science" pageSize={20} country="in" category={"science"}/>} />
        <Route exact path="/sport" element={<News key="sport" pageSize={20} country="in" category={"sport"}/>} />
        <Route exact path="/technology" element={<News key="technology" pageSize={20} country="us" category={"technology"}/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
