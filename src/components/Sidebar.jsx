import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/Global";

const Sidebar = () => {
  const { popularAnime } = useGlobalContext();

  const sorted = popularAnime?.sort((a, b) => {
    return b.score - a.score;
  });

  return (
    <div className="mt-8 bg-[#fff] border-solid border-[5px] border-[#e5e7eb] md:pr-20 md:pl-8 pt-8">
      <h3 className="text-xl text-center">Top 5 Popular</h3>
      <div className="flex flex-col md:w-40 w-full justify-center">
        {sorted?.slice(0, 5).map((anime) => {
          return (
            <Link
              to={`/anime/${anime.mal_id}`}
              key={anime.mal_id}
              className="mt-4 flex flex-col gap-1.5 text-[#27ae60]"
            >
              <div className="rounded-md border-solid border border-[#e5e7eb] md:px-0 px-8 hover:scale-105 transition-all ease-in-out duration-500">
                <img
                  src={anime.images.jpg.large_image_url}
                  alt="images"
                  className="w-full h-full aspect-square rounded-sm"
                />
              </div>
              <h5 className="md:text-lg text-base text-center">
                {anime.title}
              </h5>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
