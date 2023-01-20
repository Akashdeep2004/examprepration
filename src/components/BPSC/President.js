import React from 'react'
import './President.classes.css'
import {useNavigate} from 'react-router-dom'
import presidentimage from '../../images/List-of-President-of-India-.webp'

const President = () => {

  let navigate = useNavigate();

  return (
    <>
    <div className='container'>
      <button onClick={() => navigate(-1)} className='btn btn-info mt-3'>&#x1F519; Back</button>
    <div className='president'>
      <img src={presidentimage} alt="president list" />
    </div>
    <div className='president-image'>
    <table className='table'>
   <tbody>
      <tr>
         <td><strong>S.No</strong></td>
         <td>&nbsp; &nbsp;&nbsp;<strong>Name of the President</strong></td>
         <td><strong>Tenure</strong></td>
      </tr>
      <tr>
         <td>1</td>
         <td>Rajendra Prasad (Elected Twice)</td>
         <td>13 May 1952 – 13 May 1957 &amp;<br />13 May 1957 – 13 May 1962</td>
      </tr>
      <tr>
         <td>2</td>
         <td>Sarvepalli Radhakrishnan</td>
         <td>13 May 1962 – 13 May 1967&nbsp;</td>
      </tr>
      <tr>
         <td>3</td>
         <td>Zakir Husain &nbsp;(Died in office)</td>
         <td>13 May 1967 – 3 May 1969&nbsp;</td>
      </tr>
      <tr>
         <td>4</td>
         <td>Varahagiri Venkata Giri</td>
         <td>24 August 1969 – 24 August 1974</td>
      </tr>
      <tr>
         <td>5</td>
         <td>Fakhruddin Ali Ahmed (Died in office)</td>
         <td>24 August 1974 – 11 February 1977&nbsp;</td>
      </tr>
      <tr>
         <td>6</td>
         <td>Neelam Sanjiva Reddy (Youngest President)</td>
         <td>25 July 1977 – 25 July 1982&nbsp;</td>
      </tr>
      <tr>
         <td>7</td>
         <td>&nbsp;Giani Zail Singh</td>
         <td>25 July 1982 – 25 July 1987&nbsp;</td>
      </tr>
      <tr>
         <td>8</td>
         <td>Ramaswamy Venkataraman</td>
         <td>25 July 1987 – 25 July 1992&nbsp;</td>
      </tr>
      <tr>
         <td>9</td>
         <td>Shankar Dayal Sharma</td>
         <td>25 July 1992 – 25 July 1997&nbsp;</td>
      </tr>
      <tr>
         <td>10</td>
         <td>Kocheril Raman Narayanan&nbsp;</td>
         <td>25 July 1997 – 25 July 2002&nbsp;</td>
      </tr>
      <tr>
         <td>11</td>
         <td>Avul Pakir Jainulabdeen Abdul Kalam&nbsp;</td>
         <td>25 July 2002 – 25 July 2007&nbsp;</td>
      </tr>
      <tr>
         <td>12</td>
         <td>Smt. Pratibha Devi Singh Patil&nbsp;</td>
         <td>25 July 2007 – 25 July 2012&nbsp;</td>
      </tr>
      <tr>
         <td>13</td>
         <td>Pranab Mukherjee</td>
         <td>25 July – 25 July 2017&nbsp;</td>
      </tr>
      <tr>
         <td>14</td>
         <td>Ram Nath Kovind</td>
         <td>25 July 2017 – 25 July 2022&nbsp;</td>
      </tr>
      <tr>
         <td>15</td>
         <td>Draupadi Murmu</td>
         <td>25 July 2022 – Till present</td>
      </tr>
   </tbody>
</table>
    </div>
    </div>

    <div className='footer'>
      <h2>@ Akash deep</h2>
    </div>
    </>
  )
}

export default President