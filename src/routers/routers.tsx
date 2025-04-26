import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home,Residential } from "../pages";
import { Layout } from "../components";
function Routers() {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/residential" element={<Residential/>} />
        </Route>
    </Routes>
</BrowserRouter>
  )
}

export { Routers}