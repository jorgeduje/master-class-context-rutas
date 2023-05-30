import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div style={{ marginBottom: "100px" }}>
        <Link to="/" style={{ fontSize: "2rem", marginRight: "50px" }}>
          Home
        </Link>
        <Link to="/login" style={{ fontSize: "2rem", marginRight: "50px" }}>
          Login
        </Link>
        {user.rol === "admin" && (
          <Link
            to="/dashboard"
            style={{ fontSize: "2rem", marginRight: "50px" }}
          >
            Dashboard
          </Link>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
