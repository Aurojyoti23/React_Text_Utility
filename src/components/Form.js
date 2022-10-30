import React, { useState } from 'react'

export default function Form(props) {
  const upperCase = ()=>{
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert('Converteed to uppercase', 'success')
  }
  const lowerCase = ()=>{
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert('Converteed to lowercase', 'success')
  }
  const clearText = ()=>{
    let newText = ''
    setText(newText)
    props.showAlert('Cleared👍🏻', 'success')
  }
  const removeXtraSpace = ()=>{
    let newText = text.split(/[ ]+/m).join(" ")
    // document.write(newText)
    setText(newText)
    props.showAlert('All extra spaces are removed', 'success')
  }
  const copyText = ()=>{
    let text = document.getElementById("textarea")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert('Copied', 'success')
  }
  const onChanged = (e)=>{
    setText(e.target.value)
  }
  const [text,setText] = useState('')
  // const textLC = text.charAt(text.length-1);
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="my-3">
            <textarea className="form-control my-4 my-4" value={text} onChange={onChanged} id="textarea" rows="9"></textarea>
            <h3 className='text-success'>Convert to,</h3>
            <button onClick={upperCase} className="btn btn-outline-success mx-4 my-4">UpperCase</button>
            <button onClick={lowerCase} className="btn btn-outline-success mx-4 my-4">LowerCase</button>
            <button onClick={removeXtraSpace} className="btn btn-outline-success mx-4 my-4">Remove Xtra Space</button>
            <button onClick={copyText} className="btn btn-outline-success mx-4 my-4">Copy Text</button>
            {/* <button className="btn btn-outline-dark mx-4">Remove</button>
            <button className="btn btn-outline-secondary mx-4">Remove</button>
            <button className="btn btn-outline-primary mx-4">Remove</button> */}
            <button onClick={clearText} className="btn btn-danger my-4 mx-4">Clear all</button>
        </div>
        <div className="my-5">

          <h3 className='text-success'>Text Summary</h3>

          {/* my approach */}
          {/* <p>{text.length===0? '0' : text.charAt(text.length-1)===' '? text.split(" ").length-1 : text.split(" ").length} words & {text.length} characters</p>

          <p>{text.length===0? '0' : text.charAt(text.length-1)===' '? (text.split(" ").length-1) * 0.008 : text.split(" ").length * 0.008 } minutes to read</p> */}


          {/* cwh appraoch */}
          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words & {text.length} characters</p>

          <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read</p>

          <h4 className='text-success'>Review</h4>

          <p>{text.length>0? text:'Enter somthing in the textbox above to preview it here'}</p>

        </div>
    </div>
  )
}
