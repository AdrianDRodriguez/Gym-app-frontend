import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { WodsIndex } from "./WodsIndex";

export function WodsPage() {
  const wodds = useLoaderData
  const [wods, setWods] = useState([]);

  const handleIndex = () => {
    axios.get("http://localhost:3000/wods.json").then((response) => {setWods(response.data)});
  };

  useEffect(handleIndex, []);
  


  return (
    <main>
      <WodsIndex wods={wods}/>
    </main>
  )
}