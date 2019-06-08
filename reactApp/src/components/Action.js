import React from 'react'

function Action(props) {
    function checkCompleted() {
        if (props.action.completed !== 0 && props.action.completed !== false) {
                return "line-through"
        } else {
            return "none"
        }
    }
    console.log(props.action)
    // const action = [...props.action]
    return(
        <>
            <h3 style={{textDecoration: `${checkCompleted()}`}}>{props.action.description}</h3>
            {props.action.notes}
        </>
    )
}

export default Action