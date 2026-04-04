import React from 'react'

const Card = (props) => {
    
    return (
            
      <div className='card'>
            <img src="https://images.unsplash.com/photo-1774830931262-85466b935a8c?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="nature" />
            <h1>{props.user}</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, iusto!</p>
            <button>Click Me</button>
        </div >  
  )
}

export default Card



