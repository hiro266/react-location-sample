import React from 'react';
import { Router, Outlet, Link } from '@tanstack/react-location';
import { routes, location } from './Router';
import './App.css';


const App = () => {
  return (
    <Router routes={routes} location={location}>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="posts">Posts</Link>
          </li>
        </ul>
      </div>
      <Outlet /> {/* パスが一致した際にレンダリングされるコンポーネント */}
    </Router>
  );
}

export default App;
