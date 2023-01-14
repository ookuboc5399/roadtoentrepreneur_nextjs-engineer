import { VFC } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const Home: VFC = () => {
  return <h2>Home</h2>;
}

const About: VFC = () => {
  return <h2>About</h2>;
}

const Users: VFC = () => {
  return <h2>Users</h2>;
}

const App: VFC = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/users'>
            <Users />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

