import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import API from "../api/api";
import "../index.css";

function BusinessPage() {
  const { id } = useParams();

  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({
    user: "",
    rating: "",
    comment: "",
  });

  // fetch reviews
  useEffect(() => {
    API.get(`/reviews/${id}`).then(res => {
      setReviews(res.data);
    });
  }, [id]);

  const handleSubmit = async () => {
    if (!form.user || !form.rating || !form.comment) return;

    await API.post("/review", {
      ...form,
      businessId: id
    });

    // refresh
    const res = await API.get(`/reviews/${id}`);
    setReviews(res.data);

    setForm({ user: "", rating: "", comment: "" });
  };

  return (
    <div className="container">
      <h1>Business {id}</h1>

      <h2>Reviews</h2>
      {reviews.map((r, i) => (
        <div key={i} className="card">
          <h3>{r.user}</h3>
          <p>Rating: {r.rating}</p>
          <p>{r.comment}</p>
        </div>
      ))}

      <h2>Add Review</h2>

      <input
        placeholder="Your Name"
        value={form.user}
        onChange={(e) => setForm({ ...form, user: e.target.value })}
      />

      <input
        placeholder="Rating (1-5)"
        value={form.rating}
        onChange={(e) => setForm({ ...form, rating: e.target.value })}
      />

      <textarea
        placeholder="Comment"
        value={form.comment}
        onChange={(e) => setForm({ ...form, comment: e.target.value })}
      />

      <button className="button" onClick={handleSubmit}>
        Submit Review
      </button>
    </div>
  );
}

export default BusinessPage;