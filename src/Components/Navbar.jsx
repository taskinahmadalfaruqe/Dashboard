import logo from "../assets/logo.png";
import user from "../assets/user.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-white py-2">
      <div className="container flex justify-between items-center ">
        <div className="lg:hidden">
          <FaBars />
        </div>
        <div>
          <img src={logo} alt="Site_logo" />
        </div>
        <div className="w-10 h-10">
          <img src={user} alt="userImage" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
