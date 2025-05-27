import axios from 'axios'
import { useState, useEffect } from 'react'
 
 
 export function WodsIndex({ exercise }) {
   const [wods, setWods] = useState([])
   const getWods  = () => {
     axios.get("http://localhost:3000/wods.json").then(response => {
       console.log(response.data)
       setWods(response.data)
     })
     console.log('getting wods')
   }
 
   useEffect(getWods, [])
  
  return (
    <div className="wods-page">
      <h1 className="page-title">YOUR WOD</h1>

      {!localStorage.jwt && (
        <div className="alert alert-info">
          <p>🚀 Hey there! You need to <strong>create an account</strong> or <strong>log in</strong> to view and create your own WODs!</p>
          <div className="auth-buttons">
            <a href="/login" className="btn btn-primary ">Log In</a>
            <a href="/signup" className="btn btn-secondary ">Sign Up</a>
          </div>
        </div>
      )}

      {wods ? (
        wods.map((wod) => (
          <div key={wod.id} className="wod-card">
            <div className="wod-header">
              <h3>Exercise: {wod.exercise.name}</h3>
              <p>Reps: {wod.reps}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Loading WODs...</p>
      )}
    </div>
  );
}

