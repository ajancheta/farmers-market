import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
        div {
          font-family: Arial, Helvetica, sans-serif;
          text-align: center;
          text-transform: uppercase;
        }

        img {
          max-width: 100%;
        }
        `}</style>
      <h1>Tha Dopest Farmer's Market</h1>
      <Link to="/">Home</Link> | <Link to="/schedule">Schedule</Link> | <Link to="/seasonal-produce">Seasonal Produce</Link>
      <img src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt=""/>
    </div>
  );
}

export default Header;