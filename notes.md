# Introduction
## [[GitHub]]
### Merge Conflicts
Merge conflicts occur when the same line of code is edited in two different places and someone tries to pull those changes into their current branch. You can resolve this using the visual studio GUI tools and CLI tools.

Times it can occur:
- you make change to line 27. Line 27 has new change in github and you attempt to pull that change onto your local machine.
## HTML
- Use developer tools to inspect elements on a live webpage
- developer elements are not saved, they are stored client side so you will not be able to see the changes that you have made between refreshes of the webpage
- a [[bash]] script is used to deploy your web files to the live server.
## History of Web Programming
There are three main phases:
1. Formation of internet
2. creation of HTML and HTTP making it possible to shared hyperlinked documents (web 1.0)
3. Creation of CSS and Javascript enabling interactive web applications (web 2.0)

  

### Internet

- department of defense creates ARPANET to connect university researchers who are trying to share information for defense research (1970s)
    - created to protect the USA from nuclear attack
- (1980s) National Science Foundation expands network to allow commercial business to make contributions
- (1990s) consumer participation explodes
- (2000s) Phones and other internet enabled devices connect and expand the network
- internet is controlled by two organizations ICANN (Internet corportation for Assigned Names and Numbers (oversees IP address space and domain name system DNS)) and IETF (Internet Enginering task force)
- when the US government transitioned power to these organizations, the internet became "free" from political control
### HTML
- created by Tim Berners-Lee at research laboratory Cern
- created a system for allowing researchers to share documents between remote academic institutions based on Standard Generalized Markup Language (SGML)
- main innovation is that documents can be connected via hyperlinks
- started with 18 tags and has grown to over 100 tags
- controlled by W3C
#### Things learned
- `<h1>, <h2>, ...` tags have large spaces after them in documents.
### HTTP and URL
- [[HTTP]] and [[uniform resource locator (URL)]] define the way that documents are addressed and transferred over the internet
### CSS
- became standard in 1996
- version 2.1 removed all error and implemented compatibility between [[CSS]] syntaxes
- uses:
    - import fonts
    - animate HTML elements
    - respond to user actions
    - dynamically alter the entire layout of a page based on device size and orientation
### [[JavaScript]]
- NetScape decided to add the ability to script web pages
- Brendan Eich created the syntax and named it JavaScript
- in 1996 NetScape turned control of JS to ECMA Internation at which point it got the name ECMA script
- Proprietary wars followed and eventually vendors decided to merge together on ECMAScript 5 in 2009. Then in 2015, ECMAScript received its last major feature upgrade
#### JS Outside the browser
- 2009 Ryan Dahl creates Node.js to deploy JS outside the browser
- 2013, JSON is standardized and
- 2012, TypeScript is created

## AWS Servers
Use this command to ssh into your server `ssh -i [path to key file] ubuntu@[ip address]`. The elastic ip address for the server is 44.207.233.9.
Elastic IP addresses can be assigned using AWS to make sure that the server's IP address stays persistent throughout stops and starts of the server.

YOu are charged different rates for using different technologies. The larger the instance, the more power, but also the more money you will spend.

## Domain Names
- Using [[Route 53]] web service on [[Amazon Web Services (AWS)]] you can buy domain names
- Use the console program `whois` to see information for the registered domains
## Route 53
This is a service offered through [[Amazon Web Services (AWS)]] that helps you to get domain names and such.

When working with domain names and IP addresses, especially through AWS, give each step a little bit of time to process so that you don't spend extra time debugging something that isn't a problem.

### Map domain names to IP addresses
- purchase a domain name
- go to hosted zones
- add a record and paste the public IP address of your server into the value box.
- Press create record.

To create a record that maps all URLs that go to this domain, use the star wildcard in the subdomains box.

## [[Caddy]]
**What is a caddyfile?** This is a configuration for your web service gateway. Editing this file changes the configuration for the web services that your linux server uses.

### Functionalities
- handles creation and rotation of [[web certificate]]s allowing us to support HTTPS
- serves up all of your static HTML, CSS, and JavaScript files.
### Important Files
- Caddyfile - is the configuration for how Caddy does your routing. This shows where the static HTML webpages are loaded from and also proxies requests into the services that you create.
- `~/public_html` is where all your static HTML files are stored that are then routed with Caddy. Any requests to get files from your server will look in this directory

### Running caddy
to Run caddy as a daemon, use command `caddy run`

