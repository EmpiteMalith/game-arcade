import React from "react";
import { FiPlus } from "react-icons/fi";

interface ICriticScore {
  score: number;
}

const CriticScore = ({ score }: ICriticScore) => {
  return (
    <div className="bg-darkGray text-white rounded-md px-3 py-1 w-fit text-sm mt-2 tracking-widest">
        <FiPlus className="inline mr-1" fontWeight={600} size={15} color="#fff"/>
      {score}
    </div>
  );
};

export default CriticScore;
