import { useState, useEffect } from "react";

import Results from "./Results";
import useBreedList from "./useBreedList";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [BREED] = useBreedList(animal);
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
      <div className="col-12 mx-auto  d-md-flex py-3">
        <div className="col-11 col-md-6 mx-auto mx-md-0 ">
          <div className="col-md-8 mx-auto">
            <div className="col-md-12 form-box ">
              <form
                className="form-section  col-12"
                onSubmit={(e) => {
                  e.preventDefault();
                  requestPets();
                }}
              >
                {/*______________LOCATION______________*/}
                <div className="col-md-10 mx-auto my-3">
                  <div className="col-md-12">
                    <label htmlFor="location text-center">Location</label>
                  </div>
                  <div className="col-md-12">
                    <input
                      onChange={(e) => setLocation(e.target.value)}
                      className="location-input"
                      id="location"
                      placeholder="Location"
                      value={location}
                    />
                  </div>
                </div>

                {/*______________LOCATION______________*/}
                {/*______________ANIMAL______________*/}
                <div className="col-md-10 mx-auto my-3">
                  <div className="col-md-12">
                    <label htmlFor="animal">Animal</label>
                  </div>
                  <div className="col-md-12">
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
                        <option key={animal} className="options">
                          {animal}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/*______________ANIMAL______________*/}
                {/*______________BREED______________*/}
                <div className="col-md-10 mx-auto my-3">
                  <div className="col-md-12">
                    <label htmlFor="breed">Breed</label>
                  </div>
                  <div className="col-md-12">
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
                  </div>
                </div>
                {/*______________BREED______________*/}
                {/*______________SUBMIT BUTTON_____________*/}
                <div className="col-12 col-md-10 mx-auto mt-3">
                  <div className="col-7 col-md-5 mx-auto">
                    <button className="submitBtn">Submit</button>
                  </div>
                </div>
                {/*______________SUBMIT BUTTON_____________*/}
              </form>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 my-3 my-md-auto ">
          <Results pets={pets} />
        </div>
      </div>
    </div>
  );
};
export default SearchParams;
