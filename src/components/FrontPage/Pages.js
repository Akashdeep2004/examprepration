import './Pages.classes.css'
import { Route, Routes } from 'react-router'
import { Link } from 'react-router-dom'
import Syllabusbpsc from '../BPSC/Syllabusbpsc'

const Pages = () => {
  return (
    <>
    <div className='pages1'>
      <Link to="/bpsc"><h2>BPSC </h2></Link>
      <br></br> 
    </div>
    <div className='pages1'> 
      <Link to="/upsc"><h2>UPSC </h2></Link>
      <br></br> 
      </div>
      <div className='pages1'> 
      <Link to="/upcoming"><h2>Upcoming..</h2></Link> 
      <br></br> 
      </div>
      <div className='pages1'> 
      <Link to="/upcoming"><h2>Upcoming..</h2></Link>
      <br></br> 
      </div>


      
      
      
    </>
  )
}




export default Pages