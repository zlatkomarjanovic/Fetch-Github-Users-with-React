import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const  Users = ({users, loading}) =>{
  if(loading) {
    return <Spinner />
  } else {
    return(
      <div style={mojstyle}>
      {users.map(user => (
        <UserItem key = {user.id} user = {user}/>
      ))}
      </div>
    );
  }
}

Users. propTypes = {
  users: PropTypes.array.isRequired,
  users: PropTypes.bool.isRequired
}


const mojstyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'

}


export default Users;
