import React from 'react';
import { Route, Switch } from 'react-router-dom'
import UserPage from './UserPage'
import Header from './Header'
import IdeaList from './IdeaList';
import CreateIdea from './CreateIdea'
import IdeaDetails from './IdeaDetails'

function App({dummyIdeas}) {
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
        <Route 
          path='/create-idea' 
          component={CreateIdea}
        />
        

        <Route />
      </Switch>
    </div>
  );
}

export default App;