import React, { useState } from "react";
import { useGlobalContext } from "../context/Global";
import { AiTwotoneFire } from "react-icons/ai";
import Popular from "./Popular";
import Upcoming from "./Upcoming";
import Airing from "./Airing";

const HomePage = () => {
  const {
    handleSubmit,
    search,
    searchAnime,
    handleChange,
    getUpcomingAnime,
    getAiringAnime,
    getPopularAnime,
  } = useGlobalContext();

  const [rendered, setRendered] = useState("popular");

  const switchComponent = () => {
    switch (rendered) {
      case "popular":
        return <Popular rendered={rendered} />;
      case "airing":
        return <Airing rendered={rendered} />;
      case "upcoming":
        return <Upcoming rendered={rendered} />;
      default:
        return <Popular rendered={rendered} />;
    }
  };

  return (
    <div className="bg-[#ededed] w-full">
      <header className="py-8 md:px-8 2xl:w-3/5 my-0 mx-auto transition-all ease-in-out duration-300">
        <div className="flex justify-center items-center mb-8">
          <h1 className="md:text-2xl text-xl">
            {rendered === "popular"
              ? "Popular Anime"
              : rendered === "airing"
              ? "Airing Anime"
              : "Upcoming Anime"}
          </h1>
        </div>
        <div className="w-full flex md:flex-nowrap flex-wrap items-center justify-center md:gap-4 gap-1">
            <button
              className="flex items-center gap-2.5 py-2.5 px-6 outline-none rounded-3xl md:text-lg text-base cursor-pointer transition-all ease-in-out duration-75 text-inherit border-solid border-[5px] border-[#e5e7eb]"
              onClick={() => {
                setRendered("popular");
              }}
            >
              Popular <AiTwotoneFire color="red" />
            </button>
          <form action="" className="relative w-full" onSubmit={handleSubmit}>
            <div className="w-full">
              <input
                type="text"
                placeholder="Search Anime"
                value={search}
                onChange={handleChange}
                className="w-full py-2.5 px-4 outline-none rounded-3xl text-base bg-[#fff] border-solid border-[5px] border-[#e5e7eb] transition-all ease-in-out duration-150 md:text-lg"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 text-base pr-4 transform -translate-y-1/2 md:text-lg"
              >
                Search
              </button>
            </div>
          </form>
          <div className="filter-btn airing-filter">
            <button
              className="flex items-center gap-2.5 py-2.5 px-6 outline-none rounded-3xl md:text-lg text-base cursor-pointer transition-all ease-in-out duration-75 text-inherit border-solid border-[5px] border-[#e5e7eb]"
              onClick={() => {
                setRendered("airing");
                getAiringAnime();
              }}
            >
              Airing
            </button>
          </div>
          <div className="filter-btn upcoming-filter">
            <button
              className="flex items-center gap-2.5 py-2.5 px-6 outline-none rounded-3xl md:text-lg text-base cursor-pointer transition-all ease-in-out duration-75 text-inherit border-solid border-[5px] border-[#e5e7eb]"
              onClick={() => {
                setRendered("upcoming");
                getUpcomingAnime();
              }}
            >
              Upcoming
            </button>
          </div>
        </div>
      </header>
      {switchComponent()}
    </div>
  );
};

export default HomePage;
