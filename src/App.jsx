import { Route, Routes } from "react-router-dom"
import Hero from "./components/Hero/Hero"
import NavBar from "./components/NavBar/NavBar"
import PopularDestinations from "./components/PopularDestinations/PopularDestinations"
import Home from "./Page/Home"
import Services from "./Page/Services"
import Contact from "./Page/Contact"
import About from "./Page/About"
import SignUp from "./Page/SignUp"
import Procuct from "./Page/Procuct"
import State from "./components/State/State"
import Ref from "./components/Ref/Ref"
import Effect from "./components/Effect/Effect"
import SendParam from "./components/SendParam/SendParam"
import Api from "./components/Api/Api"


function App() {
  const items = [{ icon: "fa-solid fa-house-user", text: "Home", link: "/" },
  { icon: "fa-solid fa-circle-info", text: "About", link: "/about" },
  { icon: "fa-solid fa-briefcase", text: "Service", link: "/services" },
  { icon: "fa-solid fa-address-book", text: "Contact", link: "/contact" }
  ]







  return (
    <>
      {/*       <State />
      <Ref />
      <Effect />
      <SendParam />  */}
      {/* <Api /> */}












      <NavBar logo="Trippy" navItems={items} btn="sign up" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product/:id/:test" element={<Procuct />} />
      </Routes>
    </>
  )
}

export default App
