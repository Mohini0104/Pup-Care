import Pet from "./Pet";
const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            name={pet.name}
            key={pet.id}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city},${pet.state}`}
          />
        ))
      )}
    </div>
  );
};
export default Results;
