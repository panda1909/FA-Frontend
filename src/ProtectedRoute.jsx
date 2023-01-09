import { NavLink } from "react-router-dom";
import { useAuthentication } from "./Hooks/useAuthentication";
import DefaultLayout from "./Layouts/DefaultLayout";

const ProtectedRoute = ({ children }) => {
  const [user, isAuthenticated, authLogin, authLogout] = useAuthentication();
  const style = {
    display: "grid",
    placeItems: "center",
    minHeight: "100vh",
  };

  if (!isAuthenticated) {
    return (
      <DefaultLayout>
        <section style={style}>
          <div className="text-center">
            <h2 style={{ fontSize: "6vw" }}> ⚠️ </h2>
            <h1>You are not allowed to access this page.</h1>
            <p>You have to login to access this page.</p>
            <br />
            <br />
            <div className="d-flex justify-content-center align-items-center">
              <NavLink to="/login" className="btn btn-main">
                Log in Now
              </NavLink>
              <span className="px-3">or</span>
              <NavLink to="/" className="btn btn-main">
                Go to HOME
              </NavLink>
            </div>
          </div>
        </section>
      </DefaultLayout>
    );
  }

  return children;
};

export default ProtectedRoute;
