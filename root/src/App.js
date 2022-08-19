import { BrowserRouter as Router, Switch, Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";


function App() {
  return(
    
   <>
   <Navbar/>
    {/* <BrowserRouter basename='/marketapp' >
        <Routes>
          <Route exact path="/" element={ <Navbar />} />
          

        </Routes>
      </BrowserRouter> */}
    </>
    
  
  )
 

}

export default App;
