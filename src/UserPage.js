import React from 'react';
import { Link } from 'react-router-dom'
import IdeasFromForm from'./IdeasFromForm'

const UserPage = ({dummyIdeas}) => {
    
    const linkMap = dummyIdea => (
        <Link to={`/idea/${dummyIdea.id}`}>
            <li>
                <span>Id: {dummyIdea.id}</span>{' '}
                <span>Name: {dummyIdea.name}</span>
            </li>
        </Link>
    );

const claimed = dummyIdeas.filter(idea => idea.accepted === true);
const unclaimed =  dummyIdeas.filter(idea => idea.accepted === false);

const claimedList = claimed.map(linkMap);
const unclaimedList = unclaimed.map(linkMap);
    
    return(

        <div>
            <section style={{width: '200px', display: 'flex', justifyContent: 'space-between'}}>
                <Link to='/ideas'>View Idea List</Link>
                <Link to='/create-idea'>Create Idea</Link>
            </section>
            <section>
                <h2>Accepted ideas</h2>
                <ul>
                    {/* {list} */}
                    {claimedList}
                    <IdeasFromForm/>
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