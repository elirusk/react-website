import React from 'react'
import Logo from '../assets/centaur1.jpg';
//import styles from '../style/banner.module.css';
//import { Menubar } from 'primereact/menubar';
import '../style/Profile.css';

function Profile() {
  return (
      <div >
      <img src={ Logo } className='logo' />
      <h1 className='title'>Eli S. Rusk</h1>
      </div>
      );
};

export default Profile;


