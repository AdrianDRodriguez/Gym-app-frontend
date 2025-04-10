import axios from "axios";

export function WodNew({ onCreate }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target
    const params = new FormData(form);
    
    axios.post("http://localhost:3000/wods.json", params).then((response => {
      console.log(response.data);
    }))
  };
  
  return (
    <div>
      <h1></h1>
      <form onSubmit={handleSubmit}>
        <div>
          : <input name="name" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Image: <input name="image_url" type="text" />
        </div>
        <div>
          Video: <input name="video_url" type="text" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}