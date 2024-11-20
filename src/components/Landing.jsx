import { Link } from "react-router-dom"
import './Landing.css'

const Landing = () => {
  return (
    <main className="landing-container">
      <img className="logo" src="public/img/Sprout (1).png" alt="App Logo" />
      <h1 className="landing-title">Sprout</h1>
      {/* <ul className="mission-statement">
        <li><em>Analyze</em> your life goals and interests</li>
        <li>Be <em>Gifted</em> New Paths and Ideas</li>
        <li><em>Linked</em> with real people at all depths of the Great Forest</li>
      </ul> */}
      <p>Discover your passions. Set meaningful goals. Join a community built for growth and self discovery.</p>
      <nav>
        <ul className="signUp-In">
          <li><Link to="/signin">Sign In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>
    </main>
  );
};

export default Landing;
