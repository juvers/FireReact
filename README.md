## Available Scripts

In the project directory, you can run:

### `Modules`
- Install fire base <br>
`npm install --save firebase`

### `Utility Files`

- Create a firebase config file in src and include all config obtained from [google firebase console](https://console.firebase.google.com/project/react-base-82c7b/database/firestore/data~2Fboards~2Fc8MaJGtUus0UxZHzpYZd)

### `Routing`
`npm i --save react-router-dom`<br>
- Include react-router-dom as ff in the root file - index.js:
`import {BrowserRouter as Router, Route } from 'react-router-dom'` <br>

- Include files of paths as ff:
`import Edit from './component/Edit';`
`import App from './App';`

Router will wrap all Routes as ff:
> `ReactDOM.render(
  <Router>
     <div>
        <Route exact path='/' component={App} />
        <Route path='/edit/:id' component={Edit} />
      </div>
  </Router>,
  document.getElementById('root')
);`

- To use anchors at navigation import Link
`import { Link } from 'react-router-dom';`

-To use the Link for anchoring in markup 
`<h3><Link to="/edit">Navigation to edit</Link></h3>`

### `Using Bootstrap`

- Install Bootstrap as a dev dependency
`npm i --save-dev bootstrap

- Include bootstrap css in the root file - index.js as ff:
`import '../node_modules/bootstrap/dist/css/bootstrap.min.css'`
