import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route index element={<Home />}></Route>
    <Route path="/shop" element={<Shop />}></Route>
    <Route path="/shop/:id" element={<ProductDetails />}></Route>
  </Route>
))

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}