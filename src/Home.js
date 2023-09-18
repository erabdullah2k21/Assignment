import React, { useEffect, useState } from 'react'
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import LoginBtn from './Login';
import jwtDecode from 'jwt-decode';
import Graph from './Graph'
import Apple from './AppleLogin';


import { useNavigate } from 'react-router-dom';

function Home() {

  const[page,setPage]=useState(true);

  useEffect(()=>{
      function handleCallbackResponse(response){
        console.log(response.credential);
        var UserObject = jwtDecode(response.credential);
          console.log(UserObject);
          setPage(false);
      }
      
      /*global google*/
      google.accounts.id.initialize({
        client_id: "449374283582-ci5189dimmv3jb3mign71cm5rn46qffi.apps.googleusercontent.com",
        callback: handleCallbackResponse
      });
  
      google.accounts.id.renderButton(
        document.getElementById("SignInDiv"),
        {theme:"outline",size:"large"}

      );
    },[])

    const navigator=useNavigate()
    function goToHome(){    
            navigator('/Graph')
    }
  return (
    <div className='App'>
    {page ? (
        <><div className='blue_bg'>
          <p className='LOGO'><b>LOGO</b></p>
          <p className='Board'>Board.</p>
          <div className='flex-container'>
            <i><AiFillGithub /></i>
            <i><AiOutlineTwitter /></i>
            <i><AiFillLinkedin /></i>
            <i><BsDiscord /></i>
          </div>
        </div><div className='sign_in_outline'>
            <p className='sign_in'>Sign In</p>
            <p style={{ marginTop: 60, position: 'fixed' }}>Sign in to your account</p>

            <div className='flexbox'>
              <div style={{ marginTop: 120 }} id='SignInDiv'></div>
              <Apple></Apple>
            </div>

            <div>
              <form className='form_design'>
                <label className='text_align'>Email Address</label>
                <input type={"email"} placeholder="Enter your Email..."></input>
                <label className='pass_align'>Password</label>
                <input type={"password"} placeholder="Enter your Password..."></input>
                <button onClick={goToHome}>LogIn</button>
              </form>

              <p>Don't have account?<a style={{ color: 'blue' }} href={'https://mail.google.com/'}>Register here</a></p>
            </div>

          </div></>
    ):(
        <Graph></Graph>
    )
    }
    </div>
  )
}

export default Home;
