import React, { useEffect, useState } from "react";
import Adminnav from "../components/Adminnav";
import Adminlayout from "../components/Adminlayout";
import Loader from "../components/Loader";
import axiosinstance from "../Axios";
import { useDispatch } from "react-redux";
import { Authaction } from "../Redux/Authslice";

function Servicemanage() {
  const [services, setservices] = useState([]);
  const [loader, setloader] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setloader(true);
    axiosinstance
      .get("/services/getallservices")
      .then(({ data }) => {
        setservices(data.allservices);
        setloader(false);
      })
      .catch((er) => {
        console.log(er);
        setloader(false);
      });
  }, []);
  const handeldel = async (id) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to perform this action?"
      );
      if (confirmed) {
        setloader(true);
        const { data } = await axiosinstance.delete("/services/delservice", {
          params: { id },
        });
        console.log(data);
        setservices(data.allservices);
        setloader(false);
      }
    } catch (error) {
      alert("token expired,login again");
      setloader(false);
      dispatch(Authaction.Setlogout());
    }
  };
  return (
    <div className=" min-h-screen bg-white ">
      <Adminnav />
      <Adminlayout>
        <div className="flex justify-center align-middle items-center h-full ">
          <div className="flex-col " id="blog">
            <div className="flex p-10 justify-center">
              <h1 className="text-2xl font-brexo  lg:text-4xl whitespace-nowrap">
                Services
              </h1>
            </div>

            <aside
              aria-label="Related articles"
              class="py-8 lg:py-24 text-white"
            >
              <div class="px-10 mx-auto max-w-screen-xl">
                {loader ? (
                  <div className="flex justify-center align-middle">
                    <Loader />
                  </div>
                ) : (
                  <div class="grid gap-12 sm:grid-cols-1 lg:grid-cols-1">
                    {services.map((e) => {
                      return (
                        <article class="max-w-xs">
                          <img
                            src={e.images}
                            class="mb-5 rounded-lg w-full h-1/2"
                            alt="Image 1"
                          ></img>

                          <h2 class="mb-2 text-xl font-bold leading-tight text-black">
                            <a href="#">{e.title}</a>
                          </h2>
                          <p class="mb-4 font-light text-black">{e.message}</p>

                          <div className="float-right">
                            <button
                              type="button"
                              onClick={() => handeldel(e._id)}
                              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                            >
                              Delete
                            </button>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </Adminlayout>
    </div>
  );
}

export default Servicemanage;
