import React, { useEffect, useState } from "react";
import axiosinstance from "../Axios";

function Services() {
  const [services, setservices] = useState([]);
  useEffect(() => {
    axiosinstance.get("/services/getallservices").then(({ data }) => {
      setservices(data.allservices);
    });
  }, []);
  return (
    <div>
      <div className="flex p-10 justify-center">
        <h1 className="text-2xl font-brexo  lg:text-4xl">Services</h1>
      </div>
      <div className="flex align-middle justify-center m-5">
        <div className="carousel carousel-end  bg-black rounded-box  ">
          {services.map((e) => {
            return (
              <>
                <div className="carousel-item m-2">
                  <div className="card w-96 bg-black ">
                    <figure style={{width:"384px",height:"256px"}}>
                      <img src={e.images}  className="w-full h-full"  alt="Shoes" />
                    </figure>
                    <div className="items-center text-center card-body">
                      <h2 className="card-title">{e.title}</h2>
                      <p>{e.message}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
