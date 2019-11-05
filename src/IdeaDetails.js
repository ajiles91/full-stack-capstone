import React, { useState, useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";
import config from './config'



const IdeaDetails = (props) => {
    const [claimed,setClaimed] = useState(false)
    const [data,setData] = useState({})
    const [redirect,setRedirect] = useState(false)
    let id = props.match.params.id
         
    useEffect(() => {
        fetch(`${config.API_BASE_URL}/idea/${id}`)
        .then(response => response.json())
        .then(json => {
        console.log('result:', json);
            setData(json)
            setClaimed(json.claimed)
        })
    },[])

    useEffect(() => {
        console.log({claimed})
    },[claimed])
    
    const handleClaimedClick = (props, updateClaimedOnMainPage) => {
        setClaimed(true)
        fetch(`${config.API_BASE_URL}/idea/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                claimed: true
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
        updateClaimedOnMainPage()
        setRedirect(true)

    }

       
    const handleReleasedClick = (props, updateClaimedOnMainPage) => {
        setClaimed(false)
        fetch(`${config.API_BASE_URL}/idea/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                claimed: false
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
        updateClaimedOnMainPage()
        setRedirect(true)
    }
    
    console.log(redirect)
    const claimedButton = claimed ? null : <button onClick={handleClaimedClick}> Claim Idea</button>
    const releasedButton = (claimed === false )? null : <button onClick={handleReleasedClick}> Release Idea</button>
    
    

    if (redirect === true) {
        return <Redirect to="/" />;
      }
    return (
        <>
            <p>Id: {data.id}</p>
            <p>Name: {data.ideaname}</p>
            <p>Description: {data.ideasummary}</p>
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