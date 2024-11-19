import { Link } from "react-router-dom"

const NavBar = ({ user, handleSignout }) => {

    return (
        <div>
            {user ? (
                <nav>
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
                            <Link to='/questionnaire'>Questionares</Link>
                        </li>
                        <li><Link to="" onClick={handleSignout}>Sign Out</Link></li>
                    </ul>
                </nav>
            ) : (
               <h3>AppLogo/Name</h3>
            )}
        </div>
    )
}

export default NavBar