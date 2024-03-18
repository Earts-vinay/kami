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
import ForgetPass from './components/LoginScreens/ForgetPass';
import MyProfile from './components/LoginScreens/MyProfile';
import Settings from './components/LoginScreens/Settings';
import NavbarLoader from './pages/NavbarLoader';

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Login/>} />
         <Route path="/forgot-password" element={<ForgetPass/>} />
          <Route path="/map" element={<Map/>} />
          <Route path="/controlcenter" element={<ControlCenter/>} />
          <Route path="/devices" element={<Devices/>} />
          <Route path="/insights" element={<Insights/>} />
          <Route path="/alerts" element={<Alerts/>} />
          <Route path="/camera" element={<Camera/>} />
          <Route path="/myprofile" element={<MyProfile/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/navbarloader" element={<NavbarLoader/>}></Route>

   
      </Routes>   
    </BrowserRouter>
  );
}

export default App;
