import axios from "axios";

export function ExercisesNew() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target
    const params = new FormData(form);
    
    axios.post("http://localhost:3000/exercises.json", params).then((response => {
      console.log(response.data);
      window.location.href = '/exercises'
    }))
  };
  
  return (
    <div>
      <h1>New Exercise</h1>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Name:</label>
          <input name="name" type="text" className="form-control" id="inputEmail4"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Description:</label>
          <textarea name="description" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className="col-12">
          <label className="form-label">Image:</label>
          <input name="image_url"  type="text" className="form-control" id="inputAddress" placeholder="Image Url Here"/>
        </div>
        <div className="col-12">
          <label className="form-label">Video Example:</label>
          <input name="video_url"  type="text" className="form-control" id="inputAddress2" placeholder="Video Url Here"/>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Add Exercise</button>
        </div>
      </form>
    </div>
  );
}