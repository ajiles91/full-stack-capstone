import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import config from "../config";
import "./IdeaDetails.css";

const IdeaDetails = (props) => {
  const [claimed, setClaimed] = useState(false);
  const [data, setData] = useState({});
  const [navigate, setNavigate] = useState(false);
  let id = props.match ? props.match.params.id : "";

  useEffect(() => {
    fetch(`${config.API_BASE_URL}/idea/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setClaimed(json.claimed);
      });
    //  eslint-disable-next-line
  }, []);

  const handleClaimedClick = () => {
    setClaimed(true);
    fetch(`${config.API_BASE_URL}/idea/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        claimed: true,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .then(() => props.updateClaimedOnMainPage());
    setNavigate(true);
  };

  const handleReleasedClick = () => {
    setClaimed(false);
    fetch(`${config.API_BASE_URL}/idea/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        claimed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .then(() => props.updateClaimedOnMainPage());
    setNavigate(true);
  };

  const claimedButton = claimed ? null : (
    <button className="idea-details-buttons" onClick={handleClaimedClick}>
      {" "}
      Claim Idea
    </button>
  );
  const releasedButton =
    claimed === false ? null : (
      <button className="idea-details-buttons" onClick={handleReleasedClick}>
        {" "}
        Release Idea
      </button>
    );

  if (navigate === true) {
    return <Navigate to="/" />;
  }
  return (
    <div className="whole-page">
      <section className="idea-details">
        <p>Id: {data.id}</p>
        <p>Name: {data.ideaname}</p>
        <p>Description: {data.ideasummary}</p>
        <p>Status: {claimed ? "claimed" : "unclaimed"}</p>

        <div className="button-section">
          <a
            className="link-as-button button-border"
            href={`mailto:${data.email}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Contact Author
          </a>

          {claimedButton}
          {releasedButton}
          <Link to="/">
            <button>Back To Idea List</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IdeaDetails;
