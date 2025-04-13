export function WodsIndex({ wods }) {
  return (
    <div>
      <h1>All WODs</h1>
      {wods.map(wods => (
        <div key={wods.id}>
          <p>{wods.id}</p>
          <p>{wods.user_id}</p>
          <p>{wods.reps}</p>
        </div>
      ))}
    </div>
  )}