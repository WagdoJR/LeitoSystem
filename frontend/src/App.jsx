import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Beds from './pages/Beds';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/beds" element={<Beds />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;