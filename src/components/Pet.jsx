import { Link } from "react-router-dom";
const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <div className="col-12">
      <div className="col-11 col-md-9 mx-auto mb-3 animalInfoCard">
        <Link
          to={`/details/${id}`}
          className="pet"
          style={{ textDecoration: "none" }}
        >
          <div className="image-container d-flex">
            <img src={hero} alt={name} className="petImage" />
            <p className="animalName my-auto ms-3">{name}</p>
          </div>
          <div className="info my-3">
            <p className="animalInfo">
              Animal: {`${animal} | Breed: ${breed} | Location: ${location}`}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Pet;