### More Info
Caddy uses [[Let's Encrypt]] to generate a [[web certificate]] every time an HTTPS request is made that Caddy doesn't have a web certificate for. When this happens Caddy asks [[Let's Encrypt]] to verify that the domain for the requested certificate is actually owned by the requester. [[Let's Encrypt]] does that by telling the requester to return a specific digitally signed response for a temporary URL when an [[HTTP]] request to the domain is made. [[Let's Encrypt]] then makes the [[HTTP]] request, and if successful, issues the certificate to the requester.

### Setting up Caddy to Allow HTTPS for your server
Modify the Caddyfile so that the port number is replaced with your domain name and replace all instances of yourdomainnamehere with your actual domain name.

## HTTPS and TLS
The [[Transport Layer Security (TLS)]] protocol ensures that all data being exchanged over an HTTP connection is secure by encrypting all of the data.

TLS works by negotiating a shared secret that is then used to encrypt data.

### Web Certificates
files that authenticate a website's identity and enable and encrypted connections. They are issued by a trusted third party called a certificate authority.

### Let's Encrypt
A Mozilla created non-profit that broke the monopoly that certificate providers had on the market. This happened in 2014. God bless Mozilla.

Pioneered the IETF Standard [[Automatic certificate management environment (ACME) Protocol]]
## Editors
### [[Vim]]

| keystroke | meaning    |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `:h`      | help   |
| `i`       | enter insert mode. This will allow you to type and delete text. Use ESC to exit insert mode. No other commands will work while in insert mode. |
| `u`       | undo   |
| `CTRL-r`  | redo         |
| `gg`      | go to beginning of file     |
| `G`       | go to end of file   |
| `/`       | search for text that you type after /   |
| `n`       | next search match   |
| `N`       | previous search match   |
| `v`       | visually select text  |
| `y`       | yank or copy selected text to clipboard  |
| `p`       | paste clipboard    |
| `CTRL-wv` | Split window vertically   |
| `CTRL-ww` | Toggle windows  |
| `CTRL-wq` | Close current window  |
| `:e`      | Open a file. Type ahead available. If you open a directory you can navigate it in the window    |
| `:w`      | write file (save)   |
| `:q`      | quit. Use `:q!` to exit without saving     |

  

# HTML
The entity character is the `&` and you can use it to escape commonly used symbols in HTML.

## HTML Versions
- 1990 - HTML1 - format tags
- 1995 - HTML2 - tables, internationalization
- 1997 - HTML3 - MathML, CSS, frame tags
- 1999 - HTML4 - external CSS
- 2014 - HTML5 - email, password, media, and semantic tags

## index.html
this is the default html doc that will be displayed by a web browser when a request is made without a specific file requested.

## tags

Here is an example of an `<img>` tag:

```

<img src="https://cms-z-assets.familysearch.org/53/20/3827b50548c7aa45405ce2d6bf21/tiny-world-large-resource.png">

```

  

# CSS

## Selectors
these select items in an html file and give them appearance properties.
```

p {

  text-align: center;

  color: red;

}

```
This selector selects every `<p>` item in the html file and gives it the properties outlined.

If two styles apply to the same [[HTML]] element, the style with a higher specificity will be applied to the object.

### Types of selectors
- universal (star) selector
- id selector
- class selector
- grouping selector
- type selector
- combinator

### Combinators
Types:
- descendent = `tag tag`
- child = `tag > tag` implies that any tag is a direct child of another section
- general sibling = `div ~ p` any p that has a div sibling
- adjacent sibling = `div + p` any p that has an adjacent div sibling

#### Descendent combinator
These allow us to change the styling for something like the following case: I want to change the style of headings but only when they are situated within a div.
```

div h2 {

  ...

}

```

  

### Class selector
Select all items of a class: `.className`
Select all p items of a particular class: `p.className`

### ID Selector
Select item with ID: `#myID`

### Attribute selector
Select all p with attribute: `p[class='summary']`

### Pseudo Selector
Pseudo selectors are used to select items in HTML based on mouse clicks, hovering, positional relationships and other things. You use them by specifying a selector and then using a `:` next to it with the pseudo selector following it.
```

section:hover {

  ...

}

```

## Responsive Design
Makes use of the viewport meta tag and ideas like [[CSS Flex]]. This way, the webpage will always look good no matter what display it is on.

### display
This property allows you to decide how an [[HTML]] element is displayed by the browser, enabling some cool behavior.

  

| Value  | Meaning  |
| ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| none   | Don't display this element. The element still exists, but the browser will not render it.                                    |
| block  | Display this element with a width that fills its parent element. A `p` or `div` element has block display by default.        |
| inline | Display this element with a width that is only as big as its content. A `b` or `span` element has inline display by default. |
| flex   | Display this element's children in a flexible orientation.|
| grid   | Display this element's children in a grid orientation. |

  

#### grid
to specify the number of columns that your grid layout will have, add numerical declarations after
`grid-template-columns: 1fr` makes one column,
`grid-template-columns: 1fr 1fr` makes two columns
`grid-template-columns: 1fr 1fr 1fr` makes three columns

  

#### float property
allows things to wrap around it and for the box to gravitate towards one side of the page.  

### viewport tag
Include this in the head element of your [[HTML]] page:
```html

<meta name="viewport" content="width=device-width,initial-scale=1" />

```

### Media Query
uses the `@` symbol to do certain things based on certain conditions. For example if we want the menu to drop when the viewport is small, we can make a media query to handle that.
```css

@media (orientation: portrait) {

  aside {

    display: none;

  }

}
```

# JavaScript
- The [[document object model (DOM)]] is an object rep of the [[HTML]] elements that browsers use to render the display
- access the DOM through the `document` object
- each HTML element is a node in the DOM
- You can use [[CSS Selectors]] to access items in the DOM
- To create a new element
	- create element on DOM document
	- insert the element into the DOM tree by appending it to an existing element in the tree
- `innerHTML` allows you to inject [[HTML]] into the DOM objects you create.
	- this is a common attack method for hackers
	- to protect against this:
		- sanitize all [[HTML]] that contains variables
		- use DOM manipulation functions instead of using `innerHTML`
- The `map` function behaves like a linear transformation in MATH 413. The map function creates a new array from an existing one by specifying a function by which to transform the elements in the array.

## functions
functions can be strict or non-strict. strict functions only have simple parameters
### parameters
- simple parameters are those that are not **rest**, **default**, or **destructured** parameters.
### functions vs. methods
Functions are designed to perform a task given some inputs. Methods are designed to do the same but are characteristically tied to an object.
### arrow function syntax
- you can use rest syntax with these, but parentheses are needed
- if you only have a simgle simple parameter to the function, you can omit the parentheses for the arrow function. For example:
```js
(a) => {
  return a + 100;
};

(a) => a + 100;

a => a + 100;
```
- each of the above functions are equivalent to each other
## Event Listeners
| Event Category | Description           |
| -------------- | --------------------- |
| Clipboard      | cut copy pasted       |
| Focus          | an element gets focus |
| Keyboard       | keys are pressed      |
| Mouse          | click events          |
| Text Selection | when text is selected |

## Local Storage in [[JavaScript]]
- You can use the `localStorage` API to persistently share and retrieve data on a users browser across user sessions and [[HTML]] page renderings.
- To retrieve an item from localStorage:
```js
const session = JSON.parse(localStorage.getItem('supabase_session'));
```

- This API is also used as a cache for when data cannot be obtained from the server.
- local storage values must be strings, numbers or booleans, Objects must be converted to [[JSON]] strings before being stored.
- Below are the primary methods for setting and retrieving information
## [[JavaScript Promise]] 
A promise is always in one of three states:
1. pending
2. fulfilled
3. rejected

Creating a promise takes two functions as parameters.
### Then, catch, finally
- `finally` is the last thing to be done in the callback chain
- `then` is the next progressive step in the callback chain
- `catch` is the error handling function of the callback chain.
# Midterm Questions
- In the following code, what does the `<link>` element do? :: creates a link between the current document and other external resources.
- In the following code,  what does a `<div>` tag do? :: it creates an arbitrary division in your code that you can use for the purposes of structuring elements.
- In the following code, what is the difference between the `#title` and `.grid` selector? :: one is a id selector and the other is class selector
- In the following code, what is the difference between padding and margin? :: padding is the space inside a container that surrounds it's contents. Margins are the space around the container controlling how it is spaced in relation to other elements
- Given this [[HTML]] and this [[CSS]] how will the images be displayed using [[CSS Flex]]?
- What does the following padding [[CSS]] do?
- What does the following code using arrow syntax function declaration do?
- What does the following code using `map` with an array output?
- What does the following code output using `getElementByID` and `addEventListener`?
- What does the following line of [[JavaScript]] do using a `#` selector? :: it selects an object based on it's `id`

- Which of the following are true? (mark all that are true about the [[document object model (DOM)]])
	- [[JavaScript]] can 
		- change all [[HTML]] elements in the page
		- change all [[HTML]] attributes in the page
		- change all all [[CSS]] styles in the page
		- remove existing [[HTML]] elements and attributes
		- add new [[HTML]] elements and attributes in the page
		- can react to all existing [[HTML]] events in the page
		- create new [[HTML]] events in the page
	- the DOM is accessed trhough a global variable name `document` that points to the root of the DOM.
	- Every [[HTML]] element in a document implements the DOM interface which is derived from the DOM Node interface
	- To create a new DOM element
		1. first create the element in the DOM document i.e. `document.createElement('div')`
		2. append the new element to an existing element in the DOM tree
	- to delete an element, you select the element using querySelector or by id and then delete it by calling `removeChild(element)` on the parent of the element`

- By default, the [[HTML]] span element has a default [[CSS]] display property value of :: inline

- How would you use [[CSS]] to change all the `div` elements to have a background color of red?
?
```CSS
div {
	background-color: red;
}
```

- How would you display an image with a hyperlink in [[HTML]]?
?
place the [[uniform resource locator (URL)]] in the `src` attribute of the `img` tag

- In the [[CSS]] box model, what is the ordering of the box layers starting at the inside and working out? :: box --> padding --> border --> margin
- Given the following [[HTML]], what [[CSS]] would you use to set the text "trouble" to green and leave the "double" text unaffected?
- What will the following code output when executed using a for loop and `console.log`?
- How would you use [[JavaScript]] to select an element with the id of “byu” and change the text color of that element to green? :: `document.getElementById("byu").style.color = "green";`
- What is the opening [[HTML]] tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading? :: `<p>, <ol>, <ul>, <h1>, <h2>, <h3>`
- How do you declare the document type to be html? :: `<!DOCTYPE html>`

- What is valid [[JavaScript]] syntax for if, else if, else statements?
?
```js
if (statement) {
	// do something
} else if (anotherStatement) {
	// do something else
} else {
	// do something really else
}
```

- What is valid [[JavaScript]] syntax for `for` loop and `while` loop?
?
```js
/*
 * for (initialization; condition; afterthought) {
 *     statement
 * }
 */
 for (let i = 0; i < array.length; i++) {
	 console.log(i);
 }

/*
 * while (statement) {
 *     action
 * }
 */
 while (true) {
	 console.log("while I am doing this I feel that");
 }
```

- What is valid [[JavaScript]] syntax for switch statements?
?
```js
/*
 * switch (expression) {
 *     case alternativeExpression1:
 *         do something
 *     case alternativeExpression2:
 *         do something else
 *     case alternativeExpression3:
 *         do something really else
 *     default:
 *         do something that feels default
 * }
 */
const expr = 'Papayas';
switch (expr) {
	case 'Oranges':
	    console.log('Oranges are $0.59 a pound.');
	    break;
	case 'Mangoes':
	case 'Papayas':
	    console.log('Mangoes and papayas are $2.79 a pound.');
	    // Expected output: "Mangoes and papayas are $2.79 a pound."
	    break;
	default:
		console.log(`Sorry, we are out of ${expr}.`);
}
```



- What is the correct syntax for creating a [[javascript]] object?
?
```js
const obj = {
	key: "value",
	key1: "value"
}
```

- Is it possible to add new properties to [[javascript]] objects? :: not technically
- If you want to include [[JavaScript]] on an [[HTML]] page, which tag do you use? :: `<script>`
- Given the following [[HTML]], what [[JavaScript]] could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
- Which of the following correctly describes [[JSON]]? :: JavaScript object notation
- What does the console command `chmod`, `pwd`, `cd`, `ls`, `vim`, `nano`, `mkdir`, `mv`, `rm`, `man`, `ssh`, `ps`, `wget`, `sudo` do?
	- `chmod` - changes permissions of file
	- `pwd` - prints working directory
	- `cd` - changes current directory
	- `ls` - lists directory contents
	- `vim` - opens vim
	- `nano` - opens nano
	- `mkdir` - makes a new directory
	- `mv` - moves/renames a file
	- `rm` - removes a file(s)
	- `man` - opens the man page for a particular command given as input
	- `ssh` - allows a secure shell connection to be made between your computer and another
	- `ps` - shows all runnig processes on the computer
	- `wget` - GNU Wget is a free utility for non-interactive download of files
       from the Web.  It supports [[HTTP]], HTTPS, and FTP protocols, as
       well as retrieval through HTTP proxies.
       `sudo` - allows a permitted user to execute a command as the superuser or another user

- Which of the following console command creates a remote shell session? :: `ssh`
- Which of the following is true when the -la parameter is specified for the ls console command? :: `-a` flag specifies to print all results to terminal, the `-l` flag means use a long listing format for the output.
- Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain? ::
- Is a web certificate is necessary to use HTTPS. :: yes
- Can a [[domain name system (DNS)]] A record point to an [[Internet Protocol (IP)]] address or another A record? :: it can only point to an IP address
- Port 443 is reserved for which protocol? :: HTTPS
- Port 80 is reserved for which protocol? :: HTTP
- Port 22 is reserved for which protocol? :: SSH
- What will the following code using Promises output when executed?


# hooks
hooks enable you to "hook" into react features like state management, navigation and more.
# state
whn you need to create a state variable, you use this syntax
```jsx
const [outlook, setOutlook] = React.useState("beautiful");
```
The variable outlook is now the variable that holds the state and the function setOutlook is the function that tells the React [[document object model (DOM)]] when to update the state.

# React [[routing|Router]]
## setup
to set up the router, you just have to import the router that matches your application type and then wrap your entire application in that router component like so:
```jsx
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
```
## defining routes
this is generally done at the top level of your application such as in the app component, but can be done anywhere you want. Observe:
```jsx
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { BookList } from "./BookList"

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<BookList />} />
    </Routes>
  )
}
```
Whenever your [[uniform resource locator (URL)]] changes, React Router will look at the routes defined in your `Routes` component and it will render the content in the `element` prop of the `Route` that has a `path` that matches the URL. In the above example if our URL was `/books` then the `BookList` component would be rendered.

## handling navigation
React uses it's own `<Link/>` component to handle navigation.
```jsx
import { Route, Routes, Link } from "react-router-dom"
import { Home } from "./Home"
import { BookList } from "./BookList"

export function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
      </Routes>
    </>
  )
}
```
So now that there are link elements defined for each of the Route elements in the [[document object model (DOM)]], we we can access the routes that we have previously defined.
### `<Link/>` navigation
links can do absolute navigation or relative path navigation.
#### props
- `replace`If you click on a link that goes to the `/books/3/edit` page but it has the `replace` property set to `true` your new history will look like this.
- `reloadDocument` If it is set to `true` your `Link` component will act like a normal anchor tag and do a full page refresh on navigation instead of just re-rendering the content inside your `Routes` component.
- `state` This prop lets you pass data along with your `Link` that does not show up anywhere in the [[uniform resource locator (URL)]].
#### `NavLink`
the navlink component works similar to the Link component except you
### manual navigation
use the `useNavigate()` hook to assign a variable to a navigate function. then you can pass it data. refer to the docs for usage information.
### navigation data
You can pass data using
1. dynamic parameters
2. search parameters - this is all of hte data that comes after the `?` in a [[uniform resource locator (URL)]]. You can parse these using the `useSearchParams` hook with is very similar to the `useState` hook.
3. state/location data - use the `useLocation` hook. This takes no parameters and returns a single object return value.
## [[Advanced Routing with React]]
### 1. Dynamic Routing
To create a dynamic route, do something like is shown in this example:
```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/books" element={<BookList />} />
  <Route path="/books/:id" element={<Book />} />
