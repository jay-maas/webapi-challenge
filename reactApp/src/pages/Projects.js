import React from 'react'
import { connect } from 'react-redux'
import { getProjects } from '../actions'
import { Project } from '../components'

class Projects extends React.Component {
    componentDidMount() {
        this.props.getProjects()
    }
    render(){
        return(
            <>
                Projects
                {this.props.projects && this.props.projects.map(project =>{
                    return <Project key={project.id} project={project} />
                })}
            </>
        )
    }
}

const mapStateToProps = state => ({
    gettingProjects: state.gettingProjects,
    projects: state.projects
})

export default connect(
    mapStateToProps,
    { getProjects }
)(Projects)