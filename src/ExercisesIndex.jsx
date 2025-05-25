export function ExercisesIndex({ exercises, onShow }) {
  return (
        <div>
          <h1 className="display-1">All Exercises</h1>
         {exercises.map((exercise) => (
          <div key={exercise.id} className="row g-0 bg-body-secondary position-relative">
            <div className="col-md-6 mb-md-0 p-md-4">
              <img src={exercise.image_url} className="w-100" alt="..."/>
            </div>
            <div className="col-md-6 p-4 ps-md-0">
              <h2 className="mt-0">{exercise.name}</h2>
              <p>{exercise.description}</p>
              <button type="button" className="btn btn-outline-secondary" onClick={() => onShow(exercise)}>See Example</button>
            </div>
          </div>
        ))}
        </div>
      );
    }


