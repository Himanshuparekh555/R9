
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from "./Components/Home/Index"
import AboutUs from "./Components/AboutUs/Index"
import Header from "./layouts/header/header"
import Footer from "./layouts/Footer/Index"
function App() {
  return (
    <div className="App">
      <Header/>
       <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutUs />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
