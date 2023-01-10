import { useState } from "react";
const SearchParams = () => {
  const [location, setLocation] = useState("");
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
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};
export default SearchParams;
