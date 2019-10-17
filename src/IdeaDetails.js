import React, { useState } from 'react';

const IdeaDetails = (props) => {
    
    let index = props.match.params.id - 1
    const data = props.dummyIdeas[index]
    const [claimed,setClaimed] = useState(data.claimed)
    
    console.log(data.claimed)

    const handleClaimedClick = () => {
        setClaimed(true)
        props.dummyIdeas[index].claimed = true
    }

    const handleReleasedClick = () => {
        setClaimed(false)
        props.dummyIdeas[index].claimed = false
    }

    const claimedButton = claimed ? null : <button onClick={handleClaimedClick}> Claim Idea</button>
    const releasedButton = (claimed === false )? null : <button onClick={handleReleasedClick}> Unclaim Idea</button>
    

    return (
        <>
            <p>Id: {data.id}</p>
            <p>Name: {data.name}</p>
            <p>Description: {data.des}</p>
            <p>Status: {claimed ? 'claimed': 'unclaimed'}</p>
            <a href={`mailto:${data.email}`} rel="noopener noreferrer" target="_blank" class='button-border'>
                <span class='button-inner'>Contact Author</span>
            </a>

           {claimedButton}
           {releasedButton}
        </>

    )
}

export default IdeaDetails