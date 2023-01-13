import { useState, useEffect } from "react";
import Pet from "../Pet";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const BREED = [];
const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  /*
  const locationHook = useState("");
  const location = locationHook[0];
  const setLocation = locationHook[1];
  */
  useEffect(() => {
    requestPets();
  }, []);
  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }
  return (
    <div>
      <div className="col-8 mx-auto">
        <form>
          <label htmlFor="location">Location</label>
          <input
            onChange={(e) => setLocation(e.target.value)}
            className="location-input"
            id="location"
            placeholder="Location"
            value={location}
          />
          <br />
          <label htmlFor="animal">
            Animal
            <select
              name="animal"
              id="animal"
              value={animal}
              onChange={(e) => {
                setAnimal(e.target.value);
                setBreed("");
              }}
            >
              <option />
              {ANIMALS.map((animal) => (
                <option key={animal}>{animal}</option>
              ))}
            </select>
          </label>
          <br />
          <label htmlFor="breed">
            Breed
            <select
              name="breed"
              disabled={breed.length === 0}
              id="breed"
              value={breed}
              onChange={(e) => {
                setBreed(e.target.value);
              }}
            >
              <option />
              {BREED.map((breed) => (
                <option key={breed}>{breed}</option>
              ))}
            </select>
          </label>
          <br />
          <button>Submit</button>
        </form>
        {pets.map((pet) => (
          <Pet
            className="pets-element"
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
          />
        ))}
      </div>
    </div>
  );
};
export default SearchParams;
