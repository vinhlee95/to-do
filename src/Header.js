import React from 'react';

const Header = props => {
  let date = new Date();
  let year = date.getFullYear();
  let day = date.getDate();
  let month = date.getMonth()+1;
  return(
    <div>
      <h1>My To-do app</h1>
      <p>{day}/{month}/{year}</p>
    </div>
  );
}

export default Header;
