import React from "react";
import { useGlobalContext } from "../context/Global";
import { Link } from "react-router-dom";

const Popular = () => {
  const { popularAnime, isSearch } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch) {
      return popularAnime.map((anime) => {
        return (
          <Link className="h-[500px] rounded-md border-solid border border-[#e5e7eb]" to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img src={anime.images.jpg.large_image_url} alt={anime.mal_id} className="w-full h-full object-cover rounded-sm"/>
          </Link>
        );
      });
    }
  };

  return (
    <div className="flex">
      <div
        className="mt-8 pt-8 pb-8 pl-20 w-full grid gap-8 bg-[#fff] border-[5px] border-solid border-[#e5e7eb]"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
      >
        {conditionalRender()}
      </div>
    </div>
  );
};

export default Popular;
