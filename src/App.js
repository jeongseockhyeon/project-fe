import HomePage from './pages/HomePage'
import About from './pages/About'
import TourPackage from './pages/TourPackage'
import { Routes, Route } from 'react-router-dom'
import DetailPackage from './pages/DetailPackage'
import SearchPage from './pages/Search'
import 'bootstrap/dist/css/bootstrap.css'
import Login from './pages/Login'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/tour-package" element={<TourPackage />} />
        <Route
          path="/tour-package/:tourPackageId"
          element={<DetailPackage />}
        />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
