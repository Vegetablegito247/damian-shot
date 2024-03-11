import React from 'react';
import './galleryDash.css';
import DashHead from '../../../components/dashHead/DashHead';
import { Outlet } from 'react-router-dom';

function AddImg({ handleSideMenu }) {
  return (
    <div className='add_img'>
      <DashHead headTitle={"Gallery"} onClick={handleSideMenu} />
      <Outlet />
    </div>
  )
}

export default AddImg