import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/about";
import Profile from "./components/profile";
import NotFound from "./components/not_found";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route index path='/' component={Home} />
				<Route exact path='/about' component={About} />
				<Route exact path='/contact' component={Contact} />
				<Route exact path='/profile/:profile_id' component={Profile} />
				<Route path='*' component={NotFound} />
			</Switch>
		</Router>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));