import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import AddMusic from './components/AddMusic'
import ShowMusic from './components/ShowMusic'

import EditMusic from './components/EditMusic'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/add" element={<AddMusic/>}/>
<Route path="/edit/:id" element={<EditMusic/>}/>
<Route path="/:id" element={<ShowMusic/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App
