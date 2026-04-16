import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()
  // const handleClick = () => {

  // }

  return (
    <>
      <div className='navbar'>
        <div className="title">Sumit</div>

        <div className="bars">
          <div><Link to='/Home'>Home</Link></div>
          <div><button onClick={() => {
            navigate('/Home')
          }}>Returned to home page</button></div>

          <div><button onClick={() => {
            navigate(-1)
          }}>back</button></div>

          <div><button onClick={() => {
            navigate(1)
          }}>next</button></div>



          <div><Link to='/About'>About</Link></div>
          <div><Link to='/Contact'>Contact</Link></div>
          <div><Link to='/Courses'>Courses</Link></div>
        </div>

      </div>
    </>
  )
}

export default Navbar
