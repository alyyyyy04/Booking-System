import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import BranchSelection from './pages/BranchSelection'
import ServicesSelection from './pages/ServicesSelection'
import StylistSelection from './pages/StylistSelection'
import AppointmentDetails from './pages/AppointmentDetails'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book" element={<BranchSelection />} />
          <Route path="/book/services" element={<ServicesSelection />} />
          <Route path="/book/stylist" element={<StylistSelection />} />
          <Route path="/book/details" element={<AppointmentDetails />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
