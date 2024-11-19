import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <main className="landing-container">
      <h1 className="landing-title">Self Learner App</h1>
      <ul className="mission-statement">
        <li><em>Analyze</em> your life goals and interests</li>
        <li>Be <em>Gifted</em> New Paths and Ideas</li>
        <li><em>Linked</em> with real people at all depths of the Great Forest</li>
      </ul>
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
