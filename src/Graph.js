import React, { useState } from 'react'
import { AiOutlinePieChart,AiOutlineTags,AiOutlineSetting } from "react-icons/ai";
import { LuCalendarClock } from "react-icons/lu";
import { BiUserCircle } from "react-icons/bi";
import BarChart from './BarChart';
import { UserData } from './Data';
import { green, lightGreen } from '@mui/material/colors';
import PieChart from './PieChart';
import Dashboard from './Dashboard';

function Graph() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: "rgba(152, 216, 158, 1)"

      },{
        label: "Users Lost",
        data: UserData.map((data)=> data.userLost ),
        backgroundColor: "rgba(238, 132, 132, 1)",
      }
    ],
  })

  const [userData2, setUserData2] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],


      }]
    });

  let currentDate = new Date().toJSON().slice(0, 10);

  return (
    <div>
      <Dashboard></Dashboard>
        <div>
          
        <ul className='navbar_hori' style={{listStyleType:'none'}}>
          <h1>Board.</h1>
          <li><a class="active" href="#home"><AiOutlinePieChart/> Dashboard</a></li>
          <li><a><AiOutlineTags/> Transaction</a></li>
          <li><a><LuCalendarClock/> Schedules</a></li>
          <li><a><BiUserCircle/> Users</a></li>
          <li><a><AiOutlineSetting/> Settings</a></li>
        </ul>
        </div>
        
        <div className='bar_graph'>
          <label style={{fontFamily:"Montserrat",position:'relative',top:20}}>Activities</label><br/>
          <div style={{fontFamily:'monospace',color:'rgba(236, 236, 236, 1)',position:'relative',top:20}}>
          {
            currentDate
          }
          </div>
        <BarChart chartData={userData} />
        
        </div>
        <div className='pie_chart'>
        <PieChart chartData={userData2} />
        </div>
    </div>
  )
}

export default Graph
