import { useContext } from "react";
import SingleCard from "./SingleCard";
import HomeCardsContext from "../Context/HomeCardsContext";

const Cards = () => {
  const { cards, searchQuery, filterValue } = useContext(HomeCardsContext);

  let filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filterValue == "low") {
    filteredCards = filteredCards.sort((a, b) => a.price - b.price);
  } else if (filterValue == "high") {
    filteredCards = filteredCards.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="w-[85%] mx-auto m-10 mt-20 grid md:grid-cols-3 gap-5">
      {filteredCards.map((card) => (
        <SingleCard card={card}></SingleCard>
      ))}
    </div>
  );
};

export default Cards;
