import axios from 'axios'
import { useState, useEffect } from 'react'
 
 
 export function WodsIndex() {
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
    <div>
      <h1>All WODs</h1>
          {wods ? (
            wods.map((wod) => (
            <div class="card text-center mb-3" style={{width: "18rem"}} key={wod.id}>
              <div class="card-body">
                <h5 class="card-title">Exercise: {wod.exercise.name}</h5>
                <p class="card-text">Reps: {wod.reps}</p>
              </div>
            </div>
            ))
          ) : (
            <p>Loading WODs...</p>
          )}
  </div>
  );
}