import React from 'react';
import Useritem from './Useritem';
import Spinner from '../Spinner';

const User = ({ users, loading }) => {
  if (loading) {
    return <spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <Useritem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default User;
