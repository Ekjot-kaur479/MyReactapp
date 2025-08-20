import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center mt-5">
      <h1 className="fw-bold text-primary">🌍 Welcome to MyApp</h1>
      <p className="lead mt-3">
        Manage your countries efficiently with our simple and modern React app.
      </p>
      <Link to="/country" className="btn btn-lg btn-success mt-4">
        🚀 Go to Country Manager
      </Link>

      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card shadow-lg border-0">
            <div className="card-body">
              <h5 className="card-title">📌 Easy Navigation</h5>
              <p className="card-text">Switch between pages quickly with React Router.jdhejhiuhiurhunmdf mnbnmsbnsbbhjdsbhdkskueu nm hbhjjnj</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-lg border-0">
            <div className="card-body">
              <h5 className="card-title">⚡ Fast Performance</h5>
              <p className="card-text">Powered by Vite + React for instant loading speed.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-lg border-0">
            <div className="card-body">
              <h5 className="card-title">🎨 Beautiful UI</h5>
              <p className="card-text">Bootstrap + Icons for a clean and modern look.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
