import React from 'react'
import { createBrowserHistory } from 'history'
import { Provider } from 'mobx-react'
import { Router, Route, Switch } from 'react-router-dom'

import { stores } from 'stores'
import { Home } from 'pages'

const history = createBrowserHistory()

class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
