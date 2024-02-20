import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/global/Navbar.components'
import Home from './components/Home'
import Game from './components/Game'
import Catalogue from './components/Catalogue'

function App() {

  return (
    <>
      <div className='max-w-[1920px] m-auto'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/juego' element={<Game />} />
            <Route path='/catalogo' element={<Catalogue />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
