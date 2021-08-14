import React from 'react';
import './style.scss';
//====================================================================================================================//

function Footer() {
    return (
        <div className="footer">
            © 2021 Allbirds, Inc. All Rights Reserved.&nbsp;
            <a href="https://www.allbirds.com/pages/allbirds-terms-of-use" target="_blank" rel="noreferrer">
                Terms
            </a>,&nbsp;
            <a href="https://www.allbirds.com/pages/privacy-policy" target="_blank" rel="noreferrer">Privacy</a> &&nbsp;
            <a href="https://www.allbirds.com/pages/accessibility" target="_blank" rel="noreferrer">Accessibility</a>
        </div>
    );
}

export default Footer;
