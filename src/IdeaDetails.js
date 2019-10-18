import React, { useState, useContext, Redirect } from 'react';
import FormContext from './FormContext'

const IdeaDetails = (props) => {
    const ideasContext = React.useContext(FormContext);
    let index = props.match.params.id - 1
    // const data = props.dummyIdeas[index]
    const data = ideasContext.ideas[index]
    const [claimed,setClaimed] = useState(data.claimed)
    // const[submitted, setSubmitted] = 
    
    const context = useContext(FormContext)
    console.log(context)

    console.log(data.claimed)

    const handleClaimedClick = () => {
        setClaimed(true)
        // props.dummyIdeas[index].claimed = true
        ideasContext.ideas[index].claimed =true
        if (ideasContext.ideas[index].claimed === true) {
            return <Redirect to="/" />;
        }
    }

    const handleReleasedClick = () => {
        setClaimed(false)
        // props.dummyIdeas[index].claimed = false
        ideasContext.ideas[index].claimed =false
        if (ideasContext.ideas[index].claimed === false) {
            return <Redirect to="/" />;
        }
    }

    const claimedButton = claimed ? null : <button onClick={handleClaimedClick}> Claim Idea</button>
    const releasedButton = (claimed === false )? null : <button onClick={handleReleasedClick}> Unclaim Idea</button>
   
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
        </>

    )
}

export default IdeaDetails


// import React, { useState, useContext } from 'react';
// import FormContext from './FormContext'

// const IdeaDetails = (props) => {
//     // const ideasContext = React.useContext(FormContext);
//     let index = props.match.params.id - 1
//     // console.log(index)
//     const data = props.dummyIdeas[index]
//     // const data = ideasContext.ideas[index]
//     const [claimed,setClaimed] = useState(data.claimed)

   
    
//     const context = useContext(FormContext)
//     console.log(context)

//     console.log(data.claimed)

//     const handleClaimedClick = () => {
//         setClaimed(true)
//         props.dummyIdeas[index].claimed = true
//         // ideasContext.ideas.claimed = true
//     }

//     const handleReleasedClick = () => {
//         setClaimed(false)
//         props.dummyIdeas[index].claimed = false
//         // ideasContext.ideas[index].claimed = false
//     }

//     const claimedButton = claimed ? null : <button onClick={handleClaimedClick}> Claim Idea</button>
//     const releasedButton = (claimed === false )? null : <button onClick={handleReleasedClick}> Unclaim Idea</button>
   
//     return (
//         <>
//            <p>Id: {data.id}</p>
//             <p>Name: {data.ideaName}</p>
//             <p>Description: {data.ideaSummary}</p>

//             <p>Status: {claimed ? 'claimed': 'unclaimed'}</p>
//             <a href={`mailto:${data.email}`} rel="noopener noreferrer" target="_blank" class='button-border'>
//                 <span class='button-inner'>Contact Author</span>
//             </a>

//            {claimedButton}
//            {releasedButton}
//         </>

//     )
// }

// export default IdeaDetails