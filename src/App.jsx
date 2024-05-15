import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route index element={<Home />}></Route>
    <Route path="/shop" element={<Shop />}></Route>
  </Route>
))

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}