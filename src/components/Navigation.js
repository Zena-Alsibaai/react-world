import React from 'react';
import {NavLink} from 'react-router-dom'; // permettre de naviger entre les pages

const Navigation = () => {
    return (
        <div className="navigation">
            {/* Navlink comme la balise <a></a> */}
            <NavLink exact to ="/"  activeClassName="nav-active"> 
                Accueil
            </NavLink>
            <NavLink exact to ="a-propos" activeClassName="nav-active">
                A propos
            </NavLink>
        </div>
    );
};

export default Navigation;