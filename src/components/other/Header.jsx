import React from 'react';
import { setLocalStorage } from '../../utils/localstorage';

const Header = ({ changeUser, data }) => {
  
  let firstName = 'User'; // Default fallback
  if (data) {
    if (data.firstName) {
      
      firstName = data.firstName;
    } else if (Array.isArray(data) && data.length > 0 && data[0].firstName) {
     
      firstName = data[0].firstName;
    }
  }
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    changeUser('');
    // window.location.reload();
  };

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>
          
          {firstName} 👋
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;