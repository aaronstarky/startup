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