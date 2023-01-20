import React from 'react'
import Navbar from './Navbar/Navbar'
import Pages from './FrontPage/Pages'
import { Route ,Routes } from 'react-router-dom'
import Syllabusbpsc from './BPSC/Syllabusbpsc'
import Syllabusupsc from './UPSC/Syllabusupsc'
import Upcoming from './Store/Upcoming'
import President from './BPSC/President'
import Primeminister from './BPSC/Primeminister'

const Navigation = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Pages />} />
      </Routes>
      <Routes>
        <Route path='/bpsc' element={<Syllabusbpsc />} />
      </Routes>
      <Routes>
        <Route path='/upsc' element={<Syllabusupsc />} />
      </Routes>

      <Routes>
        <Route path='/upcoming' element={<Upcoming />} />
      </Routes>

      <Routes>
        <Route path='/president' element={<President />} />
      </Routes>

      <Routes>
        <Route path='/primeminister' element={<Primeminister />} />
      </Routes>
    </div>
  )
}

export default Navigation