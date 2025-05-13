import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './Component/Common/Header'
import Footer from './Component/Common/Footer'
import Contact from './pages/Contact'
import Bags from './pages/Bags'
import Product from './pages/Product'
import ScrollToTop from './Component/Common/Toptoscroll'
import SkeletonCard from './Skeleton/skeleton.jsx'
import { useEffect, useState } from 'react'
import Hotdeals from './pages/Hotdeals.jsx'
import Cart from './pages/Cart.jsx'

function App() {



  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => setIsLoading(false), 5000);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/bags' element={<Bags />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/hotdeals' element={<Hotdeals />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>


      {/* <div className="flex justify-center items-center min-h-screen bg-gray-100">
        {isLoading ? <SkeletonCard /> : <div>🎉 Loaded Content Here!</div>}
      </div> */}

    </>
  )
}

export default App
