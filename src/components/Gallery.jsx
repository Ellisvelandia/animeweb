import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/Global";
import { useParams, Link } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";

const Gallery = () => {
  const { getAnimePictures, pictures } = useGlobalContext();
  const { id } = useParams();

  const [index, setIndex] = useState(0);

  const handleImageClick = (i) => {
    setIndex(i);
  };

  useEffect(() => {
    getAnimePictures(id);
  }, [id]);

  return (
    <div className="bg-[#ededed] min-h-screen flex flex-col justify-center items-center">
      <div className="absolute lg:top-8 lg:left-8 top-2 left-2">
        <Link
          to="/"
          className="font-semibold text-[#eb5757] md:text-lg text-base flex items-center gap-2.5"
        >
          <BsArrowLeftCircleFill />
          Back to Home
        </Link>
      </div>
      <div className="relative inline-block p-8 my-8 mx-0 rounded-ms bg-[#fff] border-[5px] border-solid border-[#e5e7eb]">
        <img
          src={pictures[index]?.jpg.image_url}
          alt="pictures character anime"
          loading="lazy"
          className="w-[350px]"
        />
      </div>
      <div className="flex flex-wrap gap-2.5 w-4/5 p-8 rounded-ms bg-[#fff] border-[5px] border-solid border-[#e5e7eb]">
        {pictures?.map((picture, i) => {
          return (
            <div
              onClick={() => {
                handleImageClick(i);
              }}
              key={i}
            >
              <img
                src={picture?.jpg.image_url}
                style={{
                  border:
                    i === index ? "3px solid #27AE60" : "3px solid #e5e7eb",
                  filter: i === index ? "grayscale(0)" : "grayscale(60%)",
                  transform: i === index ? "scale(1.1)" : "scale(1)",
                  transition: "all .3s ease-in-out",
                }}
                alt="small images"
                className="w-24 h-24 object-cover rounded border-[3px] border-solid border-[#e6e7eb]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
