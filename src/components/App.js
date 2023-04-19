import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {

  const [toys, setToys] = useState([])
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(res => res.json())
    .then(data => setToys(data))
  },[])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  function addToy (newToy) {
    setToys([...toys, newToy])
    console.log(toys)
  }
  
  
  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy = {addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys = {toys}/>
    </>
  );
}

export default App;
