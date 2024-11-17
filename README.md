# PaddleKing

## Specification Deliverable
An app like Chess.com but for Pickleball and Tennis. A low key version of an app that I am sure already exists but for the casual pickleball player who wants some level of tracking for their game.

### Pitch
PaddleKing is the opportunity for you to gamify and track the hours you spend playing pickleball with your friends. Easily track your competitive rankings, see how you stack up with your friends, challenge your nemesis to a 1v1 and much more. Rise to the top with PaddleKing.

### Key Features
- Login and registration for new users
- secure logins with passwords stored as hashed values
- Track matches with other players
- View match history
- Accept and decline requests to participate in live matches in real-time
- users can create friendships with other players


### Technologies
I will use all the required technologies in the following ways. Some of these may evolve over the course of development.
- **HTML** - Uses organized, easy to read HTML. Has 5 pages: login, homepage, match-tracking page, results page, match list page
- **CSS** - Styling and animating pages, supports dark mode to save the eyeballs of the innocent, 
- **JavaScript** - provides login, registration, buttons to start matches and view match history, backend endpoint calls, retrieval of data from database using asynchronous functions
- **React** - Handle routing, create interactive UI elements for specifying which kind of match a user is creating, makes for reactive and fun match tracking page with reactive UI elements
- **Web Service**
	- sendFriendRequest (sends a friend request to another user)
	- saveMatch (saves the score)
	- calculateNewELO (based on the match that you tracked, it calculates the new ELO for both players)
	- login
	- register
	- getMatches
- **Authentication** - Input to let users create an account and login. Display user details after they login.
- **Database Data** - Save match logs so that users can see how they performed
- **WebSocket Data** - receiving matchmaking requests in real-time

### Design
Login
![login](Login.png)

Register
![register](Register.png)

Homepage
![homepage](Homepage.png)

Match Setup
![matchSetup](MatchSetup.png)

Match Tracking
![matchTracking](MatchTracking.png)

Matches List View
![matchList](MatchList.png)

## HTML Deliverable
With this deliverable, I added all the main webpages: login, index, match_list, match_setup, and match_track. I user proper HTML structure including proper use of `<nav>, <a>, <body>, <header>, <footer>, <main>` and other tags. Included within these webpages are placeholders web socket integration, database data, web-service data, and authentication.

- [X] add login html elements (authentication)
- [X] add navigation for homepage --> match setup and homepage --> match list
- [X] add web service placeholder for homepage to get pickleball headlines from google
- [X] match setup (web socket integration for live invites)
	- [X] placeholder for list of friends / list of users
	- [X] start button
- [X] match tracking
	- [X] placeholder for scores
	- [X] buttons for player1 and player2
	- [X] undo button
	- [X] exit button
- [X] match list (database data)
	- [X] placeholder for list of matches

## CSS Deliverable
With this deliverable, I added styling to the header and footer. I also added styling to each of the application screens so that the match list items look like cards and dynamically change arrangement based on screen size. For the match tracking page, I make another flex layout to fit screen sizes. I also added some fun animations to the navigation links at the top. Overall, the appearance of the application is far better than it was at the beginning.

- [X] Add favicon.ico 
- [X] create grid layout header with navigation components to get to main aspects of the page
- [X] style hyperlinks
- [X] App logo sizes dynamically with the screen 
- [X] match screen
	- [X] flex layout
	- [X] scores are displayed on buttons when viewport is small
	- [X] expanded view when viewport is large
- [X] match list items styled like cards

## React Deliverable
With this deliverable, I converted the entire application to React and used some fun hooks in the process!

- [X] Create header comp
- [X] create footer component
- [X] create header link component
- [X] create match list item component
- [X] create login components
- [X] useState hooks for win conditions
- [X] useNavigate hooks for win conditions

## Service Deliverable
With this deliverable I created an Express.js backend for the application. This includes services for registering users, logging in users, sending score updates, retrieving match data from the backend and more.

- [X] auth
	- [X] allow user to create account
	- [X] allow user to login
- [X] matches
	- [X] create a new match
	- [X] load all matches that include the user
- [X] track
	- [X] send score updates
	- [X] get initial score so that users can navigate around the page while keeping their current game active
	- [X] undo scores in the database
- [X] third party service
	- [X] used weather API service to get the current weather so people can decide whether or not to play pickleball that day.

## DB/Login Deliverable

## WebSocket Deliverable

