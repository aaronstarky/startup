# Notes

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