import { GiMechanicalArm } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { BsBag } from "react-icons/bs";

import "./styles.css";

function Header() {
 return (
    <>
      <div className="container">
        <div className="content">
          <div className="label">
            <GiMechanicalArm className="icon" size={30} color="White" />
            <h6>LabTech</h6>
          </div>
          <ul className="links">
            <li className="link">Início</li>
            <li className="link">Loja Virtual</li>
            <li className="link">Próteses</li>
            <li className="link">Contato</li>
          </ul>
          <div>
            <BsSearch className="rightIcons" size={15} color="white" />
            <BsBag className="rightIcons" size={15} color="white" />
          </div>
        </div>   
      </div>
    </>
 )
}

export  default Header;
