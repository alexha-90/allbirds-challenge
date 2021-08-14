import React from 'react';
import AllbirdsLogo from "../../assets/allbirds-logo.svg";
import './style.scss';
//====================================================================================================================//

function Header() {
    return (
        <div className="App">
            <img src={AllbirdsLogo} alt="logo" />
        </div>
    );
}

export default Header;
