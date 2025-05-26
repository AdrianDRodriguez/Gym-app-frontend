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
    <div className="container">
      <form className="form-group text-white bg p-5 rounded" onSubmit={handleSubmit}>
        <h1 className="text-center">New Exercise</h1>
        <div className="mt-5">
          <label className="form-label">Name</label>
          <input name="name" type="text" className="form-control" id="inputEmail4"/>
        </div>
        <div className="mt-3">
          <label className="form-label">Description</label>
          <textarea name="description" className="form-control" rows="3"></textarea>
        </div>
        <div className="mt-3">
          <label className="form-label">Image</label>
          <input name="image_url"  type="text" className="form-control" placeholder="Image Url Here"/>
        </div>
        <div className="mt-3">
          <label className="form-label">Video Example</label>
          <input name="video_url"  type="text" className="form-control" placeholder="Video Url Here"/>
        </div>
        <div className="mt-3">
          <button type="submit" className="btn btn-warning col-md-12">Add Exercise</button>
        </div>
      </form>
    </div>
  );
}