import './Dashboard.css'

const Dashboard = ({ user }) => {
    return (
      <main>
        <h1>Hello, {user.username}!</h1>
        <p>
          This is the dashboard page where you, and only you, can see a dashboard
          of all of your things.
        </p>
        <div className="dashboardInfo">
          <div className="upcomingEvents">
            <h2>Upcoming Events:</h2>
              <li>event 1</li>
              <li>event 2</li>
              <li>event 3</li>
          </div>
          <div className="interestFriends">
            <h2>Friends Online:</h2>
              <li>friend 1</li>
              <li>friend 2</li>
              <li>friend 3</li>
          </div>
          <div className="interestChallenges">
            <h2>Challenges to Complete:</h2>
              <li>challenge 1</li>
              <li>challenge 2</li>
              <li>challenge 3</li>
          </div>
        </div>
      </main>
    );
  };
  
  export default Dashboard;