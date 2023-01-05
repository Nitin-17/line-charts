import React from 'react'
import {Route, Routes} from "react-router-dom";
import Charts from './component/Charts'
import Charts2 from './component/Charts2';
import { Chart,registerables } from 'chart.js';
import Footer from './component/Footer';
import { Navbar } from './component/Navbar';
Chart.register(...registerables);

const App = () => {
  return (
    <>  
    <Navbar/>
            <Routes>
              <Route exact path="/" element={<Charts/>}/>
              <Route path="/charts2" element={<Charts2/>}/>
        </Routes>
        <Footer></Footer>

    </>
  )
}

export default App