</Routes>
```
Then anything after the route books will still route to the books route, but we will have new data to work with.

Now we can access that data with `useParams`.
```jsx
import { useParams } from "react-router-dom"
export function Book() {
	const { id } = useParams();
	return <h1>Book {id}</h1>
}
```
### 2. Routing priority
Routing priority is an idea similar to [[polymorphism]] in that if we have dynamic routes and other routes that could match a dynamic route, it will take the one that is the most specific and apply that to the routing logic.
### 3. Nested routes
Nested routes allows you to put routes within routes, basically giving sub routes, kinda similar to the work you did with [[Java Spring Boot]] at texas instruments where you could have nested [[MVC (Model View Controller)|controllers]] that handled subroutes of larger controllers.

> [!QUOTE]
> Let’s imagine that we want to render a nav section with links to each book as well the new book form from any of our book pages. To do this normally we would need to make a shared component to store this navigation and then import that into every single book related component. This is a bit of a pain, though, so React Router created its own solution to solve this problem. If you pass an `element` prop to a parent route it will render that component for every single child `Route` which means you can put a shared nav or other shared components on every child page with ease.

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/books" element={<BooksLayout />}>
    <Route index element={<BookList />} />
    <Route path=":id" element={<Book />} />
    <Route path="new" element={<NewBook />} />
  </Route>
  <Route path="*" element={<NotFound />} />
</Routes>

import { Link, Outlet } from "react-router-dom"

export function BooksLayout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/books/1">Book 1</Link>
          </li>
          <li>
            <Link to="/books/2">Book 2</Link>
          </li>
          <li>
            <Link to="/books/new">New Book</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}
```
Now this new code states that if we match on the `/book` route it will render the BooksLayout component which contains our shared navigation components.

