import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Faq from "./Faq";

const Home = () => {
  return (
    <div className="text-center items-center px-10 pt-4 lg:py-10 ">
      <h1 className="sm:mb-5 sm:text-5xl text-2xl mb-3 font-bold">
        What can we help you with?
      </h1>
      <div className="flex justify-center mb-5">
        <div className="border-2 rounded-3xl w-[450px] md:w-[600px] flex justify-between items-center sm:p-2 pl-4 mt-1">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="ml-3 text-slate-400 w-5 h-5"
          />
          <input
            type="text"
            placeholder="Search our articles"
            className="bg-white border-none outline-none ml-3 py-2 flex-grow "
          />
        </div>
      </div>
      <Faq />
    </div>
  );
};

export default Home;
