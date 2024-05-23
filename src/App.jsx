import RootLayout from "./components/RootLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route index element={<Home />}></Route>
    <Route path="/shop" element={<Shop />}></Route>
    <Route path="/shop/:id" element={<ProductDetails />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/journal" element={<Journal />}></Route>
  </Route>
))

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}