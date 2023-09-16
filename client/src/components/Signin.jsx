import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Usevalidate from "../customhooks/Validation";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axiosinstance from "../Axios";
import { Authaction } from "../Redux/Authslice";
import Loader from "./Loader";
import ReCAPTCHA from "react-google-recaptcha";

function Signin() {
  //recaptcha ref
  const reref = useRef();
  const [token, settoken] = useState("");
  const [loader, setloader] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handelChange, values, errors } = Usevalidate();
  const generateerror = (err) => {
    toast.error(err, {
      position: "top-center",
    });
  };
  const handelsubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      alert("verify token");
      return;
    }
  
    values.token = token;
    setloader(true);
    if (Object.keys(values).length === 3 && Object.keys(errors).length === 0) {
      axiosinstance
        .post("/auth/adminlogin", values)
        .then(({ data }) => {
          console.log(data);
          // reref.current.reset()
          settoken("");
          dispatch(Authaction.Setlogin(data.token));
          navigate("/admindash");
        })
        .catch((er) => {
          console.log(er);
          generateerror("invalid username or password");
          settoken("");
          dispatch(Authaction.Setlogout())
          setloader(false);
        });
    } else {
      generateerror("input fields have errors");
      setloader(false);
    }
  };
  return (
    <div>
      <div className="">
        <div className="flex justify-center align-middle m-10  ">
          <h1 className="items-center font-bold text-2xl   text-black">
            Admin Panel
          </h1>
        </div>
        <div className="flex justify-center items-center align-middle m-10  ">
          {loader ? (
            <Loader />
          ) : (
            <form className="w-full max-w-lg" onSubmit={handelsubmit}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white">
                    Username
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight"
                    type="text"
                    required={true}
                    maxLength={20}
                    value={values.username}
                    placeholder="example@gmail.com"
                    name="username"
                    onChange={handelChange}
                  ></input>
                  <p className="text-red-500 text-xs italic h-4">
                    {errors.username}
                  </p>
                </div>
                <div className="w-full px-3 mt-4">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2  dark:text-white ">
                    Password
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="password"
                    required={true}
                    maxLength={10}
                    value={values.pass}
                    placeholder="*****"
                    name="pass"
                    onChange={handelChange}
                  ></input>
                  <p className="text-red-500 text-xs italic h-4">
                    {errors.pass}
                  </p>
                </div>
                <ReCAPTCHA
                  className="mt-4 flex justify-center align-middle"
                  sitekey={import.meta.env.VITE_RECAPTCHA_SECRET}
                  ref={reref}
                  onChange={(token) => settoken(token)}
                  onExpired={(e) => settoken("")}
                ></ReCAPTCHA>
              </div>
              <div className="flex justify-center align-middle"></div>

              <div className="flex justify-center align-middle ">
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signin;
