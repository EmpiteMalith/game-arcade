import "./App.css";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="dark:bg-darkBlack flex flex-col">
      <NavBar />
      <div className="w-full flex gap-3 h-full p-5">
        <div className="flex-1 h-full"></div>
        <div className="flex-4 h-full">
          <GameGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
