import React from 'react'

function Alert(props) {
    
  const capitalized = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    <div className="container" style={{height: '50px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible text-center fade show`} role="alert">
        <strong>{capitalized(props.alert.type)}: </strong>{props.alert.msg}
        
      </div>}
    </div>
  )
}

export default Alert
