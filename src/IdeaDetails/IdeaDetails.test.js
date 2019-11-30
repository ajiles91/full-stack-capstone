import React from 'react';
import ReactDOM from 'react-dom';
import IdeaDetails from './IdeaDetails';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <TestContext.Provider value={{ ideas: ideas}}>
    <IdeaDetails />,
    </TestContext.Provider> div);
  ReactDOM.unmountComponentAtNode(div);
});