Thus the `element` property is super powerful because it allows the nested routing to get it's power.
### 4. Multiple routes
```jsx
import { Route, Routes, Link } from "react-router-dom"
import { Home } from "./Home"
import { BookList } from "./BookList"
import { BookSidebar } from "./BookSidebar"

export function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
        </ul>
      </nav>

      <aside>
        <Routes>
          <Route path="/books" element={<BookSidebar />}>
        </Routes>
      </aside>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
      </Routes>
    </>
  )
}
```
This code creates the main content of the page, but when we are on the `/books` route, we are also able to see the side bar `<BooksSideBar/>`  component.

You can also move routes to their own file and import them as you would any other [[JavaScript XML (JSX)]] component.
### 5. `useRoutes` hook
Allows you to specify your routes using [[JavaScript]] over [[JavaScript XML (JSX)]] if your prefer. The JSX example is on top, and the JavaScript example is on bottom.
```jsx
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { BookList } from "./BookList"
import { Book } from "./Book"

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books">
        <Route index element={<BookList />} />
        <Route path=":id" element={<Book />} />
      </Route>
    </Routes>
  )
}
```

```jsx
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { BookList } from "./BookList"
import { Book } from "./Book"

export function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/books",
      children: [
        { index: true, element: <BookList /> },
        { path: ":id", element: <Book /> },
      ],
    },
  ])

  return element
}
```

