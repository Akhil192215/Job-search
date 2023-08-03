import Footer from "./components/Footer"
import JobBox from "./components/JobBox"
import NavBar from "./components/NavBar"
import SearchBox from "./components/SearchBox"
import Value from "./components/Value"


function App() {


  return (
    <>
    <div className="w-[85%] m-auto bg-white">
    <NavBar/>
    <SearchBox/>
    <JobBox/>
   <Value/>
   <Footer/>
    </div>
   
    </>
  )
}

export default App
