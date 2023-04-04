import './Assets/App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Pricing from './Pages/Pricing';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/index.html" element={<Home />} />
          <Route exact path="/mint" element={<Pricing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
