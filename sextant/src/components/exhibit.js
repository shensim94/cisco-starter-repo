import React from 'react'

export default function Exhibit(props){
    return(
        <div className = "Exhibit" style={{backgroundColor:'#f0f0f0'}}>
            <h1>{props.heading}</h1>
            <div>{props.children}</div>
        </div>
    )
}