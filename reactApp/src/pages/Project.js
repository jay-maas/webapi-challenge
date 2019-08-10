import React from 'react'
import { connect } from 'react-redux'
import { getProject } from '../actions'
import { Project as ProjectComponent, Actions } from '../components'

class Project extends React.Component {
    componentDidMount() {
        this.props.getProject(`${this.props.match.params.id}`)
    }
    render(){
        return(
            <div style={{display: "flex", flexDirection: "column", textAlign: "center", }}>
                {this.props.project && <ProjectComponent project={this.props.project} />}
                {(this.props.project.actions && this.props.project.actions.length > 0) && 
                       <Actions actions={this.props.project.actions}/>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    message: state.message,
    error: state.error,
    gettingProject: state.gettingProject,
    project: state.project
})

export default connect(
    mapStateToProps,
    { getProject }
)(Project)