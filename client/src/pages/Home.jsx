import { Link } from "react-router-dom";
import "../index.css";

const businesses = [
  { id: 1, name: "Cafe Delhi", category: "Cafe", location: "Delhi" },
  { id: 2, name: "Pizza Hub", category: "Restaurant", location: "Noida" },
];

function Home() {
  return (
    <div className="container">
      <h1>Local Business Reviews</h1>

      {businesses.map((b) => (
        <div key={b.id} className="card">
          <h2>{b.name}</h2>
          <p>{b.category}</p>
          <p>{b.location}</p>

          <Link to={`/business/${b.id}`}>
            <button className="button">View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;