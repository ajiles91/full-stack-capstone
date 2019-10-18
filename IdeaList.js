import React from 'react';
import { Link } from 'react-router-dom'

const IdeaList = ({dummyIdeas}) => {
    const list = dummyIdeas.map(dummyIdeas => (
        <>
        <li>
            {/* <span>Id: {idea.id}</span>{' '}
            <span>Name: </span> */}
            <Link to={`/idea/${dummyIdeas.id}`}>{dummyIdeas.name}</Link>
        </li>
            
        </>
    ))
    return(
        <div>
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default IdeaList;