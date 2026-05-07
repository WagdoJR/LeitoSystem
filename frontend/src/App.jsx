import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Patients from "./pages/Patients";
import Login from './pages/Login';
import Beds from './pages/Beds';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/beds" element={<Beds />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;