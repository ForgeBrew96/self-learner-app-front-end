import './Profile.css'


const Profile = ({user}) => {

  return (
    <main className="profile-container shared-container">
    
    {/* Profile Header */}
    <div className="profile-header">
      <div className="profile-row">
        <img
          className="profile-picture"
          src="/img/ScratsProfilePic.png"
          alt="User's profile"
        />
        <div className="profile-stats">
          <div className="profile-stat">
            <h2>2</h2>
            <p>badges earned</p>
          </div>
          <div className="profile-stat">
            <h2>3</h2>
            <p>communities</p>
          </div>
        </div>
      </div>
      <h2 className="username">@SCRAT_SABRE</h2>
    </div>

      {/* Bio Section */}
      <section className="bio-section">
        <p className="bio-text">
          I'm Scrat, the world's most dedicated acorn enthusiast. My life's mission? To claim and protect my precious nut at all costs—no avalanche, extinction event, or cosmic disaster can stop me!
        </p>
      </section>

     {/* Progress Section */}
      <section className="progress-section">
        <p className="progress-text">44% of Weekly Goals Completed</p>
        <img 
          src="/img/Progress Bar.png" 
          alt="Progress Bar Placeholder" 
          className="progress-image"
        />
      </section>

      {/* Badges Section */}
      <section className="badges-section">
        <h3>Badges</h3>
        <div className="badges-container">
          <img src="/img/Badge1.png" alt="Badge 1" />
          <img src="/img/Badge2.png" alt="Badge 2" />
        </div>
      </section>

      {/* Activity Section */}
      <section className="activity-section">
        <h3>Activity</h3>
        <div className="activity-carousel">
          <div className="activity-card">
            <img src="/img/ActivityCard1.png" alt="Activity 1" />
          </div>
          <div className="activity-card">
            <img src="/img/ActivityCard2.png" alt="Activity 2" />
          </div>
          <div className="activity-card">
            <img src="/img/ActivityCard3.png" alt="Activity 3" />
          </div>
        </div>
      </section>
    </main>
  )
}

  
  export default Profile;