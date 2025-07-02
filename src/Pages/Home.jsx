import Cards from "../Components/Cards/Cards";
import Filter from "../Components/Filter/Filter";
import Searchbar from "../Components/Searchbar/Searchbar";

const Home = () => {
  return (
    <>
      <div className="md:flex justify-evenly ">
        <Searchbar></Searchbar>
        <Filter></Filter>
      </div>

      <Cards></Cards>
    </>
  );
};

export default Home;