### Types of Routers
- BrowserRouter
- NativeRouter
- HashRouter
	- In React Router this hash is not actually used to store id information for scrolling, but instead it stores information related to the current URL. The reason React Router does this is because some hosting providers do not allow you to actually change the [[uniform resource locator (URL)]] of your page. In those very rare circumstances you will want to use the `HashRouter` since the `HashRouter` will not change the actual URL of your page and will only change the hash of your page. If you are able to use any URL with your hosting provider then this is not something you should use.
- History Router
- MemoryRouter - stores routing information directly in memory
- StaticRouter - this is meant for server rendering since it takes a single location prop and renders that location prop as the URL. It simply renders a single static page.

# Data and Authentication Services
- storing files on your server is not a good idea because the server only has so much storage space and when you run out, the server will stop working properly
- to upload files use the `multer` package from [[npm]]. Below are some code examples of how to upload files on the [[frontend]] and the [[backend]]
## Storage services
- [[S3 Bucket]] by [[Amazon Web Services (AWS)]] is the most popular storage system.
	1. It has unlimited capacity
	2. You only pay for the storage that you use
	3. It is optimized for global access
	4. It keeps multiple redundant copies of every file
	5. You can version the files
	6. It is performant
	7. It supports metadata tags
	8. You can make your files publicly available directly from S3
	9. You can keep your files private and only accessible to your application
