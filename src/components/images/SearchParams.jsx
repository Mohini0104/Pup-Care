import { useState } from "react";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  /*
  const locationHook = useState("");
  const location = locationHook[0];
  const setLocation = locationHook[1];
  */
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
          <label htmlFor="animal">
            Animal
            <select
              name="animal"
              id="animal"
              value={animal}
              onChange={(e) => {
                setAnimal(e.target.value);
              }}
            >
              {/* <option /> */}
              {ANIMALS.map((animal) => (
                <option key={animal}>{animal}</option>
              ))}
            </select>
          </label>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};
export default SearchParams;
