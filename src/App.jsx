import React, { useEffect } from "react";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";

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
      <div className="w-full flex flex-wrap text-white bg-gradient-to-t from-black bg-slate-800 grid-cols-10 md:grid-cols-8 gap-5 sm:grid-cols-5 items-center justify-center">
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
                <FaArrowDown className="text-white cursor-pointer"/>
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
