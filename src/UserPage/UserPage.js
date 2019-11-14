import React from "react";
import { Link } from "react-router-dom";
import FormContext from "../FormContext";
import './UserPage.css'

const UserPage = () => {

 const ideasCtx = React.useContext(FormContext);
  
  const linkMap = idea => (
    <Link to={`/idea/${idea.id}`}>
      <li>
        <span>{idea.ideaname}</span>
      </li>
    </Link>
  );
  
  const claimed = ideasCtx.ideas.filter(idea => idea.claimed === true);
  const unclaimed = ideasCtx.ideas.filter(idea => idea.claimed === false);

  console.log(claimed)
  console.log(unclaimed)
  const claimedList = claimed.map(idea => linkMap(idea));
  const unclaimedList = unclaimed.map(idea => linkMap(idea));

  
    
  return (
    <div className='whole-page'>
        <header>
          Marketplace of Ideas
        </header>
        <h3>For Those Looking to Create And Those That Are Full Of Ideas...</h3>
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
      <Link to="/idea">Create Idea</Link>
      </section>
      <section className='flex-container'>
        <div className='list'>
          <h2>Claimed Ideas</h2>
          <ul>{claimedList}</ul>
        </div>
    
        <div className='list'>
          <h2>Unclaimed Ideas</h2>
          <ul>{unclaimedList}</ul>
        </div>

      </section>
    </div>
  );
};

export default UserPage;