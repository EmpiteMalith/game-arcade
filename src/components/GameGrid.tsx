import useGet from "../hooks/useGet";
import { GAMES } from "../types/game.types";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";
import { FiPlus } from "react-icons/fi";

const GameGrid = () => {
  const { data, isLoading } = useGet<GAMES.IGame>("/games");

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-6">
      {isLoading &&
        [...Array(8)].map((index) => <GameCardSkelton key={index} />)}
      {data.map((game) => (
        <GameCard key={game.id} data={game} />
      ))}
    </div>
  );
};

export default GameGrid;
