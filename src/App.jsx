import MainObrazovka from "./MainObrazovka"
import Chemikalie from "./Chemikalie"
import { Routes, Route } from 'react-router-dom';
import Reakcie from "./Reakcie"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainObrazovka/>} />
        <Route path="/chemikalie-pridavanie" element={<Chemikalie/>} />
        <Route path="/reakcie-pridavanie" element={<Reakcie/>} />

      </Routes>
    </>
  )
}


export default App
