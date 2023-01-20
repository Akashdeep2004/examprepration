import React from 'react'
import './President.classes.css'
import {useNavigate} from 'react-router-dom'
import images from '../../images/166330249217.jpg'
import './Primeminister.classes.css'


const Primeminister = () => {
  let navigate = useNavigate(); 
  return (
    <>
    <div className='container'>
      <button onClick={() => navigate(-1)} className='btn btn-info mt-3'>&#x1F519; Back</button>
    <div className='president'>
      <img src={images} alt="president list" />
    </div>
    <div className='president-image'>
    
    <figure className="table">
   <table>
      <tbody>
         <tr>
            <td><strong>Serial No.</strong></td>
            <td><strong>Name of the Prime Minister</strong></td>
            <td><strong>Tenure</strong></td>
         </tr>
         <tr>
            <td><strong>1</strong></td>
            <td>Pandit Jawaharlal Nehru&nbsp;</td>
            <td>15th Aug 1947- 27th May 1964</td>
         </tr>
         <tr>
            <td><strong>2</strong></td>
            <td>Gulzarilal Nanda (interim)</td>
            <td>27th May 1964- 9th Jun 1964</td>
         </tr>
         <tr>
            <td><strong>3</strong></td>
            <td>Lal Bahadur Shastri&nbsp;</td>
            <td>9th June 1964 -11th January 1966</td>
         </tr>
         <tr>
            <td><strong>4</strong></td>
            <td>Gulzarilal Nanda&nbsp;</td>
            <td>11th January 1966- 24th January 1966</td>
         </tr>
         <tr>
            <td><strong>5</strong></td>
            <td>Indira Gandhi&nbsp;</td>
            <td>24th January 1966- 24th March 1977</td>
         </tr>
         <tr>
            <td><strong>6</strong></td>
            <td>Morarji Desai&nbsp;</td>
            <td>24th March 1977- 28th July 1979</td>
         </tr>
         <tr>
            <td><strong>7</strong></td>
            <td>Charan Singh&nbsp;</td>
            <td>28th July 1979- 14th January 1980</td>
         </tr>
         <tr>
            <td><strong>8</strong></td>
            <td>&nbsp;Indira Gandhi&nbsp;</td>
            <td>14th January 1980- 31st October 1984</td>
         </tr>
         <tr>
            <td><strong>9</strong></td>
            <td>Rajiv Gandhi</td>
            <td>&nbsp;31st October 1984- 2nd December 1989</td>
         </tr>
         <tr>
            <td><strong>10</strong></td>
            <td>Vishwanath Pratap Singh&nbsp;</td>
            <td>2nd December 1989- 10th November 1990</td>
         </tr>
         <tr>
            <td><strong>11</strong></td>
            <td>Chandra Shekhar&nbsp;</td>
            <td>10th November 1990-21st June 1991</td>
         </tr>
         <tr>
            <td><strong>12</strong></td>
            <td>P. V Narasimha Rao&nbsp;</td>
            <td>21st June 1991- 16th May 1996</td>
         </tr>
         <tr>
            <td><strong>13</strong></td>
            <td>Atal Bihari Vajpayee</td>
            <td>&nbsp;16th May 1996-1st June 1996</td>
         </tr>
         <tr>
            <td><strong>14</strong></td>
            <td>H. D Deve Gowda</td>
            <td>&nbsp;1st June 1996- 21st April 1997</td>
         </tr>
         <tr>
            <td><strong>15</strong></td>
            <td>Inder Kumar Gujral&nbsp;</td>
            <td>21st April 1997- 18th March 1998</td>
         </tr>
         <tr>
            <td><strong>16</strong></td>
            <td>Atal Bihari Vajpayee&nbsp;</td>
            <td>18th March 1998- 22nd May 2004</td>
         </tr>
         <tr>
            <td><strong>17</strong></td>
            <td>Dr Manmohan Singh&nbsp;</td>
            <td>22nd May 2004 -17th May 2014</td>
         </tr>
         <tr>
            <td rowspan="2"><strong>18</strong></td>
            <td rowspan="2">Narendra Modi&nbsp;</td>
            <td>26th May 2014 -23rd May 2019</td>
         </tr>
         <tr>
            <td>30th May 2019 -Till present</td>
         </tr>
      </tbody>
   </table>
</figure>


    </div>
    </div>

    <div className='footer'>
      <h2>@ Akash deep</h2>
    </div>
    </>
  )
}

export default Primeminister