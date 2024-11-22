import './Dashboard.css'

const Dashboard = ({ user }) => {
    return (
      <div className="dashboard-container shared-container">
        {/* Greeting Section */}
          <header className="dashboard-header">
              <h1>Hello, {user.username}!</h1>
              <p className="dashboard-description">
                  Welcome to your dashboard. Here you'll find a clear view of your progress, goals, and activities. Keep growing and thriving—your forest of achievements awaits!
              </p>
          </header>

          {/* Stats Section */}
          <section className="stats-section">
              <h3>Stats</h3>
              <img src="/img/Stats.png" alt="Stats Graph" className="stats-graph" />
          </section>

          {/* Challenges Section */}
          <section className="challenges-section">
              <h3>Challenges to Complete</h3>
              <div className="challenges-grid">
                  <img src="/img/Challenge Cards.png" alt="Challenge Cards" />
              </div>
          </section>

          {/* Upcoming Events Section */}
          <section className="events-section">
              <h3>Upcoming Events</h3>
              <img src="/img/EventCard.png" alt="Upcoming Event" className="event-image" />
          </section>

          {/* Featured Mentors Section */}
          <section className="mentors-section">
              <h3>Featured Mentors</h3>
              <div className="mentors-grid">
                  <img src="/img/Mentors.png" alt="Mentors" />
              </div>
          </section>

          {/* Community Activity Section */}
          <section className="community-section">
              <h3>Community Activity</h3>
              <div className="community-activity">
                  <div className="activity-item">
                      <img src="public/img/CommunityActivity.png" alt="Community Activity" />
                  </div>
              </div>
          </section>
      </div>
    );
  };
  
  export default Dashboard;