import React from 'react'
import Home from './Compo/Home'
import About from './Compo/About'
import FAQs from './Compo/FAQs'
import Contact from './Compo/Contact'
import { BrowserRouter, Route, Routes } from "react-router-dom";

{/* <Home />
<About />
<FAQs />
<Contact /> */}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/faqs' element={ <FAQs /> } />
          <Route path='/contact' element={ <Contact /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
