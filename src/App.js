import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import UserPage from "./UserPage";
import CreateIdea from "./CreateIdea";
import IdeaDetails from "./IdeaDetails";
import dummyIdeas from "./dummyIdeas";
import FormContext from "./FormContext";
import config from './config'


export default class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   ideaName: "",
    //   ideaSummary: "",
    //   authorName: "",
    //   email: ""
    // };
    this.state = {
      ideasTest: [],
    }
    this.ideas = dummyIdeas;
    this.ideaDataFromForm = this.ideaDataFromForm.bind(this);
  }

  ideaDataFromForm = data => {
   
     
    this.ideas.push(data);
    console.log(data)
    
  };

 
  componentDidMount(){

    fetch(`${config.API_BASE_URL}`)
    .then(response => response.json())
    // .then(json => console.log(json[1].ideaname))
    .then(json => this.setState({
      
      ideasTest: JSON.this.state.ideasTest.push(json)
      
    })
    )
    console.log(this.state.ideasTest)
    
  }
  

  

  render() {
    return (
      <div>
        <FormContext.Provider value={{ ideas: this.ideas }}>
          {/* <Header /> */}
          <BrowserRouter>
            <Switch>
              <Route path="/" exact 
              render={props => <UserPage />} />
              <Route
                path="/idea/:id"
                render={props => <IdeaDetails {...props} />}
              />
              <Route
                path="/idea"
                render={props => (
                  <CreateIdea ideaDataFromForm={this.ideaDataFromForm} />
                )}
              />
            </Switch>
          </BrowserRouter>
        </FormContext.Provider>
      </div>
    );
  }
}