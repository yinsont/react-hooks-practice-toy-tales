import {React, useState} from "react";

function ToyForm({addToy}) {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  let newToy = {
    name: name,
    image: image,
    likes: 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addToy(newToy)
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({
        name: name,
        image: image,
        likes: 0
      })
    })

  }

  return (
    <div className="container">
      <form onSubmit = {handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value = {name}
          onChange = {(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value = {image}
          onChange = {(e) => setImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
