import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="title">Sumit</div>
      <div className="bars">
        <div><Link to='/Home'>Home</Link></div>
        <div><Link to='/About'>About</Link></div>
        <div><Link to='/Contact'>Contact</Link></div>
      </div>

      

    </div>
  )
}

export default Navbar
