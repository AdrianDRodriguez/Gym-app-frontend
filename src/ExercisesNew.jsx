import axios from "axios";

export function ExercisesNew() {
  const isLoggedIn = !!localStorage.getItem("jwt");


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
    <>
      {isLoggedIn ? (
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
              <label className="form-label">Video Example</label>
              <input name="video_url" type="text" className="form-control" placeholder="Video Url Here"/>
            </div>
            <div className="mt-3">
              <button type="submit" className="btn btn-warning col-md-12">Add Exercise</button>
            </div>
          </form>
        </div>
      ) : (
        <div className="container text-center mt-5 bg-warning p-4 rounded">
          <h2 className="text-dark">🚫 Hold up!</h2>
          <p className="text-dark">You need an account to add a new exercise.</p>
          <p>
            <a href="/login" className="btn btn-outline-dark me-2">Log in</a>
            <a href="/signup" className="btn btn-dark">Sign up</a>
          </p>
        </div>
      )}
    </>
  );
}