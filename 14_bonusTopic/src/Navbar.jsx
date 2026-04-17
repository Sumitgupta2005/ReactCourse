import React from 'react'

const Navbar = (props) => {

    const changeTheme=()=>{
        props.settheme('hello')
    }

  return (
    <div>
        
    <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar
