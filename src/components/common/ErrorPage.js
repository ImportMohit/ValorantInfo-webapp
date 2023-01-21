import React from 'react'
import ErrorImage from '../../images/error.jpg'

function ErrorPage() {
  return (
    <div className='errorPage'>
      <a href="/">Go Back To HomePage</a>
 <img src={ErrorImage} style={{height:"85vh",width:"85vw",margin:"5% 10% 10% 5%"}}></img>

    </div>
  )
}

export default ErrorPage;