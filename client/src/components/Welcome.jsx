import React from "react";

function Welcome() {
  const isMobile = window.innerWidth <= 767;

  const myStyles = isMobile
    ? {
        height: "90vh",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }
    : {
        /* Styles for Desktop Window. Already Used Tailwind */
      };

  return (
    <div className="flex flex-col justify-around align-middle lg:flex-row lg:mt-20 ">
      <div
        style={myStyles}
        className="flex flex-col p-8 items-baseline mb-10 text-white h-full lg:h-screen lg:mt-20 lg:items-center lg:align-middle lg:mb-0"
      >
        <div className="m-2">
          <h1 className="text-3xl font-brexo md:text-4xl lg:text-4xl">
            WELCOME TO FETLLA
          </h1>
        </div>
        <div className="m-2">
          <p className="text-2xl font-montserrat">
            Developing the Future, Securing the Present
          </p>
        </div>
        <button className="bg-black hover:bg-white hover:text-black border border-white text-white font-montserrat py-2 px-4 rounded-full m-2">
          <a href="#about">Get started</a>
        </button>
      </div>
    </div>
  );
}

export default Welcome;
