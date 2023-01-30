import Bora from "../assets/bora.jpeg";
import Bora2 from "../assets/bora2.jpeg";
import Bora3 from "../assets/bora3.jpeg";
import Maldives from "../assets/maldives.jpeg";
import Maldives2 from "../assets/maldives2.jpeg";
import Maldives3 from "../assets/maldives3.jpeg";
import SelectsCard from "./SelectsCard";

const Selects = ({ travel }) => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {travel.map((item, index) => {
        return (
          <SelectsCard
            key={item[0] + "_" + index}
            bg={item[1]}
            text={item[0]}
          />
        );
      })}
    </div>
  );
};

export default Selects;
