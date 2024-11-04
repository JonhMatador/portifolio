import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header_link from './conponents/headder/links'
import Sobre from './conponents/sobre/sobre'
import Contato from './conponents/contato/contato'
import Projetos from './conponents/projetos/projects'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header_link/>
        <Routes>
          <Route path='/' element={<Sobre />} />
          <Route path='/cnt' element={<Contato />} />
          <Route path='/prj' element={<Projetos />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
