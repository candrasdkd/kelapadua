import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sensus from './pages/sensus/sensus';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/sensus" element={<Sensus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

