import React from 'react';
import AllbirdsLogo from "../../assets/allbirds-logo.svg";
import './style.scss';
//====================================================================================================================//

function Header() {
    return (
        <div className="header">
            <div className="left-content">
                <button>
                    <span>MEN</span>
                </button>
                <button>
                    <span>WOMEN</span>
                </button>
                <button>
                    <span>NEW ARRIVALS</span>
                </button>
            </div>
            <div className="middle-content">
                <img src={AllbirdsLogo} alt="logo" />
            </div>
            <div className="right-content">
                <button>
                    <span>SUSTAINABILITY</span>
                </button>
                <button>
                    <span>STORES</span>
                </button>
            </div>
        </div>
    );
}

export default Header;
