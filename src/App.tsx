import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TemplateAbsensiDesa from './pages/templateAbsensiDesa/templateAbsensiDesa';
import Home from './pages/home/home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/template-absensi-desa" element={<TemplateAbsensiDesa />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

