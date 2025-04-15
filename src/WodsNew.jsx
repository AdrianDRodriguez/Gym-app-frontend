import axios from "axios";

export function WodsNew({ exercise }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target
    const params = new FormData(form);
    
    axios.post("http://localhost:3000/wods.json", params).then((response => {
      console.log(response.data);
      window.location.href = "/wods"
    }))
  };
  
  return (
    <div>
      <h1></h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div>
          <label for="formGroupExampleInput" class="form-label">Exercise</label>
          <input name="exercise_id" type="text" class="form-control"/>
        </div>
        <div>
          <label for="formGroupExampleInput2" class="form-label">Reps</label>
          <input name="reps" type="text" class="form-control"/>
        </div>
        <button type="submit" class="btn btn-outline-dark">Add exercise</button>
      </form>
    </div>
  );
}