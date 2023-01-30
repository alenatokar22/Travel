import Sea from "../assets/Sea.jpg";
import Beach_evening from "../assets/Beach_evening.jpeg";
import Beach_sea from "../assets/Beach_sea.jpeg";
import Cloudy from "../assets/Cloudy.jpeg";
import Sand from "../assets/Sand.jpeg";

const Destinations = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1>All Inclusive Resorts</h1>
      <p className="py-4">On the Caribbean's Best Beaches</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={Sea}
          alt="/"
        />
        <img
          className="w-full h-full object-cover"
          src={Beach_evening}
          alt="/"
        />
        <img className="w-full h-full object-cover" src={Beach_sea} alt="/" />
        <img className="w-full h-full object-cover" src={Cloudy} alt="/" />
        <img className="w-full h-full object-cover" src={Sand} alt="/" />
      </div>
    </div>
  );
};

export default Destinations;
