import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import FormContext from "./FormContext";
import config from './config'


class CreateIdea extends Component {
  static contextType = FormContext;
  constructor(props) {
    super(props);
    this.state = {
      claimed: false,
      submitted: false,
      ideaName: "",
      ideaSummary: "",
      authorName: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    
    event.preventDefault();
    this.setState({
      submitted: true
    });
    console.log(this.state);
    
    
    fetch(`${config.API_BASE_URL}/idea`, {
      method: 'POST',
      body: JSON.stringify({
        claimed: this.state.claimed,
        submitted: this.state.submitted,
        ideaname: this.state.ideaName,
        ideasummary: this.state.ideaSummary,
        authorname: this.state.authorName,
        email: this.state.email
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    this.props.updateClaimedOnMainPage()
    .then(response => response.json())
    .then(json => console.log(json))
  
  }

  render() {
    console.log(this.state.submitted);
    if (this.state.submitted === true) {
      return <Redirect to="/" />;
    }

    return (
      <div className="CreateIdeaApp">
        <main role="main">
          <Link to="/">
            <button> to idea page</button>
          </Link>
          <header>
            <h1>New Idea</h1>
          </header>

          <section>
            <form id="submit-idea" onSubmit={this.handleSubmit}>
              <div className="form-section">
                <label htmlFor="idea-name">Idea Name</label>
                <input
                  type="text"
                  value={this.state.ideaName}
                  onChange={this.handleChange}
                  name="ideaName"
                  required
                />
              </div>

              <div className="form-section">
                <label htmlFor="idea-summary">Idea Summary</label>
                <textarea
                  value={this.state.ideaSummary}
                  rows="15"
                  onChange={this.handleChange}
                  name="ideaSummary"
                  required
                />
              </div>

              <div className="author-name-container form-section">
                <label htmlFor="contact-info">Author Name</label>
                <input
                  type="text"
                  name="authorName"
                  value={this.state.authorName}
                  onChange={this.handleChange}
                  required
                />
              </div>

              <div className="contact-info-container form-section">
                <label htmlFor="contact-info">Email</label>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </div>

              <button type="submit">Submit</button>

              {/* <Link to ="/idea-list">
                <button>to Idea List</button>
              </Link> */}
            </form>
          </section>
        </main>
      </div>
    );
  }
}
CreateIdea.contextType = FormContext;
export default CreateIdea;








