import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home,Residential,Map } from "../pages";
import { Layout } from "../components";
function Routers() {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/residential" element={<Residential/>} />
          <Route path="/map" element={<Map/>} />
        </Route>
    </Routes>
</BrowserRouter>
  )
}

export { Routers}