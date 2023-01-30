import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import TravelTour from "./components/TravelTour";
import Selects from "./components/Selects";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import { useTravelState } from "./components/useTravelState";

function App() {
  const { travel, filterTravelDataKey } = useTravelState();
  return (
    <div>
      <Navbar />
      <Hero searchTravelFunction={filterTravelDataKey} />
      <Destinations />
      <TravelTour />
      <Selects travel={travel} />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
