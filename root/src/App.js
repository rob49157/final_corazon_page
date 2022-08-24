import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Products from "./components/Products";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Navbar />

      {/* <BrowserRouter>
  <Navbar />
        
        <Routes>
          <Route exact path='/' element={Home} />
          <Route exact path='/services' element={Services} />
          <Route exact path='/products' element={Products} />
          <Route exact path='/sign-up' element={SignUp} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
