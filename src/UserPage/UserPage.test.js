import React from 'react';
import ReactDOM from 'react-dom';
import UserPage from './UserPage';
import TestContext from './TestContext'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<TestContext.Provider value={{ ideas: ideas}}>
    <UserPage />
  </TestContext.Provider>, div);

  ReactDOM.unmountComponentAtNode(div);
});