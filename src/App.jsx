import { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Models from './components/Models'
import Cart from './components/Cart'

const getModels = async () => {
  const res = await fetch('/data.json');
  return res.json();
}

const modelPromise = getModels();

function App() {
  const [activeTab, setActiveTab] = useState('models');
  const [carts, setCarts] = useState([]);  

  return (
    <>
      <NavBar />
      <Banner />
      <div className='text-center m-5 space-x-5'>
        <button
          onClick={() => setActiveTab('models')}
          className={`btn ${activeTab === 'models' ? 'btn-accent' : ''}`}
        >
          Models
        </button>
        <button
          onClick={() => setActiveTab('cart')}
          className={`btn ${activeTab === 'cart' ? 'btn-active' : ''}`}
        >
          Cart ( {carts.length} )
        </button>
      </div>
      {activeTab === 'models' &&
        <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts} />
      }
      {activeTab === 'cart' &&
        <Cart carts={carts} setCarts={setCarts} />
      }
      <Footer />
    </>
  )
}

export default App
