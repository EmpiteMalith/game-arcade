import React from "react";
import ExpImg from "../assets/images/exceptional.png";
import MehImg from "../assets/images/meh.webp";
import RecImg from "../assets/images/recommended.png";

type ImageProps = {
  url: string;
  alt: string;
};

interface EmojiProps {
  rating: number;
}

const Emoji = ({ rating }: EmojiProps) => {
  if (rating < 3) return null;

  const EmojiMap: { [key: number]: ImageProps } = {
    5: { url: ExpImg, alt: "Exceptional" },
    4: { url: RecImg, alt: "Recomended" },
    3: { url: MehImg, alt: "Meh" },
  };

  return (
    <img
      className="w-7 h-7 inline ml-2 -mt-1"
      src={EmojiMap[rating].url}
      alt={EmojiMap[rating].alt}
    />
  );
};

export default Emoji;
