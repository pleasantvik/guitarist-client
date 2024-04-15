import { BasePaths, DashboardPath } from "@/constants/path";
import { logOut, AuthHelper } from "@/helpers/auth";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut();
    navigate("/");
  };

  const auth = new AuthHelper();
  const userLoggedIn = auth.isAuthenticated();

  return (
    <header className="bg-primary-bcg text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-1/4">
          <div className="text-white text-4xl py-3 font-[Monoton]">Waves</div>
        </div>
        <div className="flex-grow ">
          <div className="top flex justify-end gap-4">
            <>
              <div className="cart_link">
                <span>0</span>
                <span
                  onClick={() => {
                    navigate("dashboard/user/user_cart");
                    console.log("Clcik");
                  }}
                >
                  My Cart
                </span>
              </div>
              <NavLink to={`${BasePaths.ADMIN}/${DashboardPath.DASHBOARD}`}>
                My Account
              </NavLink>
              <span onClick={handleLogout} className="cursor-pointer">
                Logout
              </span>
              {userLoggedIn && <NavLink to="/signin">Log in</NavLink>}
            </>
          </div>
          <div className="bottom flex gap-4 justify-end">
            {userLoggedIn && <NavLink to="/">Home</NavLink>}
            <NavLink to="shop">Shop</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
