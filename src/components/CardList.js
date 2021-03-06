import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  // if (true) throw new Error('Chhotu aya');
  const cardsArray = robots.map((robot, ind) => {
    return <Card key={ind} id={robot.id} name={robot.name} email={robot.email} />;
  });
  return <Fragment>{cardsArray}</Fragment>;
};

export default CardList;
