import React, { useState } from "react";
import Adminnav from "../components/Adminnav";
import Adminlayout from "../components/Adminlayout";
import axiosinstance from "../Axios";
import Usevalidate from "../customhooks/Validation";
import Loader from "../components/Loader";
import { useDispatch } from "react-redux";
import { Authaction } from "../Redux/Authslice";

function Services() {
  const { handelChange, values, errors,removevalue } = Usevalidate();
  const [image, setimage] = useState("");
  const [loading,setloading] = useState(false)
  const dispatch = useDispatch()
  const base64 = () => {
    return new Promise((resolve, reject) => {
      const filreader = new FileReader();
      filreader.readAsDataURL(image);
      filreader.onload = () => {
        resolve(filreader.result);
      };
      filreader.onerror = () => {
        reject(filreader.error);
      };
    });
  };
  const handelsub = async () => {
    alert('vlo')
    console.log(image)
    console.log(Object.keys(values).length)
    console.log(Object.keys(errors).length)
    if (image && Object.keys(values).length === 2 && Object.keys(errors).length === 0) {
      alert(image.size)
      if (image.size < 5242880) {
        setloading(true)
        const imgconvert = await base64(image);
        console.log(imgconvert);
        const {title,message} = values
        axiosinstance.post("/services/createnewservices",{imgconvert,title,message}).then((data)=>{
          alert('done')
          setloading(false)
          removevalue()
        }).catch((er)=>{
          removevalue()
          alert('failed')
          setloading(false)
          dispatch(Authaction.Setlogout())
        });
      } else {
      
        alert("only images below 5 mb are allowed");
        fileref.current.value = "";

        setloading(false);
        return;
      }
    }
    else{
      alert('error in input fields')
      
    }
  };

  const handelfile = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      setimage(e.target.files[0]);
    }
  };

  return (
    <div>
      <Adminnav />
      <Adminlayout>
        <h1 className="font-brexo text-center">Add new services</h1>
       
       {
        loading ? <Loader/> : <div className="p-5 md:p-0">
         <div class="mb-6">
        <label for="message" className="block mb-2 text-sm font-medium text-black mt-2 ">Service Title</label>
            
          <input
            type="text"
            id="blogtitle"
            name="title"
            value={values.title}
            onChange={handelChange}
            maxLength={25}
            placeholder="Enter the title of your service"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          ></input>
          <p className="text-red-500 text-xs italic h-4">{errors.title}</p>
        </div>
        <div>
        <label  className="block mb-2 text-sm font-medium text-black mt-2 ">Service Image</label>
            
          <input
            onChange={(e) => handelfile(e)}
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
          ></input>
        </div>
        
        <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-black mt-2 ">Service Description</label>
              <textarea id="message" rows="6" name='message' value={values.message} onChange={handelChange} className="block p-2.5 w-full text-sm text-white50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 bg-white" placeholder="Description..."></textarea>
              <p className="text-red-500 text-xs italic h-4 mt-1">
                  {errors.message}
                </p>
          </div>
        <button
          type="button"
          onClick={handelsub}
          class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-10"
        >
          Submit
        </button>
        </div>
       }
      </Adminlayout>
    </div>
  );
}

export default Services;
