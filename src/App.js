import React from 'react';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import './App.css';
import Map from './pages/Map';
import Alerts from './pages/Alerts';
import Devices from './pages/Devices';
import Insights from './pages/Insights';
import ControlCenter from './pages/ControlCenter'
import Login from './pages/Login';
import Camera from './components/MapContents/MapInsideScreens/Camera';

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Map/>} />
          <Route path="/controlcenter" element={<ControlCenter/>} />
          <Route path="/devices" element={<Devices/>} />
          <Route path="/insights" element={<Insights/>} />
          <Route path="/alerts" element={<Alerts/>} />
          <Route path="/camera" element={<Camera/>} />
      </Routes>   
    </BrowserRouter>
  );
}

export default App;
