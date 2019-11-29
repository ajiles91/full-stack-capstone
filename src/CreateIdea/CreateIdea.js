import React, { Component } from "react";
import { Link, Redirect, BrowserRouter } from "react-router-dom";
import FormContext from "../FormContext";
import config from '../config'
import './CreateIdea.css'


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
    
    .then(response => response.json())
    .then(json => console.log(json))
    .then(()=>this.props.updateClaimedOnMainPage())
  
  }

  render() {
    if (this.state.submitted === true) {
      return <Redirect to="/" />;
    }

    return (
      <div className="whole-page">
        <section className='whole-form'>
          
            <form className="submit-idea" onSubmit={this.handleSubmit}>
              
                <legend>
                  Create a new idea here! Please provide as much information for your
                  summary for collaborators know how to help you.
                </legend>
              
                <div>
                  <label htmlFor="idea-name">Idea Name</label>
                  <input
                    type="text"
                    value={this.state.ideaName}
                    onChange={this.handleChange}
                    name="ideaName"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="idea-summary">Idea Summary</label>
                  <textarea
                    value={this.state.ideaSummary}
                    rows="15"
                    cols="43"
                    onChange={this.handleChange}
                    name="ideaSummary"
                    required
                  />
                </div>

                <div className="author-name-container">
                  <label htmlFor="contact-info">Author Name</label>
                  <input
                    type="text"
                    name="authorName"
                    value={this.state.authorName}
                    onChange={this.handleChange}
                    required
                  />
                </div>

                <div className="contact-info-container">
                  <label htmlFor="contact-info">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className='button-wrapper'>
                  <button type="submit">Submit</button>
                  <BrowserRouter>
                    <Link to='/'>
                      <button>Back To Idea List</button>
                    </Link>
                  </BrowserRouter>
                  
                </div>
                
              
            </form>
          </section>
        
      </div>
    );
  }
}
CreateIdea.contextType = FormContext;
export default CreateIdea;








