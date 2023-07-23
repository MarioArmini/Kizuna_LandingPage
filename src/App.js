import "./App.css";
import KizunaApp from './KizunaApp';
import { Routes, Route } from 'react-router-dom';
import MainContent from "./MainContent";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainContent/>} />
      <Route exact path="/KizunaApp" element={<KizunaApp/>} />
    </Routes>
  );
}
