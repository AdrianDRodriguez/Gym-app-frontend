import axios from "axios";
import { useState, useEffect } from "react";
import { ExercisesIndex } from "./ExercisesIndex";
import { Modal } from "./Modal";
import { ExercisesShow } from "./ExercisesShow";
// import { ExercisesNew } from "./ExercisesNew";
// import { Rating } from '@smastrom/react-rating';

export function ExercisesPage() {
  const [exercises, setExercises] = useState([]);
  const [isExercisesShowVisible, setItExercisesShowVisible] = useState(false);
  const [currentExercise, setCurrentExercise] = useState({});
  // const [rating, setRating] = useState(0)

  const handleIndex = () => {
    console.log("handleIndex")
    axios.get("http://localhost:3000/exercises.json").then ((response) => {
      console.log(response.data)
      setExercises(response.data)
    });
  };

  const handleCreate = (params, successCallback) => {
    console.log("handlecreate");
    axios.post("http://localhost:3000/exercises.json", params).then((response) => {
      setExercises([...exercises, response.data]);
      console.log(response.data)
      successCallback();
    });
  };

  const handleShow = (exercise) => {
    console.log("handleShow", exercise);
    setItExercisesShowVisible(true);
    setCurrentExercise(exercise);
  };

  useEffect(handleIndex, []);


  return (
    <main>
      {/* <ExercisesNew onCreate={handleCreate}/> */}
      <ExercisesIndex exercises={exercises} onShow={handleShow}/>
      <Modal show={isExercisesShowVisible} onClose={() => setItExercisesShowVisible(false)}>
        <ExercisesShow exercise={currentExercise}/>
        {/* <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} /> */}
      </Modal>
    </main>
  )
}