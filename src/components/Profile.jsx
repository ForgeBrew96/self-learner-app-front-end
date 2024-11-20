const Profile = ({user}) => {
  
    return (
      <main className="userProfile">
        <div className="profileHeader">
          <h2>Profile for {user.username}</h2>
          <img className="profilePicture" alt='profilePic'></img>
          <h3>Badges Earned</h3>
          <h3>Communites joined</h3>
        </div>
        <div className="userDetails">
          <p>user bio</p>
          <li>{user.fitnessPoints}</li>
          <li>{user.videoGamesPoints}</li>
          <li>{user.boardGamesPoints}</li>
          <li>{user.musicInsPoints}</li>
        </div>
        <div className="userCarousel">
          <p>assorted links to badges activity communities</p>
        </div>
      </main>
    );
  };
  
  export default Profile;