import React, { useState,  } from 'react';
import FormContext from './FormContext'
import { Link } from "react-router-dom";

const IdeaDetails = (props) => {
    const ideasContext = React.useContext(FormContext);
    
    let id = props.match.params.id
    const data = ideasContext.ideas.find((idea) => {
        return idea.id === parseInt(id)
    })
    const [claimed,setClaimed] = useState(data.claimed)
  
    const handleClaimedClick = () => {
        setClaimed(true)
        data.claimed = true
    }

    const handleReleasedClick = () => {
        setClaimed(false)
        data.claimed = false
    }

    const claimedButton = claimed ? null : <button onClick={handleClaimedClick}> Claim Idea</button>
    const releasedButton = (claimed === false )? null : <button onClick={handleReleasedClick}> Release Idea</button>
   
    return (
        <>
            <p>Id: {data.id}</p>
            <p>Name: {data.ideaName}</p>
            <p>Description: {data.ideaSummary}</p>
            <p>Status: {claimed ? 'claimed': 'unclaimed'}</p>
            <a href={`mailto:${data.email}`} rel="noopener noreferrer" target="_blank" className='button-border'>
                <span className='button-inner'>Contact Author</span>
            </a>

           {claimedButton}
           {releasedButton}
           <Link to='/'>
                <button>
                    to idea list
                </button>
           </Link>
        </>

    )
}

export default IdeaDetails