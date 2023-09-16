import React from "react";

function Welcome() {
  return (
    <div className="flex flex-col justify-around align-middle  lg:flex-row  lg:mt-20 ">
       
        <div className="flex flex-col p-8 items-baseline mb-10  text-white h-full lg:h-screen lg:mt-20 lg:items-center lg:align-middle lg:mb-0">
      <div className="m-2">
        <h1 className="text-4xl font-brexo">WELCOME TO FETLLA</h1>
      </div>
      <div className="m-2">
        <p className="text-2xl font-montserrat">
          Developing the Future, Securing the Present
        </p>
      </div>
      <button  class="bg-black hover:bg-white hover:text-black border border-white text-white font-montserrat py-2 px-4 rounded-full m-2">
        <a href="#about">Get started</a>
      </button>
    </div>
    </div>
  );
}

export default Welcome;
