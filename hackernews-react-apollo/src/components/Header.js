import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AUTH_TOKEN } from '../constants';

const Header = () => {
  const history = useHistory();
  const authToken = localStorage.getItem(AUTH_TOKEN);
  return (
    <div className="flex justify-between pa1 nowrap orange">
      <div className="flex flex-fixed black">
        <div className="fw7 mr1">Hacker News</div>
        <Link to="/" className="no-underline ml1 black">
          new
        </Link>
        <div className="ml1">|</div>
        <Link to="/top" className="no-underline ml1 black">
          top
        </Link>
        <div className="ml1">|</div>
        <Link
          to="/search"
          className="no-underline ml1 black"
        >
          search
        </Link>
        {authToken && (
          <div className="flex">
            <div className="ml1">|</div>
            <Link
              to="/create"
              className="no-underline ml1 black"
            >
              submit
            </Link>
          </div>
        )}
      </div>
      <div className="flex flex-fixed">
        {authToken ? (
          <div
            className="ml1 pointer black"
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN);
              history.push(`/`);
            }}
          >
            logout
          </div>
        ) : (
          <Link
            to="/login"
            className="no-underline ml1 black"
          >
            login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
