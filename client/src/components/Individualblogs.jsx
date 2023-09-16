import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosinstance from "../Axios";
import { format } from "timeago.js";
import Loader from "./Loader";

function Individualblogs() {
  const [blog, setblog] = useState({});
  const { id } = useParams();
  const [loading,setloading] = useState(false)
  useEffect(() => {
    setloading(true)
    axiosinstance.get(`blog//getspecficblog/${id}`).then(({ data }) => {
      setblog(data.blog);
      setloading(false)
    });
  }, []);

  return (
    <div className="m-5 p-5">
     {loading ? <div className='flex justify-center align-middle'><Loader/></div>: <>
     <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <header class="mb-4 lg:mb-6 not-format">
          <address class="flex items-center mb-6 not-italic">
            <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
              <div>
                <a href="#" rel="author" class="text-xl font-bold text-white">
                  {blog.authname}
                </a>
                <p class="text-base font-light text-gray-500 dark:text-gray-400">
                  <time
                    pubdate
                    datetime="2022-02-08"
                    title="February 8th, 2022"
                  >
                    {format(blog?.createdAt)}
                  </time>
                </p>
              </div>
            </div>
          </address>
          <h1 class="mb-4 text-3xl font-extrabold leading-tight  lg:mb-6 lg:text-4xl text-white">
            {blog.title}
          </h1>
        </header>

        <figure>
          <img src={blog.img} alt=""></img>
        </figure>
        <p class="lead mb-4 mt-4"></p>
        <div
          class="lead mb-4"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>
      </article>
     </>}
    </div>
  );
}

export default Individualblogs;
