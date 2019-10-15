import React,{ Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import UserPage from './UserPage'
import Header from './Header'
import IdeaList from './IdeaList';
import CreateIdea from './CreateIdea'
import IdeaDetails from './IdeaDetails'
import dummyIdeas from './dummyIdeas'
import FormContext from './FormContext';

export default class App extends Component {
  state = {
    ideaName: '',
    ideaSummary: '',
    authorName:'',
    email: '',
    dummyIdeas: dummyIdeas
  }

  // ideaDataFromForm = (data) => {
  //   console.log(data)
    
    
  //   this.setState({
  //     ideaName: data.ideaName,
  //     ideaSummary: data.ideaSummary,
  //     authorName:data.authorName,
  //     email: data.email,
  //     isSubmitted: data.isSubmitted
  //   })
    
  //   return data
  // }

  render() {
  return (
    <div>
      <Header />
      <Switch>
        <Route 
          path='/' 
          exact
          render={(props) => <UserPage {...props} dummyIdeas={dummyIdeas} /> }
        />
        <Route 
          path='/ideas' 
          render={(props) => <IdeaList {...props} dummyIdeas={dummyIdeas} /> }
        />
        <Route 
          path='/idea/:id' 
          render={(props) => <IdeaDetails {...props} dummyIdeas={dummyIdeas} /> }
        />
        <FormContext.Provider>
          <Route 
            path='/create-idea' 
            component={CreateIdea}
          />
        </FormContext.Provider>
        

        <Route />
      </Switch>
    </div>
  )
  };
}