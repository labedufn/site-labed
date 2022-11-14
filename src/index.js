import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './views/css/style.css'
import Main from './views/main'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Main} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))