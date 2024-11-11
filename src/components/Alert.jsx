import React from 'react'

export const Alert = (props) => {
    return (
        <div class={"alert alert-" + props.className} role="alert">
            {props.children}
        </div>
    )
}