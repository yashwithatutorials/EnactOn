
import './App.css'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Aboutus from './Components/Aboutus'
import Expertise from './Components/Expertise'
import Business from './Components/Business'
import Footer from './Components/Footer'
import Talk from './Components/Talk'
import Culture from './Components/Culture'
import Customer from './Components/Customer'
import StatsCard from './Components/StatsCard'
import Solution from './Components/Solution'
import Review from './Components/Review'
function App() {
  

  return (
    <>
      <Navbar/>
      {/* <Example/>  */}
      <Main/>
      <Aboutus/>
      <Expertise/>
       <Business/>
      <StatsCard/> 
      <Solution/>
      <Review/>
      <Customer/>
      <Culture/>
      <Talk/>
       <Footer/>
    </>
  )
}

export default App
