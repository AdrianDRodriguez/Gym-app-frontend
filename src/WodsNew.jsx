import axios from "axios";

export function WodsNew({ onCreate }) {

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
      <form onSubmit={handleSubmit}>
        <div>
          Exercise: <input name="name" type="text" />
        </div>
        <div>
          Reps: <input name="description" type="text" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}