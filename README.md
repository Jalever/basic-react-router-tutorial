# Basic React-Router-Tutorial

## Installation
> ### react-router<br/>
> &ensp;&ensp;provides the core routing components and functions for React Router applications.
> ### react-router-dom<br/>
> &ensp;&ensp;provide environment specific of browser
> ### react-router-native<br/>
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
    <tbody>
        <tr style="border:1px solid #000;text-align:center;">
            <td style="border:1px solid #ccc;text-align:center;">URL</td>
            <td style="border:1px solid #ccc;text-align:center;">the matched part of the current location&#39;s pathname</td>
        </tr>
        <tr>
            <td style="border:1px solid #ccc;border-collapse:collapse;text-align:center;">path</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;text-align:center;">the route&#39;s path</td>
        </tr>
        <tr>
            <td style="border:1px solid #ccc;border-collapse:collapse;text-align:center;">&#32;isExact&#32;</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;text-align:center;">path === pathname</td>
        </tr>
        <tr>
            <td style="border:1px solid #ccc;border-collapse:collapse;text-align:center;">params</td>
            <td style="border:1px solid #ccc;border-collapse:collapse;text-align:center;">an object containing values from the pathname that were captured by path-to-regexp</td>
        </tr>
    </tbody>
</table>

## Creating our routes
> The &#60;Route&#62; component is the main building block of React Router.<br/>
> Anywhere that you want to only render content based on the location’s pathname, you should use a &#60;Route&#62; element.
> You can use the &#60;Switch&#62; component to group &#60;Route&#62;s.<br/>
> The &#60;Switch&#62; will iterate over its children elements &#40;the routes&#41; and only render the first one that matches the current pathname.<br/>
> In order to match a path in our application, all that we have to do is create a &#60;Route&#62; element with the path prop we want to match.<br/>
```
<Switch>
	<Route exact path="/" component={Home} />
	<Route path="/roster" component={Roster} />
	<Route path="/schedule" component={Schedule} />
</Switch>
```

## What does the &#60;Route&#62; render?
> Routes have three props that can be used to define what should be rendered when the route’s path matches.<br/>
Only one should be provided to a &#60;Route&#62; element.<br/>
> ### component<br/>
> &ensp;&ensp;A React component. When a route with a component prop matches, the route will return a new element whose type is the provided React component &#40;created using React.createElement&#41;.<br/>
> ### render<br/>
> &ensp;&ensp;A function that returns a React element 5. It will be called when the path matches. This is similar to component, but is useful for inline rendering and passing extra props to the element.<br/>
> ### children<br/>
> &ensp;&ensp;A function that returns a React element. Unlike the prior two props, this will always be rendered, regardless of whether the route’s path matches the current location.<br/>
```
<Route path='/page' component={Page}/>

const extraProps = { color: 'red' }
<Route path='/page' render={ (props) => ( 
	<Page {...props} data={ extraProps }/>
)}/>

<Route path='/page' children={ (props) => ( props.match ? <Page {...props}/> : <EmptyPage {...props}> ) }/>
```
> The children prop can be useful occasionally, but typically it is preferable to render nothing when the path does not match.
> The element rendered by the &#60;Route&#62; will be passed a number of props.
> These will be the match object, the current location object, and the history object &#40;the one created by our router&#41; 

## Nested Routes
```
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
```
> ### &#47;roster&#47;:number<br/>
> &ensp;&ensp;This route uses a path param to capture the part of the pathname that comes after /roster.
It can be useful to group routes that share a common prefix in the same component.<br/>

## Path Params
> Sometimes there are variables within a pathname that we want to capture. 
> For example, with our player profile route, we want to capture the player’s number. We can do this by adding path params to our route’s path string.
> The <strong>:number</strong> part of the path <strong>/roster/:number</strong> means that the part of the pathname that comes after <strong>/roster/</strong> will be captured and stored as <strong>match.params.number</strong>. For example, the pathname <strong>/roster/6</strong> will generate a params object:
```
{ number: '6' } //note that the captured value is a string
```

## Links
> our application <ins>needs a way to navigate between pages</ins>. If we were to create links <ins>using anchor elements</ins>, clicking on them <ins>would cause the whole page to reload</ins>. 
> React Router provides a &#60;Link&#62; component to prevent that from happening. 
> When clicking a &#60;Link&#62;, the URL will be updated and the rendered content will change without reloading the page.
> &#60;Link&#62;s use the to prop to describe the location that they should navigate to. 
> This can either be a string or a location object &#40;containing a combination of pathname, search, hash, and state properties&#41;. 
> When it is a string, it will be converted to a location object. 


 








