import LogoPink from "./images/LogoPink.png";
const Header = (props) => {
  return (
    <div className="col-12">
      <div className="col-11 col-md-5 mx-auto">
        <div className="col-md-10 mx-auto">
          <div className="col-12 d-flex justify-content-center">
            <div className="col-md-3 ">
              <div className="col-md-12">
                <img src={LogoPink} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="col-md-12">Pup-Care</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
