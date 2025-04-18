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
    <div>
      <h1>All WODs</h1>
          {wods ? (
            wods.map((wod) => (
              <div className="row row-cols-1 row-cols-md-3 g-4" key={wod.id}>
              <div className="col">
                <div className="card h-100">
                  <img src={exercise} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Exercise: {wod.exercise.name}</h5>
                    <p className="card-text">Reps: {wod.reps}</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                  </div>
                </div>
              </div>
            </div>
            ))
          ) : (
            <p>Loading WODs...</p>
          )}
  </div>
  );
}

