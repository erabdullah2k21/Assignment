import './App.css';
import { AiFillApple } from "react-icons/ai";



function Apple() {
  return (
    <div>
      <button className='apple_btn'><a href="https://google.com" className='apple_link'><AiFillApple/>Sign in with Apple</a></button>
    </div>
  )
}

export default Apple;

