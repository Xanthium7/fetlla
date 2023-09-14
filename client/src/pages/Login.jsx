import { ToastContainer } from "react-toastify";

import Navbar from "../components/Navbar";
import Signin from "../components/Signin";
import Adminnav from "../components/Adminnav";

function Login() {
  return (
    <div className=" h-screen"> 
      <ToastContainer />
      <Adminnav />
      <Signin />
    </div>
  );
}

export default Login;
