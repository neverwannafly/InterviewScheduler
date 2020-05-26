import React from 'react';

const Header = ({name}) => {
  return (
    <div className="center">
      <div className="wrapper header">
        <h1 className="display-4">
          {name}
        </h1>
      </div>
    </div>
  );
}

export default Header;