import { Link } from "react-router-dom";
import LogoCircle from "./images/LogoCircle.png";
const Header = (props) => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <div className="col-12 fixed-top header-container headerBorderBottom py-2">
        <div className="col-11 col-md-4  mx-auto">
          <div className="col-md-10 mx-auto ">
            <div className="col-12 ">
              <div className="col-5 col-md-5 d-flex justify-content-center mx-auto ">
                <img src={LogoCircle} alt="" className="w-25  my-auto" />
                <div className="col-md-6 header-title text-center ms-2 my-auto">
                  PetCare
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Header;
