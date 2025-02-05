import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import TeamPage from './components/pages/TeamPage';
import ProjectsPage from './components/pages/ProjectsPage';
import DefaultLayout from './components/layout/DefaultLayout';
import ContactPage from './components/pages/ContactPages';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='tales-interactive' element={<HomePage />} />
            <Route path='/' element={<HomePage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/progetti" element={<ProjectsPage />} />
            <Route path="/contatti" element={<ContactPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
