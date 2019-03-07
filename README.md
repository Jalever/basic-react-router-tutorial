# Basic React-Router-Tutorial

## Installation
> ##### react-router<br/>
> &ensp;&ensp;provides the core routing components and functions for React Router applications.
> ##### react-router-dom<br/>
> &ensp;&ensp;provide environment specific of browser
> ##### react-router-native<br/>
> &ensp;&ensp;provide environment specific of React Native

## The Router
> Browser based projects, there are &#60;BrowserRouter&#62; and &#60;HashRouter&#62; components.<br/>
> The &#60;BrowserRouter&#62; should be used when you have a server that will handle dynamic requests &#40;knows how to respond to any possible URI&#41;<br/>
> while the &#60;HashRouter&#62; should be used for static websites &#40;where the server can only respond to requests for files that it knows about&#41;

## History
> Each router creates a history object, which it uses to keep track of the current location and re-render the website whenever that changes.<br/>
> A React Router component that does not have a router as one of its ancestors will fail to work

## Rendering a &#60;Router&#62;
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

## Routes
> The &#60;Route&#62; component is the main building block of React Router.<br/>
> Anywhere that you want to only render content based on the location’s pathname, you should use a &#60;Route&#62; element.

## Path
> A &#60;Route&#62; expects a path prop, which is a string that describes the pathname that the route matches — for example, &#60;Route path='/roster'/&#62; should match a pathname that begins with /roster.<br/>
> When the current location’s pathname is matched by the path, the route will render a React element.
> When the path does not match, the route will not render anything
```
	<Route exact path="/" component={Home} />
	<Route path="/roster" component={Roster} />
	<Route path="/schedule" component={Schedule} />
```
> When it comes to matching routes, React Router only cares about the pathname of a location. That means that given the URL: http://www.example.com/my-projects/one?extra=false The only part that React Router attempts to match is <ins>&#47;my-projects&#47;one</ins>.

## Matching paths
> React Router uses the path-to-regexp package to determine if a route element’s path prop matches the current location.<br/>
> When the route’s path matches, a match object with the following properties will be created:

<table style="border:1px solid #ccc;border-collapse:collapse;text-align:center;">
    <thead>
        <tr style="border:1px solid #000">
            <td style="border:1px solid #ccc">URL</td>
            <td style="border:1px solid #ccc">the matched part of the current location&#39;s pathname</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border:1px solid #ccc;border-collapse:collapse;">path</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;">the route&#39;s path</td>
        </tr>
        <tr>
            <td style="border:1px solid #ccc;border-collapse:collapse;">&#32;isExact&#32;</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;">path === pathname</td>
        </tr>
        <tr>
            <td style="border:1px solid #ccc;border-collapse:collapse;">params</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;">an object containing values from the pathname that were captured by path-to-regexp</td>
        </tr>
    </tbody>
</table>
















