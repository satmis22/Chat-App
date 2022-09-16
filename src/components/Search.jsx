import React from 'react'
import Add from "../components/component-images/womenImg1.jpg";

function Search() {
  return (
    <div className='search'>
      <div className="searchform">
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className="userChat">
        <img src={Add} alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Search
