import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div>
     <Navbar/>
     <div className="mx-auto justify-center items-center">
        
         <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<Homepage />} />
            <Route path="/:productId" element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
  </div>
    </div>
  );
}

export default App;
