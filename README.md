# Basic React-Router-Tutorial

#### Installation
> ##### react-router<br/>
> &ensp;&ensp;provides the core routing components and functions for React Router applications.
> ##### react-router-dom<br/>
> &ensp;&ensp;provide environment specific of browser
> ##### react-router-native<br/>
> &ensp;&ensp;provide environment specific of React Native

#### The Router
> Browser based projects, there are &#60;BrowserRouter&#62; and &#60;HashRouter&#62; components.<br/>
> The &#60;BrowserRouter&#62; should be used when you have a server that will handle dynamic requests &#40;knows how to respond to any possible URI&#41;<br/>
> while the &#60;HashRouter&#62; should be used for static websites &#40;where the server can only respond to requests for files that it knows about&#41;

#### History
> Each router creates a history object, which it uses to keep track of the current location and re-render the website whenever that changes.<br/>
> A React Router component that does not have a router as one of its ancestors will fail to work

#### Rendering a &#60;Router&#62;
> Router components only expect to receive a single child element.<br/>
```
ReactDOM.render((
	<BrowserRouter>
		<App />
	</BrowserRouter>),
	document.getElementById("root")
)
```

#### The &#60;App&#62;
> Our application is defined within the &#60;App&#62; component.<br/>
> The &#60;Header&#62; component will contain links to navigate throughout the website.<br/>
> The &#60;Main&#62; component is where the rest of the content will be rendered.<br/>
```
function App() {
	return(
		<div>
			<Header></Header>
			<Main></Main>
		</div>
	);
}
```

#### Routes
> The &#60;Route&#62; component is the main building block of React Router.<br/>
> Anywhere that you want to only render content based on the location’s pathname, you should use a &#60;Route&#62; element.

