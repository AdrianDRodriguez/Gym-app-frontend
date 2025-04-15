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
              <div key={wod.id}>
                <p>User: {wod.user_id}</p>
                <p>Exercise: {wod.exercise.name}</p>
                <p>Reps: {wod.reps}</p>
              </div>
            ))
          ) : (
            <p>Loading WODs...</p>
          )}
  </div>
  );
}