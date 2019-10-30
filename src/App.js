import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import UserPage from "./UserPage";
import CreateIdea from "./CreateIdea";
import IdeaDetails from "./IdeaDetails";

import FormContext from "./FormContext";
import config from './config'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: [],
    }
  }
 
  componentDidMount(){
    fetch(`${config.API_BASE_URL}`)
    .then(response => response.json())
    .then(json => {
      console.log('result:', json);
      this.setState({
        ideas: json
      })
     
    })
  }
  
  
  render() {
    return (
      <div>
        <FormContext.Provider value={{ ideas: this.state.ideas}}>
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