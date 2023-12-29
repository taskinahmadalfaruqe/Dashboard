import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto">
        <div className="grid grid-cols-4">
          <div className="col-span-1 flex justify-start items-center flex-col gap-5">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active text-[#FA782F] border-b border-b-[#FA782F]" : "text-[#C4C4C4]")}>
              My Project
            </NavLink>
            <NavLink
              to="/project"
              className={({ isActive }) => (isActive ? "active text-[#FA782F] border-b border-b-[#FA782F]" : "text-[#C4C4C4]")}>
              Simple Project
            </NavLink>
          </div>

          <div className="col-span-3">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
