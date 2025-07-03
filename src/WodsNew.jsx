import axios from "axios";

export function WodsNew({ exercise }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target
    const params = new FormData(form);
    
    axios.post("/wods.json", params).then((response => {
      console.log(response.data);
      window.location.href = "/wods"
    }))
  };
  
  return (
    <div>
      <h1></h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div>
          <input name="exercise_id" type="hidden" className="form-control" value={exercise.id}/>
        </div>
        <div>
          <label for="formGroupExampleInput2" className="form-label">Reps</label>
          <input name="reps" type="text" className="form-control"/>
        </div>
        <button type="submit" className="btn btn-outline-dark">Add exercise</button>
      </form>
    </div>
  );
}