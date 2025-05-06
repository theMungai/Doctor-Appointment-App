import React from 'react'

function NavBar(){
  return (
    <nav>
        <div className='logo flex items-center gap-x-7 '>
            <img src='../../assets/images/logo.png' alt="Logo" />
            <a href="#" className=''>Health<span>care</span></a>
        </div>
    </nav>
  )
}

export default NavBar
