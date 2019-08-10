import React from 'react'
import Loader from 'react-loader-spinner'

function UserHelper(props) {
    return(
        <>
            <div style={{position: "fixed", marginTop: "10vh", background: "lightgrey", width: "60vw", height: "5vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
              {props.passed.checkingServer && 
                <div style={{marginTop: "10vh"}}>
                    <p>Checking Server Status</p>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Loader 
                          type="Circles"
                        />
                    </div>
                </div>
              }
              {props.passed.error}
              {props.passed.message}
            </div>
        </>
    )
}

export default UserHelper