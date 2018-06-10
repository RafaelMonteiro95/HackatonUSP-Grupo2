import React, { Component } from 'react';
import { Footer, Navbar, NavItem } from 'react-materialize';
import { Route, HashRouter, NavLink } from 'react-router-dom';

import Dashboard from './Dashboard';

class Main extends Component {
  render() {
    return (
		<HashRouter>    			
		    <div className="wrap">
		    	<header>
		    		<Menu/>
	    		</header>
		    	<main style={{width: '70%'}} className='container'>
		    		<Route exact path="/dashboard" component={Dashboard} />
		    	</main>
		    	<footer>
			    	<PageFooter/>
			    </footer>
	    	</div>
    	</HashRouter>
    );
  }
}

class ResponsiveLogo extends Component {
	render() {
		return(
			<NavLink to='/'> <img id='logo' src='stu_very_large.png' alt="Loading" style={{maxHeight: '100px'}}/> </NavLink>
		);
	}
}

const Menu = () => (
	<Navbar className="cyan darken-1" brand={<ResponsiveLogo/>} style={{height: '100px'}}>
		{/*<NavLink exact to="/dashboard"><NavItem>Dashboard</NavItem></NavLink>*/}
	</Navbar>
);
 
const PageFooter = () => (
	<Footer
		className="grey darken-4"
		copyrights="HackathonUSP 2018.1"
		moreLinks={
			<a className="grey-text lighten-1 right" href="https://github.com/RafaelMonteiro95/HackatonUSP-Grupo2">GitHub</a>
		}
	>	
		<h5 className="grey-text lighten-1">Time #2</h5>
		<p className="grey-text lighten-1">Felipe Sibuya | Letícia Rina | Rafael Monteiro</p>
	</Footer>
);

export default Main;
