import React from 'react';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import './App.css';
import Map from './pages/Map';
import Alerts from './pages/Alerts';
import Devices from './pages/Devices';
import Insights from './pages/Insights';
import ControlCenter from './pages/ControlCenter'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Map/>} />
          <Route path="/controlcenter" element={<ControlCenter/>} />
          <Route path="/devices" element={<Devices/>} />
          <Route path="/insights" element={<Insights/>} />
          <Route path="/alerts" element={<Alerts/>} />
      </Routes>   
    </BrowserRouter>
  );
}

export default App;
