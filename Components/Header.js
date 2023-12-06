import React from 'react'

const Header = (props) => {
  return (
    <>
      <div className='bg-green-500 flex h-10 px-10 justify-between'>
      <h1>{props.user}</h1>
        <ul className="flex gap-10 ">
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>{props.income}</li>
      </ul>
    </div>
    </>
    )
}

export default Header