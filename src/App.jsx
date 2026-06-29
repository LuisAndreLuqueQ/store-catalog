import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { ProductPage } from './pages/ProductPage'
import { ProductDetail } from './components/ProductDetail'
import { NotFound } from './pages/NotFound'

import { Navbar } from './components/Navbar'


function App() {
  return (
    <>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetail/>} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
    </>
  )
}

export default App


