import { BsThreeDotsVertical } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full flex items-center flex-col fixed top-0 left-0 bg-black text-slate-50 z-10">
      <div className="container   flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <h2 className="text-4xl font-bold text-sky-500 "> JT </h2>
          <div className="flex items-center flex-col gap-1 border-l-2 px-2 border-white">
            <p> JAY </p>
            <p> TAILORS</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link to={"/users"}>
            {" "}
            <FaSearch />{" "}
          </Link>
          <Link to={"/users"}>
            {" "}
            <BsThreeDotsVertical />{" "}
          </Link>
        </div>
      </div>
      <div className=" w-96  bg-black flex items-center justify-around gap-3 px-1 py-2 rounded-xl ">
        <Link to={"/form"}> Add New </Link>
        <Link to={"/users"}> Customers </Link>
      </div>
    </div>
  );
};

export default Navbar;
