import { Link } from "react-router-dom";
import "./Header.css"
const Header = () => {

    return (
        <>
         
              <div className="Head" >    
                    <img src="insta.jpeg" alt="insta" className="first"/>
                  <Link to="/form">
                    <img src="camera.jpeg"  alt="cam" className="second" style={{height:"40px", width:"40px"}}/>
                  </Link>
                </div>
              
        </>
      );
    };
    
    export default Header;