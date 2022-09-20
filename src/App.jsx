import { useState } from 'react'
import './App.css'
import LogIn from './components/LogIn'
import Home from './Home/Home'
import {Routes, BrowserRouter as Router, Route} from "react-router-dom"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="GeeksForGeeks">
    <Router>
    <div >
      {/* <Navbar/> */}
      <Routes>      
        <Route path="/login" element={<LogIn/>} />
        <Route path= "/" element={<Home/>} />
      </Routes>   
    </div>
    </Router>
    {/* <StickyFooter/> */}
    </div>
  )
}

export default App
