import axios from "axios";
import { useEffect, useState } from "react";
import "./ExercisesRating.css";

export function ExercisesRating({ exerciseId }) {
  const [userRating, setUserRating] = useState(0);
  const [avgRating, setAvgRating] = useState(null);

  useEffect(() => {
    fetchRatings();
  }, []);

  const fetchRatings = async () => {
    try {
      const response = await axios.get(`/ratings?exercise_id=${exerciseId}`);
      const ratings = response.data;
      if (ratings.length > 0) {
        const total = ratings.reduce((sum, r) => sum + r.value, 0);
        const avg = total / ratings.length;
        setAvgRating(avg.toFixed(1));
      }
    } catch (err) {
      console.error("Error fetching ratings", err);
    }
  };

  const submitRating = async (value) => {
    console.log("exerciseId:", exerciseId, "value:", value);
    try {
      await axios.post("http://localhost:3000/ratings.json", {
        rating: {
          exercise_id: exerciseId,
          value: value,
        }
      });
      setUserRating(value);
      fetchRatings();
    } catch (err) {
      console.error("Error submitting rating", err);
    }
  };

  return (
    <div className="rating-container">
      <p className="avg-text">Avg Rating: {avgRating ?? "N/A"}</p>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${userRating >= star ? "active" : ""}`}
            onClick={() => submitRating(star)}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
}
