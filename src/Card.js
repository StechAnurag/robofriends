import React, { Fragment } from 'react';

const Card = ({ id, name, email }) => {
  // const {name, id, email} = props;
  return (
    // Reactt 16.2 introduced <Fragment> instead of single returning <div> we can use it
    <Fragment>
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
