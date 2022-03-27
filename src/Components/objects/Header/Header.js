import { useNavigate } from "react-router-dom";

import "./style.css"

function Header(props){
    const{visible} = props;
    const navigate = useNavigate();
    return (
        <header>
            {visible? <ion-icon onClick={()=>{navigate(-1)}} name="chevron-back-circle"></ion-icon>:<></>}
            <h1>CINEFLEX</h1>
        </header>
    );
}
export default Header;
