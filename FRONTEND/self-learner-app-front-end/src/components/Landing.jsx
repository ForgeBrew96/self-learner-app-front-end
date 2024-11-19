import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <main class="landing-container">
      <h1 class="landing-title">Self Learner App</h1>
      <ul class="mission-statement">
        <li><em>Analyze</em> your life goals and interests</li>
        <li>Be <em>Gifted</em> New Paths and Ideas</li>
        <li><em>Linked</em> with real people at all depths of the Great Forest</li>
      </ul>
      <nav>
        <ul class="signUp-In">
          <li><Link to="/signin">Sign In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>
    </main>
  );
};

export default Landing;
