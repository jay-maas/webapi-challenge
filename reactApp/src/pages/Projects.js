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
                <div style={{display: "flex", flexDirection: "column", textAlign: "center"}}>
                    <h1>Projects</h1>
                    {this.props.projects && this.props.projects.map(project =>{
                        return <Project key={project.id} project={project} />
                    })}
                </div>
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