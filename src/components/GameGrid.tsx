
import useGet from "../hooks/useGet";
import { GAMES } from "../types/game.types";

const GameGrid = () => {
  const { data ,error, isLoading} = useGet<GAMES.IGame>("/games");
  console.log("data", data);

  isLoading && <h1 className="text-white">Loading....</h1>

  return <div className="grid grid-cols-4 gap-2">
    {
      data.map((game)=>(
        <div className="flex flex-col" key={game.id}>
           <img className="h-80 w-80 rounded-lg object-cover" src={game.background_image}/>
           <h3>{game.name}</h3>
        </div>
      ))
    }
  </div>;
};

export default GameGrid;
