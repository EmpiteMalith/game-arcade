import { GAMES } from "../types/game.types";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformList from "./PlatformList";

interface GameCardProps {
  data: GAMES.IGame;
}

const GameCard = ({ data }: GameCardProps) => {
  return (
    <div className="bg-nero rounded-md overflow-hidden">
      <img
        className="h-[215px] w-full"
        src={data.background_image}
        alt="game"
      />
      <div className="p-3">
        <PlatformList
          platform={data.parent_platforms.map((item) => item.platform)}
        />
        <div className="text-2xl leading-7 text-white font-semibold mt-3">
          {data.name}
          <Emoji rating={data.rating_top} />
        </div>
        <CriticScore score={data.metacritic}/>
      </div>
    </div>
  );
};

export default GameCard;
