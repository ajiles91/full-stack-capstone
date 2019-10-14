import React from 'react';
import { Link } from 'react-router-dom'

const UserPage = ({dummyIdeas}) => {
    const list = dummyIdeas.map(dummyIdeas => (
        <Link to={`/idea/${dummyIdeas.id}`}>
            <li>
                <span>Id: {dummyIdeas.id}</span>{' '}
                <span>Name: {dummyIdeas.name}</span>
            </li>
        </Link>
    ))

    const claimedList = dummyIdeas.filter(dummyIdeas => dummyIdeas.accepted===true)
    const unclaimedList =  dummyIdeas.filter(dummyIdeas => dummyIdeas.accepted===false)
    return(

        <div>
            <section style={{width: '200px', display: 'flex', justifyContent: 'space-between'}}>
                <Link to='/ideas'>View Idea List</Link>
                <Link to='/create-idea'>Create Idea</Link>
            </section>
            <section>
                <h2>Accepted ideas</h2>
                <ul>
                    {list}
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