export function ExercisesIndex({ exercises, onShow }) {
  return (
    <div>
        <h1 className="display-1">All Exercises</h1>
      <div id="exercises_index">
        {exercises.map((exercise) => (
        <div key={exercise.id} className="row align-items-center">
          <div className="exercise-card">
            <h1>{exercise.name}</h1>
            <p>{exercise.description}</p>
            <button type="button" className="btn btn-outline-secondary" onClick={() => onShow(exercise)}>See Example</button>
          </div>
        </div>
      ))}
      </div>
    </div>
      );
    }
