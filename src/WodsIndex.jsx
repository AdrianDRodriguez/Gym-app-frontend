import axios from 'axios'
import { useState, useEffect } from 'react'
 
 
 export function WodsIndex({ exercise }) {
   const [wods, setWods] = useState([])
   const [editingWodId, setEditingWodId] = useState(null);
   const [editReps, setEditReps] = useState("")


   const getWods  = () => {
     axios.get("/wods.json").then(response => {
       console.log(response.data)
       setWods(response.data)
     })
   }

   const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this WOD?")) {
      try {
        await axios.delete(`/wods/${id}.json`);
        // Refresh the list by removing the deleted one
        setWods((prev) => prev.filter((wod) => wod.id !== id));
        } catch (err) {
        console.error("Error deleting WOD:", err);
        }
      }
    };
 
    const handleUpdate = async (id) => {
      try{
        const response = await axios.patch(`/wods/${id}.json`, {reps: editReps});
        setWods((prev) => 
          prev.map((wod) => (wod.id === id ? response.data : wod))
        );
        setEditingWodId(null);
      } catch (err) {
        console.log("Error updating reps:", err);
      }
    };

 
   useEffect(getWods, [])
  
  return (
    <div className="wods-page">
      <h1 className="page-title">YOUR WOD</h1>

      {!localStorage.jwt && (
        <div className="alert alert-info">
          <p>🚀 Hey there! You need to <strong>create an account</strong> or <strong>log in</strong> to view and create your own WOD!</p>
          <div className="auth-buttons">
            <a href="/login" className="btn btn-primary ">Log In</a>
            <a href="/signup" className="btn btn-secondary ">Sign Up</a>
          </div>
        </div>
      )}

      {wods ? (
          wods.map((wod) => (
            <div key={wod.id} className="wod-card mb-4 p-3 rounded shadow bg-white">

              <div className="d-flex justify-content-between align-items-center">
                <h3 className="m-0">Exercise: {wod.exercise.name}</h3>
                <p className="fw-bold m-0">Reps: {wod.reps}</p>
              </div>

              {editingWodId === wod.id ? (
                <div className="mt-2 d-flex gap-2 align-items-center">
                  <input
                    type="number"
                    value={editReps}
                    onChange={(e) => setEditReps(e.target.value)}
                    className="form-control w-auto"
                  />
                  <button className="btn btn-success" onClick={() => handleUpdate(wod.id)}>Save</button>
                  <button className="btn btn-secondary" onClick={() => setEditingWodId(null)}>Cancel</button>
                </div>
              ) : (
                <div className="mt-2 d-flex gap-2">
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      setEditingWodId(wod.id);
                      setEditReps(wod.reps);
                    }}
                  >
                    Edit
                  </button>
                  <button className="btn btn-danger" onClick={() => handleDelete(wod.id)}>
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
        <p>Loading WODs...</p>
      )}
    </div>
  );
}

