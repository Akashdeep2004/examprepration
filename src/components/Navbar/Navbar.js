import React from 'react'
import './Navbar.classes.css'
import { Link as LinkScroll } from 'react-scroll'

const Navbar = () => {
  return (
    
      <nav className='navbar'>
        <ul className='template1'>
        <li className='list1'>Akash</li>
        </ul>
        <ul className='template2'>
          <li className='nav-item'><a href='/'>Home</a></li>
          <li className='nav-item'>
          <LinkScroll
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
          >
        About
         </LinkScroll>
         
         </li>
          <li className='nav-item'>
          <LinkScroll
            activeClass='active'
            to='skill'
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
          >
        Skill
         </LinkScroll>
          </li>
          {/* <li className='nav-item'>
          <LinkScroll
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
          >
        Services
         </LinkScroll></li> */}
          <li className='nav-item'>
          <LinkScroll
            activeClass='active'
            to='portfolio'
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
          >
        Syllabus
         </LinkScroll>
          </li>
          <li className='nav-item'>
          <LinkScroll
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
          >
        ContactMe
         </LinkScroll>
          </li>
        </ul>
      </nav>
    
  )
}

export default Navbar