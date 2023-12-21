import Card from "./Components/Card"
import Cart from "./Components/Cart"
import Details from "./Components/Details"
// import Home from "./Components/Home"
import NavBar from "./Components/NavBar"
import NotFound from "./Components/NotFound"
import Siginin from "./Components/Siginin"
import Signup from "./Components/Signup"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"

function App() {

  return (
    <>
    <Router>
      <NavBar/> 
        
<Routes>
   
  <Route path="/" element={   <Card/>} />
    <Route path="/details/:id" element={<Details/>}/>
    <Route path="/siginup" element={<Signup/>}/>
    <Route path="/login" element={<Siginin/>}/>
    <Route path="*" element={   <NotFound/>} />
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/cart/:id" element={<Cart/>}/>
  
</Routes>

    </Router>
   {/* <Signup/> */}



    </>
  )
}

export default App
