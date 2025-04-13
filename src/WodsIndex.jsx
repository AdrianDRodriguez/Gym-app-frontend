export function WodsIndex({ wods }) {
  return (
    <div>
    <h1>All WODs</h1>
    {wods ? (
      wods.map((wod) => (
        <div key={wod.id}>
          <p>Exercise Name:{wod.id}</p>
          <p>User:{wod.user_id}</p>
          <p>Reps:{wod.reps}</p>
        </div>
      ))
    ) : (
      <p>Loading WODs...</p>
    )}
  </div>
);
}