import axios from "axios";
import { useState } from "react";

export function ExerciseRating() {

  const [userRating, setUserRating] = useState(0);
  const [avgRating, setAvgRating] = useState(null);

  const submitRating = async (exerciseId, value) => {
    try {
      await axios.post("/ratings", { exercise_id: exerciseId, value }); // or PATCH if updating
      setUserRating(value);
      fetchAverageRating(exerciseId);
    } catch (error) {
      console.error("Rating failed", error);
    }
  };

  const fetchAverageRating = async (exerciseId) => {
    const response = await axios.get(`/ratings?exercise_id=${exerciseId}`);
    const ratings = response.data;
    if (ratings.length > 0) {
      const avg = ratings.reduce((sum, r) => sum + r.value, 0) / ratings.length;
      setAvgRating(avg.toFixed(1));
    }
  };

  return (
    <div>
        <p>Average Rating: {avgRating ?? "N/A"}</p>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{ cursor: "pointer", color: userRating >= star ? "gold" : "gray", fontSize: "24px" }}
            onClick={() => submitRating(wod.exercise.id, star)}
          >
            ★
          </span>
        ))}
    </div>
  )
}