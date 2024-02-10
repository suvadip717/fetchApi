import React, { useEffect } from "react";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { IoMdEye } from "react-icons/io";

function App() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=2&limit=100")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPhotos(data);
      });
  }, []);

  return (
    <>
      <div>
        <div className="flex w-full h-16 bg-black text-white content-center justify-between px-4 items-center fixed ">
          <div>
            <FaFacebook size={40} />
          </div>
          <div className="flex p-2">
            <div className="text-xl font-semibold w-20 h-8 hover:scale-105 duration-300 m-2">
              Home
            </div>
            <div className="text-xl font-semibold w-20 h-8 hover:scale-105 duration-300 m-2">
              About
            </div>
            <div className="text-xl font-semibold w-20 h-8 hover:scale-105 duration-300 m-2">
              Help
            </div>
          </div>
          <div>
            <IoIosLogOut size={40} />
          </div>
        </div>

        <div className="w-full flex flex-wrap text-white bg-gradient-to-b from-black bg-slate-800 grid-cols-10 md:grid-cols-8 gap-5 sm:grid-cols-5 items-center justify-center pt-10">
          {photos.map(({ id, download_url, author }) => (
            <div key={id} className="pt-6 h-80 w-72 m-8">
              <img
                className="rounded-tr-lg rounded-tl-lg h-76 w-68 "
                src={download_url}
                alt=""
                srcset=""
              />
              <div className="flex h-16 justify-center items-center w-68 text-white rounded-br-lg rounded-bl-lg bg-gradient-to-r from-cyan-500 to-blue-500 overflow-visible">
                <button className="w-4/5 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {author}
                </button>
                <button className="w-12 p-4 m-4 h-12 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 duration-200 hover:scale-105">
                  <a
                    href={download_url}
                    // download={download_url}
                    target="_blank"
                  >
                    <IoMdEye className="text-white cursor-pointer text-xl items-center" />
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
