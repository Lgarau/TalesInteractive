import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
    <div className="min-h-screen bg-black text-white">
    <Routes>
        <Route path="/Tales-Interactive" element={<HomePage />} />
        
        </Routes>
    </div>
    </Router>
  );
}

export default App;
