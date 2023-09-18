import React, { useEffect, useState } from 'react'
import { IconName } from "react-icons/ai";
import jwtDecode from 'jwt-decode';
import AddUser from './AddUser';

function Dashboard() {
  return (
      <div>
        <div>
            <h3 className='dashboard' style={{fontFamily:'Montserrat',display:'inline'}}>Dashboard</h3>
        </div>

   <div class="search">
      <input type="text" class="searchTerm" placeholder="Search..."/>
      <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
     </button>
   </div>
        <AddUser></AddUser>
    </div>
  )
}

export default Dashboard
