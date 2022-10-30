import React, { useState } from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: '#2b2d2b',
        backgroundColor: 'white',
        // border: '1px solid #2b2d2b',
        // borderRadius: '5px'
    })

    const [btnText, setbtnText] = useState('Dark Mode')
    const [btnBg, setbtnBg] = useState({
        backgroundColor: '#2b2d2b',
        color: 'white',
        border: '1px solid green'
    })

    const toggleStyle = ()=>{
        if(myStyle.color === '#2b2d2b'){
            setMyStyle({
                color: 'white',
                backgroundColor: '#2b2d2b'
            })
            setbtnText('Light Mode')
            setbtnBg({
                backgroundColor: 'white',
                border: '1px solid green'
            })
        }
        else{
            setMyStyle({
                color: '#2b2d2b',
                backgroundColor: 'white'
            })
            setbtnText('Dark Mode')
            setbtnBg({
                backgroundColor: '#2b2d2b',
                border: '1px solid green',
                color: 'white'
            })
        }
    }
    
  return (
    <>
    <div className="container  pb-5" style={myStyle}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="container my-4">
        <button onClick={toggleStyle} type="button" style={btnBg} className="btn">{btnText}</button>
    </div>
    </>
  )
}
