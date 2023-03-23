import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import HomePage from "./pages/HomePage/HomePage"

const TheYellowTherapistRoutes = () => {
  return (
    <>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </>
  )
}

export default TheYellowTherapistRoutes
