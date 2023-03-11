import React from 'react';
import ContentData from './ContentData';

const ProfileData = props => {
  return (
    <div>
      <p>
        <a
          className="btn btn-primary"
          data-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Informations sur : {props.data.name} ?
        </a>
      </p>

      <ContentData userData={props.data} />
    </div>
  );
};

export default ProfileData;
