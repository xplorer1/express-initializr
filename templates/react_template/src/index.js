import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/about";
import Profile from "./components/profile";
import NotFound from "./components/not_found";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route index path='/' element={<Home/>} />
				<Route path='/about' element={<About/>} />
				<Route path='/contact' element={<Contact/>} />
				<Route path='/profile/:profile_id' element={<Profile/>} />
				<Route path='*' element={<NotFound/>} />
			</Routes>
		</Router>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);