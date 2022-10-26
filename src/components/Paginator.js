import React from 'react';
import { Link } from 'react-router-dom';

const Paginator = ({ amount }) => {
  const newsTemplate = [];

  for (let i = 0; i < amount; i++) {
    newsTemplate[i] = (
      <Link
        key={i + 1}
        to={{ pathname: `/page/${i + 1}` }}
      >
        {i + 1}
      </Link>
    );
  }

  return (
    <div>
      {newsTemplate}
    </div>
  );
};

export default Paginator;
