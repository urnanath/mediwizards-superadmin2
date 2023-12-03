import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/Home"



import {BrowserRouter as Router, Routes, Route} from "react-router-dom";




const App = () => {

  return (
    <>

    <Router basename="/">
      <Routes>
        <Route exact path="/"  Component={Home}/>
        <Route exact path="/register"  Component={Register}/>
        <Route exact path="/login"  Component={Login}/>
      </Routes>
    </Router>




    </>

  )
}

export default App