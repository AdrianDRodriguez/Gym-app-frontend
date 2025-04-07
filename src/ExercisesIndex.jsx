export function ExercisesIndex({ exercises }) {
  return (
    <div>
      <h1>All Exercises</h1>
      {exercises.map ((exercise) => (
        <div key={exercise.id}>
          <h1>{exercise.name}</h1>
          <p>{exercise.description}</p>
          <p>{exercise.image_url}</p>
          <p>{exercise.video_url}</p>
        </div>
      ))}
    </div>
  )
}