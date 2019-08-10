import React from 'react'
import { withRouter } from 'react-router-dom'

function Project(props) {
    function checkCompleted() {
        if (props.project.completed !== 0 && props.project.completed !== false) {
                return "line-through"
        } else {
            return "none"
        }
    }
    function clickHandler() {
        if (!props.match.params.id) {
            props.history.push(`/project/${props.project.id}`)
        }
    }
    console.log(props)
    return(
        <div onClick={clickHandler}style={{ margin: "0 auto"}}>
            <h2 style={{textDecoration: `${checkCompleted()}`}}>{props.project.name}</h2>
            <p>{props.project.description}</p>
        </div>
    )
}

export default withRouter(Project)
