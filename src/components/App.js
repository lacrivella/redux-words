import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import TopWords from '../containers/words/TopWords';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/words/:cout" component={TopWords} />
        <Route exact path="/" component={TopWords} />
      </Switch>
    </Router>
  );
}
