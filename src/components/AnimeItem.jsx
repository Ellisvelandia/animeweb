import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const AnimeItem = () => {
  const { id } = useParams();

  const [anime, setAnime] = useState({});
  const [characters, setCharacters] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const {
    title,
    synopsis,
    trailer,
    duration,
    aired,
    season,
    images,
    rank,
    score,
    scored_by,
    popularity,
    status,
    rating,
    source,
  } = anime;

  useEffect(() => {
    const getAnime = async (anime) => {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
      const data = await response.json();
      setAnime(data.data);
    };
    getAnime(id);
  }, []);

  useEffect(() => {
    const getCharacters = async (anime) => {
      const res = await fetch(
        `https://api.jikan.moe/v4/anime/${anime}/characters`
      );
      const data = await res.json();
      setCharacters(data.data);
    };
    getCharacters(id);
  }, []);

  return (
    <div className="py-12 xl:px-72 lg:px-40 md:px-12 px-4 bg-[#ededed] w-full">
      <h1 className="inline-block lg:text-5xl md:text-2xl text-lg mb-6 cursor-pointer transition-all p-1 web duration-100 ease-in-out hover:-skew-x-3 transform">
        {title}
      </h1>

      <div className="bg-[#fff] rounded-2xl p-8 border-solid border-[5px]">
        <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-2">
          <div className="w-full">
            <img
              src={images?.jpg.large_image_url}
              alt="anime web"
              loading="lazy"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-between md:text-lg text-base md:mt-0 mt-4">
            <p className="flex gap-4">
              <span className="font-semibold text-[#454e56]">Aired:</span>{" "}
              <span>{aired?.string}</span>
            </p>
            <p className="flex gap-4">
              <span className="font-semibold text-[#454e56]">Rating:</span>{" "}
              <span>{rating}</span>
            </p>
            <p className="flex gap-4">
              <span className="font-semibold text-[#454e56]">Rank:</span>{" "}
              <span>{rank}</span>
            </p>
            <p className="flex gap-4">
              <span className="font-semibold text-[#454e56]">Score:</span>{" "}
              <span>{score}</span>
            </p>
            <p className="flex gap-4">
              <span className="font-semibold text-[#454e56]">Score By:</span>{" "}
              <span>{scored_by}</span>
            </p>
            <p className="flex gap-4">
              <span className="font-semibold text-[#454e56]">Popularity:</span>{" "}
              <span>{popularity}</span>
            </p>
            <p className="flex gap-4">
              <span className="font-semibold text-[#454e56]">Status:</span>{" "}
              <span>{status}</span>
            </p>
            <p className="flex gap-4">
              <span className="font-semibold text-[#454e56]">Source:</span>{" "}
              <span>{source}</span>
            </p>
            <p className="flex gap-4">
              <span className="font-semibold text-[#454e56]">Season:</span>{" "}
              <span>{season}</span>
            </p>
            <p className="flex gap-4">
              <span className="font-semibold text-[#454e56]">Duration:</span>{" "}
              <span>{duration}</span>
            </p>
          </div>
        </div>
        <p className="mt-8 text-[#6c7983] leading-7 lg:text-lg md:text-base text-sm">
          {showMore ? synopsis : synopsis?.substring(0, 450) + "..."}
          <button
            onClick={() => {
              setShowMore(!showMore);
            }}
            className="bg-transparent border-none outline-none cursor-pointer md:text-xl text-base text-[#27ae60] font-semibold"
          >
            {showMore ? "Show less" : "Read more"}
          </button>
        </p>
      </div>

      <h3 className="inline-block my-12 mx-auto lg:text-3xl md:text-xl text-base cursor-pointer web p-1 items-center">
        Trailer
      </h3>
      <div className="flex justify-center items-center">
        {trailer?.embed_url && (
          <iframe
            src={trailer?.embed_url}
            title="Inline anine video trailer"
            width="800"
            height="450"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media"
            allowFullScreen
            loading="lazy"
            className="w-full lg:h-[550px] md:h-[450px] h-64 outline-none border-[5px] border-solid border-[#e5e7eb] md:p-6 p-2 rounded-lg bg-[#fff]"
          ></iframe>
        )}
      </div>
      <h3 className="inline-block my-12 mx-auto lg:text-3xl md:text-xl text-base cursor-pointer web p-1 items-center">
        Characters
      </h3>
      <div
        className="grid gap-2  bg-[#fff] md:p-2 p-1 rounded-2xl border-solid border-[5px] border-[#e5e7eb] lg:grid-cols-4 md:grid-cols-2 grid-cols-1"
      >
        {characters?.map((character, index) => {
          const { role } = character;
          const { images, name, mal_id } = character.character;
          return (
            <Link to={`/character/${mal_id}`} key={index}>
              <div className="lg:text-lg md:text-base text-sm text-center tracking-wide py-1 px-1 rounded-lg bg-[#ededed] transition-all duration-150 ease-out transform hover:-translate-y-1 place-content-center w-full">
                <div className="flex w-full justify-center">

                <img
                  src={images?.jpg.image_url}
                  alt="characters"
                  loading="lazy"
                  className="md:w-full w-[75%] py-1 md:mt-0 mt-2 object-fill md:h-auto h-[200px]"
                  />
                  </div>
                <h4 className="py-2 px-0">{name}</h4>
                <p className="text-[#27ae60]">{role}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AnimeItem;
