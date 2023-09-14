import React, { useMemo, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import Adminnav from "../components/Adminnav";
import Adminlayout from "../components/Adminlayout";
import Usevalidate from "../customhooks/Validation";
import axiosinstance from "../Axios";
import Loader from "../components/Loader";
import { useDispatch } from "react-redux";
import { Authaction } from "../Redux/Authslice";

function Addblog() {
  let { handelChange, values, errors } = Usevalidate();
  const [contenter, setcontenter] = useState();
  const [image, setimage] = useState();
  const fileref = useRef();
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();

  const config = useMemo(
    () => ({ buttons: ["bold", "italic", "underline", "ul", "ol"] }),
    []
  );

  const handelfile = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      setimage(e.target.files[0]);
    }
  };
  const handelcontent = (html) => {
    // Remove HTML tags from the content
    const textWithoutTags = html.replace(/<[^>]+>/g, "");
    // Split the content into words using space as a separator
    const words = textWithoutTags.trim().split(/\s+/);
    // Count the number of words
    if (words.length <= 4) {
      setcontenter("content should be atleast 5 words");
    } else {
      setcontenter("");
    }
    setContent(html);
  };
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

  const sub = async (e) => {
    e.preventDefault();
    let imagesizeexeds = false;
    let blogimage = null;
    setloading(true);
    if (Object.keys(errors).length === 0 && Object.keys(values).length === 2) {
      if (image) {
        if (image.size < 5242880) {
          const imgconvert = await base64(image);
          console.log(imgconvert);
          blogimage = imgconvert;
        } else {
          imagesizeexeds = true;
          alert("only images below 5 mb are allowed");
          fileref.current.value = "";

          setloading(false);
          return;
        }

        axiosinstance
          .post("/blog/createblog", {
            blogimage,
            values,
            content,
          })
          .then((data) => {
            alert("uploades succesfully");
            values.authname = "";
            values.title = "";
            setContent("");
            setloading(false);
          })
          .catch((er) => {
            alert("erre happend,login again");
            setloading(false);
            dispatch(Authaction.Setlogout())
          });
      }
    }

    console.log(image);
    console.log(content);
    console.log(values);
    console.log(errors);
  };
  const editor = useRef(null);
  const [content, setContent] = useState("");
  return (
    <div>
      <Adminnav />
      <Adminlayout>
        {loading ? (
          <>
            <Loader />
          </>
        ) : (
          <div className="flex align-middle items-center justify-center flex-col md:block">
            <form onSubmit={sub}>
              <div class="mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Author Name
                </label>
                <input
                  type="text"
                  value={values.authname}
                  onChange={handelChange}
                  name="authname"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Enter your name"
                  required
                ></input>
                <p className="text-red-500 text-xs italic h-4">
                  {errors.authname}
                </p>
              </div>
              <div class="mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Blog title
                </label>
                <input
                  type="text"
                  id="blogtitle"
                  name="title"
                  value={values.title}
                  onChange={handelChange}
                  maxLength={25}
                  placeholder="Enter the title of your blog"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                ></input>
                <p className="text-red-500 text-xs italic h-4">
                  {errors.title}
                </p>
              </div>
              <div className="mb-6">
                <label
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  for="file_input"
                >
                  Upload file
                </label>
                <input
                  onChange={(e) => handelfile(e)}
                  ref={fileref}
                  className=" block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input"
                  type="file"
                ></input>
              </div>
              <div class="mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Content
                </label>
                <JoditEditor
                
                  name="editor"
                  ref={editor}
                  value={content}
                  onChange={(content) => handelcontent(content)}
                />
                <p className="text-red-500 text-xs italic h-4">{contenter}</p>
              </div>
              <div class="flex items-start mb-6"></div>
              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create New Blog
              </button>
            </form>
            <h2>Displaying the Content:</h2>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        )}
      </Adminlayout>
    </div>
  );
}

export default Addblog;
