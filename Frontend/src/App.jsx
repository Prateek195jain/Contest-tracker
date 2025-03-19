import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contests from "./pages/Contests";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="w-full min-h-screen p-4 bg-gray-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contests/:platform" element={<Contests />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
