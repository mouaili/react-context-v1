import React from 'react';

const ContentData = props => {
  return (
    <div className="collapse" id="collapseExample">
      <div className="card card-body">
        <ul className="list-group list-group-shuft">
          <div className="list-group-item">
            <strong>Prénom : </strong>
            {props.userData.name}
          </div>
          <div className="list-group-item">
            <strong>Age : </strong>
            {props.userData.age} ans
          </div>
        </ul>
      </div>
    </div>
  );
};

export default ContentData;
