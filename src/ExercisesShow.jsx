export function ExercisesShow({ exercise }) {

  return (
    <div>
      <h1>Photo information</h1>
      <h1>{exercise.name}</h1>
      <p>{exercise.description}</p>
      <p>{exercise.image_url}</p>
      <p>{exercise.video_url}</p>
    </div>
  );
}