import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";

import Welcome from "../components/Welcome";
import About from "../components/About";
import Achievements from "../components/Achievements";
import Blogcard from "../components/Blogcard";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Services from "../components/Services";

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white ">
      <ToastContainer/>
      <Navbar />
      <Welcome />
      <About />
      <Services/>

      <Achievements />

      <Blogcard home={true} />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
