import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onToyDelete}) {
  return (
    <div id="toy-collection">{toys.map((toy) => {
      return <ToyCard toy = {toy} key = {toy.name} onToyDelete = {onToyDelete}/>
    })}</div>
  );
}

export default ToyContainer;