## Data services
- popular data services
	- [[redis]]
	- [[MySQL]]
	- [[ElasticSearch]]
	- [[MongoDB]]
	- [[DynamoDB]]
	- [[neo4j]]
	- [[InfluxDB]]

### MongoDB
- Mongo has no strict schema requirements
- A mongo database is made up of one or more collections that each contain [[JSON]] documents.
- You can think of a collection as a large array of [[JavaScript]] objects, each with a unique ID.
- here is an example of a mongo document structure
```json
[
  {
    _id: '62300f5316f7f58839c811de',
    name: 'Lovely Loft',
    summary: 'A charming loft in Paris',
    beds: 1,
    last_review: {
      $date: '2022-03-15T04:06:17.766Z',
    },
    price: 3000,
  },
  {
    _id: '623010b97f1fed0a2df311f8',
    name: 'Infinite Views',
    summary: 'Modern home with infinite views from the infinity pool',
    property_type: 'House',
    beds: 5,
    price: 250,
  },
];
```
- Below is the query syntax for the above mongo example
```js
// find all houses
db.house.find();

// find houses with two or more bedrooms
db.house.find({ beds: { $gte: 2 } });

// find houses that are available with less than three beds
db.house.find({ status: 'available', beds: { $lt: 3 } });

// find houses with either less than three beds or less than $1000 a night
db.house.find({ $or: [(beds: { $lt: 3 }), (price: { $lt: 1000 })] });

// find houses with the text 'modern' or 'beach' in the summary
db.house.find({ summary: /(modern|beach)/i });
```
- To use MongoDB in your [[JavaScript|js]] application, 
```js
const { MongoClient } = require('mongodb');

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);

const collection = client.db('rental').collection('house');

const house = {
  name: 'Beachfront views',
  summary: 'From your bedroom to the beach, no shoes required',
  property_type: 'Condo',
  beds: 1,
};
await collection.insertOne(house);

const cursor = collection.find();
const rentals = await cursor.toArray();
rentals.forEach((i) => console.log(i));
/*
OUTPUT:
[
  {
    _id: new ObjectId('639a96398f8de594e198fc13'),
    name: 'Beachfront views',
    summary: 'From your bedroom to the beach, no shoes required',
    property_type: 'Condo',
    beds: 1,
  },
];
*/
```
- You can provide a query and options to the `find` function. In the example below we query for a `property_type` of Condo that has less than two bedrooms. We also specify the options to sort by descending price, and limit our results to the first 10 documents.
```js
const query = { property_type: 'Condo', beds: { $lt: 2 } };

const options = {
  sort: { price: -1 },
  limit: 10,
};

const cursor = collection.find(query, options);
const rentals = await cursor.toArray();
rentals.forEach((i) => console.log(i));
```

