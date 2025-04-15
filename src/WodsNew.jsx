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
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }} id="dropdown.and.button">
        <div>
          Exercise: <input name="exercise_id" type="text"/>
        </div>
        <div>
          Reps: <input name="reps" type="text" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}