import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const TravelTour = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className="py-4 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            placeat pariatur cupiditate. Ipsam nesciunt voluptatum autem. Quos
            repellat rerum, mollitia, voluptas, porro ducimus facilis saepe
            quasi eum ipsam ab cumque. Nisi in similique magni? Minus molestiae
            optio dicta inventore fugit eligendi sapiente eos unde ipsa tempora
            animi dignissimos culpa impedit, temporibus natus. Doloremque fugit,
            quaerat eius sed sunt quia impedit! Perspiciatis eos, rerum libero
            aliquam neque odit nesciunt fugit iste, quo molestias nemo possimus
            incidunt accusantium ipsum? Fugit iure, rerum obcaecati autem quasi
            facere reiciendis, at expedita, provident sed incidunt! Dolores quis
            vitae deserunt consequuntur earum doloremque quidem est. Repudiandae
            illum ipsum doloribus dolores neque, cum omnis qui alias itaque
            eligendi atque voluptatum excepturi quis dicta officia rem
            distinctio consequuntur! Explicabo, itaque! Eos quod illum minus
            rerum dignissimos deserunt sed laboriosam sunt? Praesentium odit
            quas quo natus consectetur porro similique repellat aut. Ipsa earum
            ratione voluptatibus laudantium, odit consequatur sapiente.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">AUTOMATED BOOKINGS</h3>
              <p className="py-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border text-center">
          <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
          <p className="py-4">12 HOURS LEFT</p>
          <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label className="text-center">Destination</label>
            <select className="border rounded-md p-2">
              <option>Grande Antiqua</option>
              <option>Key West</option>
              <option>Maldives</option>
              <option>Cozumel</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label className="text-center">Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col my-2">
            <label className="text-center">Check-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <button className="w-full my-4">Rates & Availabilities</button>
        </form>
      </div>
    </div>
  );
};

export default TravelTour;
