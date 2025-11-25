import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Test from "./pages/Test.jsx";
import Khaleed from "./pages/Khaleed.jsx";
import Navbar from "./components/Navbar.jsx"; // import navbar

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/portfolio" element={<Khaleed />} />
      </Routes>
    </div>
  );
}

export default App;
