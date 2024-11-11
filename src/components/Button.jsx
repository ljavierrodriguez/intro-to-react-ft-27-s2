import React from 'react'
import { FcBearish } from "react-icons/fc";

function Button(props){
    return (
        <button className={'btn btn-' + props.variant}>
            <FcBearish className='me-1' />
            {props.text}
        </button>
    )
}

export default Button