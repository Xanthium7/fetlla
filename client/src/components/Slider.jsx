import React, { useEffect, useState } from "react";
import axiosinstance from "../Axios";

function Slider() {
  const [slides,setslices] = useState([])
  useEffect(()=>{
    axiosinstance.get('/review/getreview').then(({data})=>{
      setslices(data.data)
    }).catch((er)=>{
      console.log(er)
    })

  },[])
  


  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    
    <div className="flex align-middle justify-center m-5">
      
      <div className="carousel carousel-end rounded-box animate-slide">
        {slides.map((e) => {
          return (
            <div key={e._id} className="carousel-item" style={{height:"300px"}}>
              <img height="300" width="300"  className="m-2"  src={e.images} alt="Drink"  />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
