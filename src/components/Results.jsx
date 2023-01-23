import Pet from "./Pet";
const Results = ({ pets }) => {
  return (
    <div className="search">
      <div className="col-12">
        {!pets.length ? (
          <h1>No Pets Found</h1>
        ) : (
          pets.map((pet) => (
            <Pet
              animal={pet.animal}
              id={pet.id}
              key={pet.id}
              name={pet.name}
              breed={pet.breed}
              images={pet.images}
              location={`${pet.city},${pet.state}`}
            />
          ))
        )}
      </div>
    </div>
  );
};
export default Results;
