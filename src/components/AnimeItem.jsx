import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AnimeItem = () => {
  const { id } = useParams();

  const [anime, setAnime] = useState({});
  const [characters, setCharacters] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const getAnime = async (anime) => {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
      const data = await response.json();
      setAnime(data.data);
    };
    getAnime(id);
  }, []);

  console.log(anime);
  return <div>AnimeItem</div>;
};

export default AnimeItem;
