import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header className="bg-dark text-white p-3 shadow-sm sticky-top">
      <div className="container d-flex justify-content-between align-items-center">
        <h2 className="m-0">🌍 MyApp</h2>
        <nav>
          <Link
            to="/"
            className={`me-3 text-decoration-none ${
              location.pathname === "/" ? "text-warning fw-bold" : "text-white"
            }`}
          >
            Home
          </Link>
          <Link
            to="/country"
            className={`text-decoration-none ${
              location.pathname === "/country" ? "text-warning fw-bold" : "text-white"
            }`}
          >
            Country
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
