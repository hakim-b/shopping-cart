import { Routes, Route } from 'react-router-dom'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { Navbar } from './components/Navbar'
import { CartProvider } from './context/CartContext'
import { ShoppingCart } from './components/ShoppingCart'

function App() {
  return (
    <>
      <CartProvider>
        <div className="drawer drawer-end">
          <input type="checkbox" id="my-drawer-4" className="drawer-toggle" />
          <div className="drawer-content">
            <Navbar />
            <div className="container mb-6 p-5">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/store" element={<Store />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <div className="menu p-4 overflow-y-auto w-96 bg-base-100 text-base-content">
              <ShoppingCart/>
            </div>
          </div>
        </div>
      </CartProvider>
    </>
  )
}

export default App