## Authorization Services
- [[authentication]] tokens are usually stored as [[cookie]]s on a user's device.
- authorization indicates what a user is allowed to do in the application.
- the primary objective of hackers is authentication and authorization.
- Common protocols for authentication and authorization:
	- [[OAuth]]
	- [[security assertion markup language (SAML)]]
	- [[OpenID Connect (OIDC)]]
- [[federated login]] allows a user to log in once and then the [[authentication]] token is reused to automatically log in the user to multiple websites. This is used with the suite of [[Google]] products like docs, calendar, photos and more.
## Account creation and login
### need an endpoint for creating a new user
```http
POST /api/auth/create HTTP/2
Content-Type: application/json

{
	"email":"aarondstarkweather@gmail.com",
	"password":"password",
	"first-name":"aaron",
	"last-name":"starkweather",
}
```
response
```http
HTTP/2 200 OK
Content-Type: application/json
Set-Cookie: auth=tokenHere

{
	"id":"337
}
```
### endpoint for logging user in
```http
POST /auth/login HTTP/2
Content-Type: application/json

{
  "email":"marta@id.com",
  "password":"toomanysecrets"
}
```
response
```http
HTTP/2 200 OK
Content-Type: application/json
Set-Cookie: auth=tokenHere

{
  "id":"337"
}
```
### endpoint for GetMe
```http
GET /user/me HTTP/2
Cookie: auth=tokenHere
```
response
```http
HTTP/2 200 OK
Content-Type: application/json

{
  "email":"marta@id.com"
}
```

# [[WebSocket]]
- polling was a technique used to bypass the [[HTTP]] architecture.
- in 2011, [[websocket]] was introduced with its main feature being that it is [[full-duplex]], much like [[socket]]s as you learned about in CS 324.
- For multiple parties communicating with each other, the server still acts as an intermediary.
![[multiple_clients_websocket.png]]
## How to create a websocket on the client
1. Create a WebSocket object by specifying the port you want to communicate on.
2. Send messages with the `send` function
3. Register a callback with the `onmessage` function $\rightarrow$ *this is synonymous to a `recv` call or a `read` call being placed in a while loop in a [[C]] program*

```js
const socket = new WebSocket('ws://localhost:9900');

socket.onmessage = (event) => {
  console.log('received: ', event.data);
};

socket.send('I am listening');
```
## How to create websocket server on the server
1. use the [[ws]] package to create a WebSocketServer object on the same port the browser entity is trying to connect to
2. Create a `wss.on('connection', (ws) => {})` handler so that your websocket server knows what to do when a connection request is received from a client
3. Send messages to the clients with the `send` function
4. Register an `on('message')` function.

```js
const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 9900 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = String.fromCharCode(...data);
    console.log('received: %s', msg);

    ws.send(`I heard you say "${msg}"`);
  });

  ws.send('Hello webSocket');
});
```

# Debugging websocket
1. Create a simple websocket server using this code

```js
const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 9900 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = String.fromCharCode(...data);
    console.log('received: %s', msg);

    ws.send(`I heard you say "${msg}"`);
  });

  ws.send('Hello webSocket');
});
```

2. Run the server in vscode

```js
const socket = new WebSocket('ws://localhost:9900');

socket.onmessage = (event) => {
  console.log('received: ', event.data);
};

socket.send('I am listening');
```

3. In the browser you will get a message that the server heard you say 'I am listening'

