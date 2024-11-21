import React, { useState } from 'react';
import { Link } from "react-router-dom"

const NavBar = ({ user, handleSignout }) => {
    const [isOpen, setIsOpen] = useState(false); 
    
    const openNav = () => { 
        setIsOpen(true); 
    }; 
    
    const closeNav = () => { 
        setIsOpen(false);
    };

    return (
        <div>
            {user ? (
                <nav>
                    <div id="mySidebar" className={`sidebar ${isOpen ? 'open' : ''}`}>
                    <button className="closebtn" onClick={closeNav}>X</button>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>
                            <Link to='/profile'>Profile</Link>
                        </li>
                        <li>
                            <Link to='/eventschedule'>Event Schedule</Link>
                        </li>
                        <li>
                            <Link to='/interestcat'>Interest Category</Link>
                        </li>
                        <li>
                            <Link to='/questionnaire'>Questionnaires</Link>
                        </li>
                        {user.mentorStatus && (
                            <li><Link to ='./questionnaire-form'>Questionnaire Form</Link></li>
                        )}
                        <li><Link to="" onClick={handleSignout}>Sign Out</Link></li>
                    </ul>
                    </div>
                    <button className="openbtn" onClick={openNav}>☰</button> 
                </nav>

            ) : (
               <h3>AppLogo/Name</h3>
            )}
        </div>
    )
}

export default NavBar