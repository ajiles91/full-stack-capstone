import React from 'react';

const Idea = (props) => {
    // console.log(props.match.params.id)
    let index = props.match.params.id - 1
    const data = props.dummyIdeas[index]
    // this.handleClick = this.handleClick.bind(this); 
    console.log(data.accepted)

    const claimedButton = (data.accepted ===true )? null : <button onClick='this.handleClick'> claim idea</button>
    
    // handleClick() {
        
    // }

    return (
        <>
            <p>Idea: {data.id}</p>
            <p>Name: {data.name}</p>
            <p>Description: {data.des}</p>
            <p>Status: {true ? 'accepted': 'unaccepted'}</p>
            <a href={`mailto:${data.email}`} rel="noopener noreferrer" target="_blank" class='button-border'>
                <span class='button-inner'>Contact Author</span>
            </a>

           {claimedButton}
        </>

    )
}

export default Idea