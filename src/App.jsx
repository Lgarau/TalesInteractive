import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import TeamPage from './components/pages/TeamPage';
import ProjectsPage from './components/pages/ProjectsPage';
import DefaultLayout from './components/layout/DefaultLayout';
import ContactPage from './components/pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/TalesInteractive/home' element={<HomePage />} />
            <Route path='/TalesInteractive/home' element={<HomePage />} />
            <Route path="/TalesInteractive/team" element={<TeamPage />} />
            <Route path="/TalesInteractive/progetti" element={<ProjectsPage />} />
            <Route path="/TalesInteractive/contatti" element={<ContactPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
