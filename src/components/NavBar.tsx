import { useEffect, useState } from "react";
import { FiSearch, FiMoon, FiSun } from "react-icons/fi";

const NavBar = () => {
  const [theme, setTheme] = useState<string | null>(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="flex justify-between items-center p-10">
      <span className="text-darkBlack text-xl tracking-[5px] font-semibold dark:text-white">
        RAWG
      </span>
      <div className="flex grow-2 mx-8 relative">
        <div className="search-box w-full rounded-full">
          <FiSearch
            className="search-icon absolute left-4 top-[14px]"
            color="#BFBFBF"
          />
          <input
            className="h-11 font-normal bg-darkGray rounded-full pl-10 w-full border-0 outline-none text-base placeholder:text-lightGray hover:bg-white hover:placeholder:text-gray-400"
            placeholder="Search games"
            type="text"
          />
        </div>
      </div>
      <div>
        {theme === "dark" ? (
          <FiSun
            size={20}
            color="#fff"
            className="cursor-pointer"
            onClick={() => setTheme("light")}
          />
        ) : (
          <FiMoon
            size={20}
            color="#000"
            className="cursor-pointer"
            onClick={() => setTheme("dark")}
          />
        )}
      </div>
    </div>
  );
};

export default NavBar;
