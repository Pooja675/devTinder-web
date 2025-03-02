# DevTinder

- Create a Vite + React application
- Remove unnecessary code and create Hello World app
- Install tailwind css
- Install Daisy UI
- Add Navbar component to App.jsx
- Create a Navbar.jsx separate component file
- install recat-router-dom
- Create BrowserRouter > Routes > Route=/Body > BodyChildren
- Create an Outlet in your Body component
- Create a Footer

- Install axios
- CORS - install cors in backend => add middleware to with configuration : origin, credentials: true
- Whenever you are making API call so pass ==> {withCredentials: true}
- install react-redux + @reduxjs/toolkit - https://redux.js.org/tutorials/quick-start
- ConfigureStore ==> Provider ==> CreateSlice ==> add reducer to store (now we safely add data to our redux store)
- Add redux devtools extention 
- Login and see if your data is coming properly in the store
- Navbar should update as soon as user logs in 
- Refactor our file create constant file and component folder
- You shuold not be allowed to access other routes without login
- If token is not present, redirect to login page 
- Logout feature
- get the feed and add to the store
- Build the user card on feed 
- Edit profilr feature
- Show toast message on save of profile 
- New page - See all my connections 
- New page - see all my connection requests
- Feature - Accept/Reject connection request

- Remaining:
    - send/ignore the user card from feed
    - Signup new user
    - E2ETesting 


Body
    NavBar
    Route=/ ==>Feed
    Route=/login  ==> Login
    Route=/connections ==> Connections
    Route=/profile ==> Profile


# Deplyement
    - SignUp on AWS
    - Launch intance
    - chmod 400 <secret>.pem
    - ssh -i "devTinder555.pem" ubuntu@ec2-15-207-20-95.ap-south-1.compute.amazonaws.com --- connect to the instance
    - install node version 22.12.0