import React, { useState } from 'react'
import Adminnav from '../components/Adminnav'
import Adminlayout from '../components/Adminlayout'
import axiosinstance from '../Axios';
import Loader from '../components/Loader';
import { Authaction } from '../Redux/Authslice';
import { useDispatch } from 'react-redux';

function Addreviews() {
    const [image,setimage] = useState('')
    const [loading,setloading] = useState(false)
    const dispatch = useDispatch();
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
        setloading(true)
      if(image){
      if (image.size < 5242880) {
          const imgconvert = await base64(image);
          console.log(imgconvert);
         
          await axiosinstance.post('/review/createnewreview',{imgconvert}).then((data)=>{
            alert('done')
            setloading(false)
          }).catch((er)=>{
            alert('err,login again')
            dispatch(Authaction.Setlogout())
          })
        } else {
          imagesizeexeds = true;
          alert("only images below 5 mb are allowed");
          fileref.current.value = "";
  
          setloading(false);
          return;
        }
      }
      else{
        setloading(false)
        alert('no img choosen')
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
        <h1 className="font-brexo text-center">Add Reviews</h1>
        {
            loading ? <Loader/> : <>
            <div>
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            for="file_input"
          >
            Upload file
          </label>
          <input
            onChange={(e) => handelfile(e)}
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
          ></input>
        </div>
        <button
          type="button"
          onClick={handelsub}
          class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-10"
        >
          Submit
        </button>
            </>
        }
      </Adminlayout>
      
    </div>
  )
}

export default Addreviews
