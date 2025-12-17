import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import ScrollToTop from './Components/ScrollToTop'
import FloatingButtons from './Components/FloatingButtons'
import About from "./Pages/About"
import GalleryPage from "./Pages/GalleryPage"

function App() {

  return (
    <>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/gallery" element={<GalleryPage/>}/>
      </Routes>
      <Footer/>
      <FloatingButtons/>
    </>
  )
}

export default App
