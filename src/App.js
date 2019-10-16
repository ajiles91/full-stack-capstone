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
  constructor(props){
    super(props)
    this.state = {
      ideaName: '',
      ideaSummary: '',
      authorName:'',
      email: '',
    }

  }

  ideaDataFromForm = (data) => {
    // console.log(data)
    data.id = (Math.random() * (100-11))+11;
    
    this.setState({
      ideaName: data.ideaName,
      ideaSummary: data.ideaSummary,
      authorName:data.authorName,
      email: data.email,
      isSubmitted: data.isSubmitted
    })
    console.log(this.state)
    
  }

  

  render() {
    
    console.log(this.state)
  return (
    <div>
      <FormContext.Provider value={{state: this.state, ideaDataFromForm:this.ideaDataFromForm}} >
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
       
          <Route 
            path='/create-idea' 
            render={(props) => <CreateIdea ideaDataFromForm={this.ideaDataFromForm}/> }
          />
      

        <Route />
      </Switch>
      
      </FormContext.Provider>
      </div>
    
  )
  };
}