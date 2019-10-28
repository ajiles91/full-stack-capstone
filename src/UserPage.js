import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FormContext from "./FormContext";

const UserPage = ({ dummyIdeas = [] }) => {

  useEffect(() => {
    fetch('${config.API_BASE_URL}')
    .then(response => response.json())
    .then(json => console.log(json))

  })

  


  const ideasCtx = React.useContext(FormContext);

  const linkMap = dummyIdea => (
    <Link to={`/idea/${dummyIdea.id}`}>
      <li>
        <span>{dummyIdea.ideaName}</span>
        
      </li>
    </Link>
  );

  console.log(ideasCtx)

  const claimed = ideasCtx.ideas.filter(idea => idea.claimed === true);
  const unclaimed = ideasCtx.ideas.filter(idea => idea.claimed === false);

  const claimedList = claimed.map(linkMap);
  const unclaimedList = unclaimed.map(linkMap);

  

  return (
    <div>

        <header>
            <h3>For Those Looking to Create...</h3>
            <h3>For Those That Are Full Of Ideas...</h3>
        </header>
        <p>
            Have you ever felt that you have one (or a ton) of ideas but don't have the skills or time
            to implement them?  You can put them up for someone to claim and you can collaborate with 
            someone that wants to bring your idea to life! Do you enjoy building projects but run short of ideas?  
            Do you just want to lend your skills to bring the next big idea to light?
        </p>
      <section
        style={{
          width: "200px",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
      
        <Link to="/create-idea">Create Idea</Link>
      </section>
      <section>
        <h2>Claimed Ideas</h2>
        <ul>{claimedList}</ul>

        <h2>Unclaimed Ideas</h2>
        <ul>
          {unclaimedList}
          
        </ul>
      </section>
    </div>
  );
};

export default UserPage;