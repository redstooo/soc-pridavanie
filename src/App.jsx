import MainObrazovka from "./MainObrazovka"
import Chemikalie from "./Chemikalie"
import { Routes, Route } from 'react-router-dom';
import Reakcie from "./Reakcie"

function App() {

  return (
    <>
      <Routes>
        <Route path="/soc-pridavanie" element={<MainObrazovka/>} />
        <Route path="/soc-pridavanie/chemikalie-pridavanie" element={<Chemikalie/>} />
        <Route path="/soc-pridavanie/reakcie-pridavanie" element={<Reakcie/>} />

      </Routes>
    </>
  )
}


export default App
