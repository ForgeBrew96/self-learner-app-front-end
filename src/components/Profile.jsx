import './Profile.css'


const Profile = ({user}) => {
  
    return (
      <main className="userProfile">
        <div className="profileOwner">
          <h2>Profile for {user.username}</h2>
        </div>
        <div className="profileHeader">
          <img className="profilePicture" alt='profilePic'></img>
          <h3>Badges Earned:</h3>
          <h3>Communites joined:</h3>
        </div>
        <div className="userDetails">
          <p>User Bio</p>
          <li>Fitness Points:{user.fitnessPoints}</li>
          <li>Video Game Points:{user.videoGamesPoints}</li>
          <li>Board Game Points:{user.boardGamesPoints}</li>
          <li>Music Points:{user.musicInsPoints}</li>
        </div>
        <div className="userCarousel">
          <p>assorted links to badges activity communities</p>
        </div>
      </main>
    );
  };
  
  export default Profile;