import React from 'react';
import { Link } from 'react-router-dom'
import FormContext from './FormContext';


const UserPage = ({dummyIdeas = []}) => {
    const ideasCtx = React.useContext(FormContext);

    const linkMap = dummyIdea => (
        <Link to={`/idea/${dummyIdea.id}`}>
            <li>
                {/* <span>Id: {dummyIdea.id}</span>{' '} */}
                {/* <span>Name: {dummyIdea.name}</span> */}
                <span>Id: {ideasCtx.ideas.id}</span>{' '}
                <span>Name: {ideasCtx.ideas.ideaName}</span>
            </li>
        </Link>
    );

    const claimed = ideasCtx.ideas.filter(idea => idea.claimed === true);
    const unclaimed =  ideasCtx.ideas.filter(idea => idea.claimed === false);

    const claimedList = claimed.map(linkMap);
    const unclaimedList = unclaimed.map(linkMap);
    
    return (

        <div>
            <section 
            style={{
                width: '200px', 
                display: 'flex', 
                justifyContent: 'space-between'
                }}
            >
            <Link to='/ideas'>View Idea List</Link>
            <Link to='/create-idea'>Create Idea</Link>
            </section>
            <section>
                <h2>Claimed Ideas</h2>
                <ul>
                    {claimedList}
                </ul>

                <h2>Unclaimed Ideas</h2>
                <ul>
                    {unclaimedList}
                </ul>
            </section>
            
            
        </div>
    )
}



export default UserPage;