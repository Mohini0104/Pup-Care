const Pet = (props) => {
  return (
    <div>
      <div className="pets-container">
        <h3>{props.name}</h3>
        <h4>{props.animal}</h4>
        <h5>{props.breed}</h5>
      </div>
    </div>
  );
};
export default Pet;
