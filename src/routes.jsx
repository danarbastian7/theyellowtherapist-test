import { Routes, Route } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import HomePage from "./pages/HomePage/HomePage"
import Login from "./components/login/Login"

const TheYellowTherapistRoutes = () => {
  return (
    <>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </main>
    </>
  )
}

export default TheYellowTherapistRoutes
