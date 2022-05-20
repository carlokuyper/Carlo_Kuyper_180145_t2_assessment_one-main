import axios from 'axios';
import React from 'react'
import { useState } from 'react';


function App() {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));

    // console.log(inputs);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);

    axios.post('http://localhost:80/api/addPet', inputs)
    .then(function(response){
        console.log(response);
    });

  }

  return (
    <div className="App">
        <div className="formCon">
          <h1>Expawts: Pet Relocation</h1>
          <p>Sign up below and we will send you a quote!</p>
          <form>
            <input name="petname" type="text" placeholder="Name of Pet" onChange={handleChange} />
            <select>
              <option selected disabled hidden>Species of Pet</option>
              <option type='select'>Canine</option>
              <option type='select'>Feline</option>
              <option type='select'>Equine</option>
              <option type='select'>Rodent</option>
              <option>Avian</option>
              <option>Reptile</option>
            </select>
            <select>
              <option selected disabled hidden>Gender/Sex of Pet</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <input name="age" type="number"  placeholder="Age of Pet (years) " onChange={handleChange} />
            <input name="petid" type="number"  placeholder="Pet MicroChip Id" onChange={handleChange} />
            <input name="ownername" type="text"  placeholder="Pet Owner Name" onChange={handleChange} />
            <input name="ownerid" type="number"  placeholder="Pet Owner ID Number" onChange={handleChange} />
            <input name="origin" type="text"  placeholder="Export Origin" onChange={handleChange} />
            <input name="destination" type="text"  placeholder="Export Destination" onChange={handleChange} />

            <button type='submit' onClick={handleSubmit}>Lets Export That Pet!</button>

            

          </form>

        </div>
    </div>
  );
}

export default App;
