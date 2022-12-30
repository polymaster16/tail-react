import { useState } from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import { FaHome, FaUserFriends, FaUserCircle } from "react-icons/fa";
import { BsFillCalendarEventFill, BsFillSuitClubFill } from "react-icons/bs";
import { GiThreeFriends} from "react-icons/gi";
import { Link } from "react-router-dom";



function TopBar() {
const [collapse, setCollapse]=useState("hidden w-full");
const [clicked, setClicked]=useState(false);
    return ( 
<nav class="px-3 py-7 border-gray-200 rounded
 bg-gray-200 dark:bg-gray-800
  dark:border-gray-700">
 
  <div class="container
   flex flex-wrap items-center
    justify-between mx-auto">

    <a href="#" class="flex items-center">
        <img src="https://ictuniversity.org/wp-content/uploads/2021/03/ICTULogoNew.png"
         className="h-8 mr-3 ml-5 sm:h-10" alt=" Logo" />
        <span className="self-center
        text-gray-900
         text-2xl
        font-semibold 
        whitespace-nowrap
         dark:text-white">The Student Union</span>
    </a>

    <button 
    onClick={() => setClicked(!clicked)}
     type="button" 
     className="inline-flex 
     items-center 
     p-2 ml-3 text-lg
      text-gray-900 rounded-lg
       hover:bg-emerald-50 
       focus:outline-none 
       focus:ring-2
        focus:ring-gray-200
         dark:text-gray-400
          dark:hover:bg-gray-700
           dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger" 
            aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    
    </button>

{ clicked &&
    <div className="w-full"
        >
      <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <FadeIn
      delay={100}>
        <li>
         <Link to={'/' }className="listItem"> 
          <FaHome className="text-2xl "/>Home</Link>
        </li>
        <li>
          <Link to='/Events' className="listItem">
            <BsFillCalendarEventFill className="text-2sm"/>Events</Link>
        </li>
        <li>
          <Link to="/Clubs" className="listItem">
            <BsFillSuitClubFill className="text-xl"/>Clubs</Link>
        </li>
        <li>
          <Link to="#" className="listItem">
            <FaUserFriends className="text-xl"/> Community</Link>
        </li>
        <li>
          <Link to="#" className="listItem">
            <FaUserCircle className="text-xl"/> MyProfile</Link>
        </li>
        
        </FadeIn>
      </ul>
    </div>
}

  </div>
</nav>


    )
}

export default TopBar;