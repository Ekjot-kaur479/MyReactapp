import { useState } from "react";
import Swal from "sweetalert2";

function Country() {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (country.trim() === "") {
      Swal.fire("Oops!", "Country name cannot be empty!", "error");
      return;
    }

    setCountries([...countries, country]);
    Swal.fire("Success!", `${country} added successfully!`, "success");
    setCountry("");
  };

  return (
    <div className="container mt-5">
      <h1 className="fw-bold text-primary mb-4">🌎 Manage Countries</h1>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row g-3">
          <div className="col-md-6">
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Enter country name"
              className="form-control form-control-lg"
            />
          </div>
          <div className="col-md-6">
            <button type="submit" className="btn btn-success btn-lg w-100">
              ➕ Add Country
            </button>
          </div>
        </div>
      </form>

      <h3 className="mt-4">📋 Country List</h3>
      {countries.length === 0 ? (
        <p className="text-muted">No countries added yet.</p>
      ) : (
        <ul className="list-group mt-3 shadow-sm">
          {countries.map((c, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {c}
              <span className="badge bg-primary rounded-pill">{index + 1}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Country;
