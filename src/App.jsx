import './App.css'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Store from './components/pages/Store'
import Charity from './components/pages/Charity'
import Events from './components/pages/Events'
import Contact from './components/pages/Contact'
import Footer from './components/Footer'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <div className="page-container">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/charity" element={<Charity />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default App


