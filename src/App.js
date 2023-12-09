import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Second from './components/Second';
import Third from './components/Third';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="second-year" element={<Second />} />
        <Route path="third-year" element={<Third />} />
        <Route path="account" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
