import beach from "../assets/beach.mp4";
import SearchBar from "./SearchBar";

const Hero = ({ searchTravelFunction }) => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={beach}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1>First Class Travel</h1>
        <h2 className="py-4">Top 1% Locations Worldwide</h2>
        <SearchBar searchTravelFunction={searchTravelFunction} />
      </div>
    </div>
  );
};

export default Hero;
