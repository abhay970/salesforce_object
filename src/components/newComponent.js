import React from 'react'

function NewComponent(props) {
    console.log(props.data)
    const item=props.data;
  return (
    <div>

     
    <div><span>{item.text}</span>
    &nbsp;&nbsp;
    <img
      src={item.info}
      alt="info"
      height={10}
      width={10}
      style={{ backgroundColor: "red" }}
    />
    <p className="inprogress-text">
      <span className="inprogress-box">{item.status}</span>
    </p>
    <p className="small">dummy text</p></div>

    </div>
  )
}

export default NewComponent