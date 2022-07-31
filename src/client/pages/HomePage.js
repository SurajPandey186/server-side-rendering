import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

  const clickHandler = () => {
    console.log('button is being clicked');
  };

  return (
    <div>
      <div>
        Mediatations brings Peace in Human Beings
      </div>
      <Link to='/hi'>Hi..Click Me</Link>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/tooMuch'>Too much</Link>
    </div>
  );
};

export default {
  component: Home
}
