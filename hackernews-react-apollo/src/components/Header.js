import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex justify-between pa1 nowrap orange">
      <div className="flex flex-fixed black">
        <div className="fw7 mr1">Hacker News</div>
        <Link to="/" className="no-underline ml1 black">
          new
        </Link>
        <div className="ml1">|</div>
        <Link
          to="/create"
          className="no-underline ml1 black"
        >
          submit
        </Link>
      </div>
    </div>
  );
};

export default Header;
