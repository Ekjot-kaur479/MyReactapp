import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Country from './pages/Country';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country" element={<Country />} />
                 
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
