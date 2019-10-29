import React, { useState, useEffect } from 'react';
import FormContext from './FormContext'
import { Link } from "react-router-dom";
// import config from './config'



const IdeaDetails = (props) => {
    const ideasCtx = React.useContext(FormContext);
         
    // useEffect(){
    //     fetch(`${config.API_BASE_URL}/idea/${id}`)
    //     .then(response => response.json())
    //     .then(json => {
    //     console.log('result:', json);
    //     this.setState({
    //         ideas: json
    //     })
     
    //     })
    // }
    let id = props.match.params.id
    const data = ideasCtx.ideas.find((idea) => {
        return idea.id === parseInt(id)
    })
    console.log(data)
    const [claimed,setClaimed] = useState(data.claimed)
  
    const handleClaimedClick = () => {
        // setClaimed(true)

        //PATCH to the resource id = 1
        // update that task is completed
        // fetch(`${config.API_BASE_URL}/idea/${props.id}`, {
        //     method: ‘PATCH’,
        //     body: JSON.stringify({
        //     completed: true
        //     }),
        //     headers: {
        //     “Content-type”: “application/json; charset=UTF-8”
        //     }
        //     })
        //     .then(response => response.json())
        //     .then(json => console.log(json))
    }

    const handleReleasedClick = () => {
        // setClaimed(false)

        //PATCH to the resource id = 1
        // update that task is completed
        // fetch(`${config.API_BASE_URL}/idea/${props.id}`, {
        //     method: ‘PATCH’,
        //     body: JSON.stringify({
        //     claimed: false
        //     }),
        //     headers: {
        //     “Content-type”: “application/json; charset=UTF-8”
        //     }
        //     })
        //     .then(response => response.json())
        //     .then(json => console.log(json))
       
    }
    const index = id - 1;
    const claimedButton = claimed ? null : <button onClick={handleClaimedClick}> Claim Idea</button>
    const releasedButton = (claimed === false )? null : <button onClick={handleReleasedClick}> Release Idea</button>


   
    return (
        <>
            {/* <p>Id: {data.id}</p> */}
            
            
            {/* <p>Name: {data.ideaname}</p>
            <p>Description: {data.ideasummary}</p>
            <p>Status: {claimed ? 'claimed': 'unclaimed'}</p>
            <a href={`mailto:${data.email}`} rel="noopener noreferrer" target="_blank" className='button-border'>
                <span className='button-inner'>Contact Author</span>
            </a> */}

            <p>Id: {ideasCtx.ideasTest[id] && ideasCtx.ideasTest[id].id}</p>
            <p>Description: {ideasCtx.ideasTest[id] && ideasCtx.ideasTest[id].ideasummary}</p>
            <p>Status: {ideasCtx.ideasTest[id] && ideasCtx.ideasTest[id].claimed} ? 'claimed': 'unclaimed'}</p>
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