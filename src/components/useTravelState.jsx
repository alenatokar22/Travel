import Bora from "../assets/bora.jpeg";
import Bora2 from "../assets/bora2.jpeg";
import Bora3 from "../assets/bora3.jpeg";
import Maldives from "../assets/maldives.jpeg";
import Maldives2 from "../assets/maldives2.jpeg";
import Maldives3 from "../assets/maldives3.jpeg";

import { useState } from "react";

export const useTravelState = () => {
  const arrayTravel = [
    ["Bora Bora", Bora],
    ["Maldives", Bora2],
    ["Antigua", Bora3],
    ["Cozumel", Maldives],
    ["Jamaica", Maldives2],
    ["Key West", Maldives3],
  ];

  const [travel, setTravel] = useState(arrayTravel);

  const filterTravelDataKey = (text) => {
    console.log(travel);
    setTravel(...travel);
  };

  return { travel, filterTravelDataKey };
};
