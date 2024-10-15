import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                <p>&copy; {new Date().getFullYear()} Public Assemblage Group. All rights reserved.</p>
            </div>
            <div className="footer-right">
                <p>Are you in compliance?</p>
            </div>
        </div>
    );
};

export default Footer;
