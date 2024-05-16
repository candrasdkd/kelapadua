import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sensus from './pages/sensus/sensus';
import Home from './pages/home/home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/template" element={<Sensus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

