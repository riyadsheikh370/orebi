import RootLayout from "./components/RootLayout";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import Error from "./pages/Error";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Signup from "./pages/Signup";
import Login from "./pages/Login";

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route index element={<Home />}></Route>
    <Route path="/shop" element={<Shop />}></Route>
    <Route path="/shop/:id" element={<ProductDetails />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/checkout" element={<Checkout/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="*" element={<Error/>}></Route>
  </Route>
))

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}