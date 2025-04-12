export function ExercisesIndex({ exercises, onShow }) {
  return (
        <div>
          <h1 className="display-1">All Exercises</h1>
         {exercises.map((exercise) => (
           <div key={exercise.id} className="card mb-3">
           <div className="row g-0">
             <div className="col-md-4">
               <img src={exercise.image_url} className="img-fluid rounded-start" alt="..."/>
             </div>
             <div className="col-md-8">
               <div className="card-body">
                 <h5 className="card-title">{exercise.name}</h5>
                 <p className="card-text">{exercise.description}</p>
                 <button type="button" className="btn btn-outline-secondary" onClick={() => onShow(exercise)}>See Example</button>
               </div>
             </div>
           </div>
         </div>
        ))}
        </div>
      );
    }