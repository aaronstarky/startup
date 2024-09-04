# Introduction
## GitHub
### Merge Conflicts
Merge conflicts occur when the same line of code is edited in two different places and someone tries to pull those changes into their current branch. You can resolve this using the visual studio GUI tools and CLI tools.


Times it can occur:
- you make change to line 27. Line 27 has new change in github and you attempt to pull that change onto your local machine.

## HTML
- Use developer tools to inspect elements on a live webpage
- developer elements are not saved, they are stored client side so you will not be able to see the changes that you have made between refreshes of the webpage
- a bash script is used to deploy your web files to the live server.

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
- HTTP and URL define the way that documents are addressed and transferred over the internet

### CSS
- became standard in 1996
- version 2.1 removed all error and implemented compatibility between CSS syntaxes
- uses:
    - import fonts
    - animate HTML elements
    - respond to user actions
    - dynamically alter the entire layout of a page based on device size and orientation

### JavaScript
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
- Using Route 53 web service on AWS you can buy domain names
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

## Caddy
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
The TLS protocol ensures that all data being exchanged over an HTTP connection is secure by encrypting all of the data.

TLS works by negotiating a shared secret that is then used to encrypt data.

### Web Certificates
files that authenticate a website's identity and enable and encrypted connections. They are issued by a trusted third party called a certificate authority.

### Let's Encrypt
A Mozilla created non-profit that broke the monopoly that certificate providers had on the market. This happened in 2014. God bless Mozilla.

Pioneered the IETF Standard ACME Protocol

## Editors

### Vim
| keystroke | meaning                                                                                                                                        |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `:h`      | help                                                                                                                                           |
| `i`       | enter insert mode. This will allow you to type and delete text. Use ESC to exit insert mode. No other commands will work while in insert mode. |
| `u`       | undo                                                                                                                                           |
| `CTRL-r`  | redo                                                                                                                                           |
| `gg`      | go to beginning of file                                                                                                                        |
| `G`       | go to end of file                                                                                                                              |
| `/`       | search for text that you type after /                                                                                                          |
| `n`       | next search match                                                                                                                              |
| `N`       | previous search match                                                                                                                          |
| `v`       | visually select text                                                                                                                           |
| `y`       | yank or copy selected text to clipboard                                                                                                        |
| `p`       | paste clipboard                                                                                                                                |
| `CTRL-wv` | Split window vertically                                                                                                                        |
| `CTRL-ww` | Toggle windows                                                                                                                                 |
| `CTRL-wq` | Close current window                                                                                                                           |
| `:e`      | Open a file. Type ahead available. If you open a directory you can navigate it in the window                                                   |
| `:w`      | write file (save)                                                                                                                              |
| `:q`      | quit. Use `:q!` to exit without saving                                                                                                         |

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