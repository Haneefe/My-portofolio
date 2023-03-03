import React,{useState} from 'react'
import "./Modal.css"
import ReactDOM from 'react-dom'

const Modal = ({setCloseModal}) => {
 
    const closeHandler=()=>{
       setCloseModal(false)
    }
//  if(!open)return null   

  return ReactDOM.createPortal(
    <div className='modalBackdrop' onClick={closeHandler}>
        <div className='modalContainer'> 
       <div className='headerModal'>
       <button onClick={closeHandler} className="xbtn">x</button>
       </div>
      <div className='bodyModal'>
        {/* <img src={Sucess} className="sucessimg"/> */}
      <h1 className='message'>Thank You</h1>
      </div>
        {/* <div className='footerModal'>
        <button className='btn1'>Close</button>
        </div> */}
         
         </div>
        
    </div>,
    document.querySelector('#modal-root')
  )
}

export default Modal