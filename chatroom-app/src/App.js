import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lobby from './components/Lobby';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/chatrooms" element={<Lobby />} />
        <Route path="/" element={<Lobby />} />
      </Routes>
    </Router>
  );
}

export default App;
