import React from 'react';
import user1 from '../assets/users/user1.png'
import { MdOutlineHeadsetMic } from 'react-icons/md';

function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-white border-b">
      <h1 className="text-xl font-semibold">Campaign</h1>
      <div className="flex items-center">
        <span className="mr-4"><MdOutlineHeadsetMic /></span>
        <img
          src= {user1}
          alt="User Avatar"
          className="rounded-full w-8 h-8"
        />
      </div>
    </div>
  );
}

export default Header;
