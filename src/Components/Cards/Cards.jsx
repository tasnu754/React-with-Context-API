import { useContext } from "react";
import SingleCard from "./SingleCard";
import HomeCardsContext from "../Context/HomeCardsContext";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Cards = () => {
  const { cards, loading, error, searchQuery, filterValue } =
    useContext(HomeCardsContext);

  let filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filterValue == "low") {
    filteredCards = filteredCards.sort((a, b) => a.price - b.price);
  } else if (filterValue == "high") {
    filteredCards = filteredCards.sort((a, b) => b.price - a.price);
  }

  if (loading)
    return (
      <div className="flex justify-center items-center mt-20">
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </div>
    );

  if (error)
    return (
      <p className="text-red-500 text-center mt-20 font-bold text-3xl">
        {error}
      </p>
    );
  return (
    <div className="w-[85%] mx-auto m-10 mt-20 grid md:grid-cols-3 gap-5">
      {filteredCards.map((card) => (
        <SingleCard card={card}></SingleCard>
      ))}
    </div>
  );
};

export default Cards;
