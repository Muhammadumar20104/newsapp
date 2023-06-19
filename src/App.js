// import logo from './logo.svg';
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { Route, Routes } from "react-router-dom";

function App() {
  const pageSize=20
  return (
    
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        {/* india */}
        <Route exact path="/" element={<News key="1" pageSize={pageSize} country="in" category={"general"}/>} />
        <Route exact path="/business" element={<News key="2" pageSize={pageSize} country="in" category={"business"}/>} />
        <Route exact path="/entertainment" element={<News key="3" pageSize={pageSize} country="in" category={"entertainment"}/>} />
        <Route exact path="/health" element={<News key="4" pageSize={pageSize} country="in" category={"health"}/>} />
        <Route exact path="/science" element={<News key="5" pageSize={pageSize} country="in" category={"science"}/>} />
        <Route exact path="/sport" element={<News key="6" pageSize={pageSize} country="in" category={"sport"}/>} />
        <Route exact path="/technology" element={<News key="7" pageSize={pageSize} country="in" category={"technology"}/>} />
        {/* China */}
        {/* <Route exact path="/cn/" element={<News key="8" pageSize={pageSize} country="cn" category={"general"}/>} />
        <Route exact path="/cn/business" element={<News key="9" pageSize={pageSize} country="cn" category={"business"}/>} />
        <Route exact path="/cn/entertainment" element={<News key="10" pageSize={pageSize} country="cn" category={"entertainment"}/>} />
        <Route exact path="/cn/health" element={<News key="11" pageSize={pageSize} country="cn" category={"health"}/>} />
        <Route exact path="/cn/science" element={<News key="12" pageSize={pageSize} country="cn" category={"science"}/>} />
        <Route exact path="/cn/sport" element={<News key="13" pageSize={pageSize} country="cn" category={"sport"}/>} />
        <Route exact path="/cn/technology" element={<News key="14" pageSize={pageSize} country="cn" category={"technology"}/>} /> */}
        {/* United State */}
        {/* <Route exact path="/" element={<News key="15" pageSize={pageSize} country="us" category={"general"}/>} />
        <Route exact path="/us/business" element={<News key="16" pageSize={pageSize} country="us" category={"business"}/>} />
        <Route exact path="/us/entertainment" element={<News key="17" pageSize={pageSize} country="us" category={"entertainment"}/>} />
        <Route exact path="/us/health" element={<News key="18" pageSize={pageSize} country="us" category={"health"}/>} />
        <Route exact path="/us/science" element={<News key="19" pageSize={pageSize} country="us" category={"science"}/>} />
        <Route exact path="/us/sport" element={<News key="20" pageSize={pageSize} country="us" category={"sport"}/>} />
        <Route exact path="/us/technology" element={<News key="21" pageSize={pageSize} country="us" category={"technology"}/>} /> */}
        {/* Mexico */}
        {/* <Route exact path="/mx/" element={<News key="22" pageSize={pageSize} country="mx" category={"general"}/>} />
        <Route exact path="/mx/business" element={<News key="23" pageSize={pageSize} country="mx" category={"business"}/>} />
        <Route exact path="/mx/entertainment" element={<News key="24" pageSize={pageSize} country="mx" category={"entertainment"}/>} />
        <Route exact path="/mx/health" element={<News key="25" pageSize={pageSize} country="mx" category={"health"}/>} />
        <Route exact path="/mx/science" element={<News key="26" pageSize={pageSize} country="mx" category={"science"}/>} />
        <Route exact path="/mx/sport" element={<News key="27" pageSize={pageSize} country="mx" category={"sport"}/>} />
        <Route exact path="/mx/technology" element={<News key="28" pageSize={pageSize} country="mx" category={"technology"}/>} /> */}
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
