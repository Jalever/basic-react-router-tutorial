import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import { BrowserRouter,Switch,Route,Link } from "react-router-dom";

class FullRoster extends React.Component {
	render() {
		return(
			<div className="fullRosterpage">
				<h1>This is FullRoster pag33333333333e!</h1>
			</div>
		);
	}
}

function Player() {
	return(
		<div className="player-page">
			<h1>This is Player page!</h1>
		</div>
	);
}

function Roster() {
	return(
		<div>
			<h1>This is Roster page!</h1>
			<Switch>
				<Route exact path="/roster" component={FullRoster}/>
				<Route path="/roster/:number" component={Player}/>
			</Switch>
		</div>
	);
}

function Schedule() {
	return(
		<div>
			<p>This is Schedule Page!</p>
		</div>
	);
}

function Home() {
	return(
		<div className="homepage">
			<h3>This is Home Page!</h3>
	      	<ul className="clearUnderline">
		        <li>6/5 @ Evergreens</li>
		        <li>6/8 vs Kickers</li>
		        <li>6/14 @ United</li>
	      	</ul>
		</div>
	);
}


function Main() {
	return(
		<main>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/roster" component={Roster} />
				<Route path="/schedule" component={Schedule} />
			</Switch>
		</main>
	);
}

class Header extends React.Component {
	render() {
		return(
			<div className="header">
				<ul>
					<li><Link to="/" className="clearUnderline">Home</Link></li>
					<li><Link to="/roster" className="clearUnderline">Roster</Link></li>
					<li><Link to="/schedule" className="clearUnderline">Schedule</Link></li>
				</ul>
			</div>
		);
	}
}


function App() {
	return(
		<div>
			<Header></Header>
			<Main></Main>
		</div>
	);
}



ReactDOM.render((
	<BrowserRouter>
		<App />
	</BrowserRouter>),
	document.getElementById("root")
)