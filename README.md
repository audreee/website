# Portfolio Site

## What It Is
This website contains informationi about myself and projects I've completed. It was built using React, JS/JSX, CSS without using any external styling libraries. Responsive design was handled using media queries and conditional rendering inside the React components.   

## Setup and Installation
### Option 1: Docker
- Pull down the image from docker hub using ```docker pull audreee/website:1.0```
- Spin up a container mapping port 8080 to a port of your choosing, i.e. ```docker run -d -p 8080:8080 audreee/website:1.0```
- Visit localhost:8080 on your machine

### Option 2: Clone the Repo
- Fork this repo and clone to your local machine
- Run ```npm install``` to install all dependencies
- Run the prod-build script to build the webpack bundle ```npm run prod-build```
- Run ```npm start``` to start the server
- Visit localhost:8080 on your machine

## Tools & Technologies
- Node/Express
- React
- CSS (including media queries and keyframe animation)
- CSS Grid
- Flexbox
