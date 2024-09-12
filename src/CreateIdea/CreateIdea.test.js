import React from 'react';
import ReactDOM from 'react-dom';
import CreateIdea from './CreateIdea';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateIdea />, div);
  ReactDOM.unmountComponentAtNode(div);
});