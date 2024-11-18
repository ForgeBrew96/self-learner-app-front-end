import { Link } from "react-router-dom"

const NavBar = ({ user, handleSignout }) => {

    return (
        <div>
            <li>
                <Link to='/'>Base Page</Link>
            </li>
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
                            <Link to='/badges'>Badges</Link>
                        </li>
                        <li>
                            <Link to='/questionare'>Questionares</Link>
                        </li>
                        <li><Link to="" onClick={handleSignout}>Sign Out</Link></li>
                    </ul>
                </nav>
            ) : (
                <nav>
                    <ul>
                        <li><Link to="/signin">Sign In</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                    </ul>
                </nav>
            )}
        </div>
    )
}

export default NavBar