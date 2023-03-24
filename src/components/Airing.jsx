import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/Global";

const Airing = ({ rendered }) => {
  const { airingAnime, isSearch, searchResults } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch && rendered === "airing") {
      return airingAnime?.map((anime) => {
        return (
          <Link
            className="xl:h-[500px] md:h-[400px] rounded-md border-solid border border-[#e5e7eb] md:px-0 px-8 hover:scale-105 transition-all ease-in-out duration-500"
            to={`/anime/${anime.mal_id}`}
            key={anime.mal_id}
          >
            <img
              src={anime.images.jpg.large_image_url}
              alt={anime.mal_id}
              className="w-full h-full aspect-square rounded-sm"
              loading="lazy"
            />
          </Link>
        );
      });
    } else {
      return searchResults?.map((anime) => {
        return (
          <Link
            className="xl:h-[500px] md:h-[400px] rounded-md border-solid border border-[#e5e7eb] md:px-0 px-8 hover:scale-105 transition-all ease-in-out duration-500"
            to={`/anime/${anime.mal_id}`}
            key={anime.mal_id}
          >
            <img
              src={anime.images.jpg.large_image_url}
              alt={anime.mal_id}
              className="w-full h-full aspect-square rounded-sm"
            />
          </Link>
        );
      });
    }
  };

  return (
    <div className="flex px-1">
      <div className="mt-8 pt-8 pb-8 lg:pl-20 w-full grid gap-8 bg-[#fff] border-[5px] border-solid border-[#e5e7eb] xl:grid-cols-5 md:grid-cols-2 grid-cols-1 lg:grid-cols-4">
        {conditionalRender()}
      </div>
    </div>
  );
};

export default Airing;