# WebSocket chat
- Create [[HTML]] page that looks like this "index.html"
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WebSocket Chat</title>
    <link rel="stylesheet" href="main.css" />
  </head>
  <body>
    <div class="name">
      <fieldset id="name-controls">
        <legend>My Name</legend>
        <input id="my-name" type="text" />
      </fieldset>
    </div>

    <fieldset id="chat-controls" disabled>
      <legend>Chat</legend>
      <input id="new-msg" type="text" />
      <button onclick="sendMessage()">Send</button>
    </fieldset>
    <div id="chat-text"></div>
  </body>
  <script src="chatClient.js"></script>
</html>
```
- create `chatClient.js` and paste in the following code
```js
// Adjust the webSocket protocol to what is being used for HTTP
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

// Display that we have opened the webSocket
socket.onopen = (event) => {
  appendMsg('system', 'websocket', 'connected');
};

// Display messages we receive from our friends
socket.onmessage = async (event) => {
  const text = await event.data.text();
  const chat = JSON.parse(text);
  appendMsg('friend', chat.name, chat.msg);
};

// If the webSocket is closed then disable the interface
socket.onclose = (event) => {
  appendMsg('system', 'websocket', 'disconnected');
  document.querySelector('#name-controls').disabled = true;
  document.querySelector('#chat-controls').disabled = true;
};

// Send a message over the webSocket
function sendMessage() {
  const msgEl = document.querySelector('#new-msg');
  const msg = msgEl.value;
  if (!!msg) {
    appendMsg('me', 'me', msg);
    const name = document.querySelector('#my-name').value;
    socket.send(`{"name":"${name}", "msg":"${msg}"}`);
    msgEl.value = '';
  }
}

// Create one long list of messages
function appendMsg(cls, from, msg) {
  const chatText = document.querySelector('#chat-text');
  const chatEl = document.createElement('div');
  chatEl.innerHTML = `<span class="${cls}">${from}</span>: ${msg}</div>`;
  chatText.prepend(chatEl);
}

// Send message on enter keystroke
const input = document.querySelector('#new-msg');
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// Disable chat if no name provided
const chatControls = document.querySelector('#chat-controls');
const myName = document.querySelector('#my-name');
myName.addEventListener('keyup', (e) => {
  chatControls.disabled = myName.value === '';
});
```
- create an [[Express.js]] backend server with the following code
```js
const { WebSocketServer } = require('ws');
const express = require('express');
const app = express();
// Serve up our webSocket client HTML
app.use(express.static('./public'));
const port = process.argv.length > 2 ? process.argv[2] : 3000;
server = app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

// Create a websocket object
const wss = new WebSocketServer({ noServer: true });

// Handle the protocol upgrade from HTTP to WebSocket
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, function done(ws) {
    wss.emit('connection', ws, request);
  });
});

// Keep track of all the connections so we can forward messages
let connections = [];
let id = 0;

wss.on('connection', (ws) => {
  const connection = { id: ++id, alive: true, ws: ws };
  connections.push(connection);
  // Forward messages to everyone except the sender
  ws.on('message', function message(data) {
    connections.forEach((c) => {
      if (c.id !== connection.id) {
        c.ws.send(data);
      }
    });
  });
  // Remove the closed connection so we don't try to forward anymore
  ws.on('close', () => {
    const pos = connections.findIndex((o, i) => o.id === connection.id);
    if (pos >= 0) {
      connections.splice(pos, 1);
    }
  });
  // Respond to pong messages by marking the connection alive
  ws.on('pong', () => 
    connection.alive = true;
  });
});

// Keep active connections alive
setInterval(() => {
  connections.forEach((c) => {
    // Kill any connection that didn't respond to the ping last time
    if (!c.alive) {
      c.ws.terminate();
    } else {
      c.alive = false;
      c.ws.ping();
    }
  });
}, 10000);
```
- Instead of letting the WebSocketServer control both the [[HTTP]] connection and the upgrading to [[WebSocket]], we want to use the [[HTTP]] connection that [[Express.js]] is providing and handle the upgrade to WebSocket ourselves. This is done by specifying the `noServer` option when creating the WebSocketServer and then handling the `upgrade` notification that occurs when a client requests the upgrade of the protocol from HTTP to WebSocket.
## How to exploit the innerHTML code
To exploit the code that the client is executing in the client, type a message in the chat box, but include an `onclick` attribute in the [[HTML]] that you pass into the chat box. Then when you click the message, the event will trigger and you will have your code executing in the browser. However, I cannot get these messages to come through for the other user. Maybe it isn't possible.