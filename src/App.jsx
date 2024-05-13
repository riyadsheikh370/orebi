import Ads from "./components/Ads";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import New from "./components/New";

export default function App() {
  return (
    <>
      <Header />
      <Navbar/>
      <Banner/>
      <Ads/>
      <New/>
    </>
  )
}