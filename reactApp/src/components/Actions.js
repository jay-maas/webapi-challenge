import React from 'react'
import { Action } from '../components'

function Actions(props) {
    const actions = [...props.actions]
    console.log(actions)
    return(
        <div style={{marginTop: "5vh"}} onClick={() => {

        }}>
            Actions:
            {props.actions && actions.map(action => {
                return <Action key={action.id} action={action} />
            })}
        </div>
    )
}

export default Actions