//import logo from './logo.svg';
import './App.css';
import Dashboard from './dashboard/dashboard';
import Sidebar from './sidebar';
import Topbar from './topbar';
import { UserProvider } from "./userContext";

import {
  BrowserRouter as Router,
  Route,
  Switch
 } from "react-router-dom"
import UserList from './userlist';
import UserEdit from './useredit';
import UserCreate from './usercreate';


function App() {
  return (
    <Router>
    <div id="wrapper">
    <Sidebar></Sidebar>
    <UserProvider>
    <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
      <Topbar></Topbar>
      <div class="container-fluid">
        
          <Switch>
            <Route path="/dashboard" component={Dashboard} exact={true} />
            <Route path="/users" component={UserList} exact={true} />
            <Route path="/products" component={UserList} exact={true} />
            <Route path="/usercreate" component={UserCreate} exact={true} />
            <Route path="/useredit/:id" component={UserEdit} exact={true} />
          </Switch>
        
      </div>
    </div>
    </div>
    </UserProvider>
    </div>
    </Router>
  );
}

export default App;
