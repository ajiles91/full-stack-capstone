import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FormContext from "./FormContext";
// import config from './config'

const UserPage = () => {

 const ideasCtx = React.useContext(FormContext);
 if(!(ideasCtx && ideasCtx.ideasTest)) {
  return;
  }
  
  const linkMap = dummyIdea => (
    <Link to={`/idea/${dummyIdea.id}`}>
      <li>
        {/* <span>{dummyIdea.ideaName}</span> */}
        <span>{dummyIdea.ideaName}</span>
        
      </li>
    </Link>
  );

  console.log(ideasCtx.ideasTest[0].email)
  

  
  
  const claimed = ideasCtx.ideasTest.filter(ideaTest => ideaTest.claimed === true);
  const unclaimed = ideasCtx.ideasTest.filter(ideaTest => ideaTest.claimed === false);

  console.log(claimed)
  console.log(unclaimed)
  // const claimedList = claimed.map(linkMap);
  // const unclaimedList = unclaimed.map(linkMap);

  

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
        {/* <ul>{claimedList}</ul> */}
        <p>list of claimed ideas</p>

        <h2>Unclaimed Ideas</h2>
        <ul>
          {/* {unclaimedList} */}
          <p>list of unclaimed ideas</p>
        </ul>
      </section>
    </div>
  );
};

export default UserPage;