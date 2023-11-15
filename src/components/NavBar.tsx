import { FiSearch } from "react-icons/fi";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-10">
      <span className="text-white text-lg tracking-[5px]">RAWG</span>
      <div className="flex grow-2 mx-8 relative">
        <FiSearch className="absolute left-4 top-[14px]" color="#BFBFBF" />
        <input
          className="h-11 bg-darkGray rounded-full pl-10 w-full border-0 outline-none text-base focus:bg-white placeholder:text-lightGray"
          placeholder="Search games"
          type="text"
        />
      </div>
      <div>dark</div>
    </div>
  );
};

export default NavBar;
