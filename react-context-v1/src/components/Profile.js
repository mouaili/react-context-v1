import React from 'react';
import ProfileData from './ProfileData';
import lisa from '../images/profile.jpg';

class Profile extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="row">
        <div className="col">
          <h1 className="h2 text-info">{this.props.info.name}</h1>
          <img
            className="img-thumbnail m-3"
            width="150"
            src={lisa}
            alt="lisa"
          />
          <ProfileData data={this.props.info} />
        </div>
      </div>
    );
  }
}

export default Profile;
