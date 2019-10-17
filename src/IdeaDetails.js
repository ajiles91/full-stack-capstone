import React, { useState, useContext } from 'react';
import FormContext from './FormContext'

const IdeaDetails = ({props}) => {
    const ideasContext = React.useContext(FormContext);
    let index = props.match.params.id - 1
    const data = props.dummyIdeas[index]
    const [claimed,setClaimed] = useState(data.claimed)
    
    
    const context = useContext(FormContext)
    console.log(context)

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
    // // const ideaDetails = submitted ? 
    // <>

    //     <p>Id: {context.state.id}</p>
    //     <p>Name: {context.state.ideaName}</p>
    //     <p>Description: {context.state.ideaSummary}</p>
    //     <p>Status: {context.state.claimed ? 'claimed': 'unclaimed'}</p>
    //     <a href={`mailto:${context.state.email}`} rel="noopener noreferrer" target="_blank" class='button-border'>
    //         <span class='button-inner'>Contact Author</span>
    //     </a>

    // </>
    // :

    // <>
    //     <p>Id: {data.id}</p>
    //     <p>Name: {data.name}</p>
    //     <p>Description: {data.des}</p>
    //     <p>Status: {claimed ? 'claimed': 'unclaimed'}</p>
    //     <a href={`mailto:${data.email}`} rel="noopener noreferrer" target="_blank" className='button-border'>
    //         <span className='button-inner'>Contact Author</span>
    //     </a>

    // </>
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