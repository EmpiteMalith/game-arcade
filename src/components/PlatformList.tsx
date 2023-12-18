import React, { ReactNode } from "react";
import { GAMES } from "../types/game.types";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";

interface Platforms {
  platform: GAMES.IPlatform[];
}

const PlatformList = ({ platform }: Platforms) => {
  const Platforms: { [key: string]: ReactNode } = {
    pc: <FaWindows />,
    xbox: <FaXbox />,
    playstation: <FaPlaystation />,
    nintendo: <SiNintendo />,
    mac: <FaApple />,
    android: <FaAndroid />,
    ios: <MdPhoneIphone />,
    linux: <FaLinux />,
    web: <BsGlobe />,
  };

  return (
    <div className="flex items-center gap-3 mt-1 text-white text-lg">
      {platform.map((item) => Platforms[item.slug])}
    </div>
  );
};

export default PlatformList;
