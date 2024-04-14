import { ADMIN_SIDENAV, USER_SIDENAV } from "@/constants/sideNav";
import { useAppSelector } from "@/store";
import { NavLink } from "react-router-dom";

// const active = ({ isActive }: { isActive: boolean }) => {
//   return {
//     color: isActive ? "#0000FF" : "#334155",
//     fill: isActive ? "#0000FF" : "#334155",
//     borderLeft: isActive ? "2px solid #0000FF" : "#334155",
//     transition: "all .3s",
//   };
// };
const Sidebar = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <div>
      <nav className="flex flex-col gap-2 pl-2">
        {USER_SIDENAV.map((nav) => {
          return (
            <NavLink to={nav.path} key={nav.path}>
              <span>{nav.name}</span>
            </NavLink>
          );
        })}

        {user?.data?.roles === "admin" && (
          <div className="flex flex-col mt-8 gap-2">
            {ADMIN_SIDENAV.map((nav) => (
              <NavLink to={nav.path} key={nav.path}>
                <span>{nav.name}</span>
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
