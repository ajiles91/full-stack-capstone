import React, { useState } from 'react';

const IdeaDetails = (props) => {
    
    let index = props.match.params.id - 1
    const data = props.dummyIdeas[index]
    const [accepted,setAccepted] = useState(data.accepted)
    
    console.log(data.accepted)

    const handleClaimedClick = () => {
        setAccepted(true)
        props.dummyIdeas[index].accepted = true
    }

    const handleReleasedClick = () => {
        setAccepted(false)
        props.dummyIdeas[index].accepted = false
    }

    const claimedButton = accepted ? null : <button onClick={handleClaimedClick}> Claim Idea</button>
    const releasedButton = (accepted === false )? null : <button onClick={handleReleasedClick}> claim Idea</button>
    

    return (
        <>
            <p>Idea: {data.id}</p>
            <p>Name: {data.name}</p>
            <p>Description: {data.des}</p>
            <p>Status: {true ? 'claimed': 'unclaimed'}</p>
            <a href={`mailto:${data.email}`} rel="noopener noreferrer" target="_blank" class='button-border'>
                <span class='button-inner'>Contact Author</span>
            </a>

           {claimedButton}
           {releasedButton}
        </>

    )
}

export default IdeaDetails