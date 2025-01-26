
import './App.css'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Letstalk from './Components/Letstalk'
import View from './Components/View'
import Ourproducts from './Components/Ourproducts';

// import Formsevent from './Components/Formsevent'
function App() {
  

  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main/>}/>
          <Route path='main' element={<Main/>}/>
          <Route path='letstalk' element={<Letstalk/>}/>
          <Route path='view' element={<View/>}/>
          <Route path='ourproducts' element={<Ourproducts/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Main/> */}
       <Footer/>
       
      
    </>
  )
}

export default App
