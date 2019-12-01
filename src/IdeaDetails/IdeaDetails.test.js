import React from 'react';
import ReactDOM from 'react-dom';
import IdeaDetails from './IdeaDetails';
// import UserPageTestContext from './UserPageTestContext'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <IdeaDetails />
    </BrowserRouter>
  
  
  , div);
  ReactDOM.unmountComponentAtNode(div);
});