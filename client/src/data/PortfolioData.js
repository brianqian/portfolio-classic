const PortfolioData = [
  {
    title: "Websocket.io",
    stack: ["HTML", "CSS/Sass", "Javascript", "Typescript", "Node/Express", "Webpack", "Babel"],
    description:
      "Websocket.io is a real-time chat application using the Websocket API. It started as a simple project to just learn Websocket technology but I decided to use this project to learn Typescript, Webpack, and Babel. Since this was intended to be small all DOM manipulation is in vanilla Javascript with plans to further refactor into React.",
    img1: "./img/screenshots/websocketio-full.png",
    gitURL: "https://github.com/brianqian/websocket.io",
    deployURL: "http://bq-chat.herokuapp.com",
  },
  {
    title: "nSuns Calculator",
    stack: ["HTML", "CSS", "Javascript", "React", "Redux", "Node/Express", "SQL", "Jest", "Enzyme"],
    description:
      "This is a React/Redux calculator app for the nSuns workout program. Features include interchangeable training and rep maxs, rest timer, workout tracker, and a customizable accessory tracker. The app uses JWT (JSON Web Tokens) to persist user authorization and bcrypt for password hashing",
    img1: "./img/screenshots/nsuns-full.png",
    gitURL: "https://github.com/brianqian/nsuns-react",
    deployURL: "http://nsuns-app.herokuapp.com",
  },
  {
    title: "SnackTime",
    stack: ["HTML", "CSS", "Javascript", "React", "Node/Express", "SQL", "Material-UI"],
    description:
      "Responsible for: building our reused custom components and handling user authentication on the front end. Snacktime is a solution for busy parents and daycares by creating an easy way to share and log information. Uses session storage to persist user login. Test login: admin@example.org / password",
    img1: "./img/screenshots/snacktime-full.png",
    gitURL: "https://github.com/brianqian/SnackTime",
    deployURL: "http://timetosnack.herokuapp.com",
  },
  {
    title: "Google Books API",
    stack: ["HTML", "CSS", "Javascript", "React", "Node"],
    description:
      "A basic application that uses the Google Books API and cross references searches with Wikipedia. This project is built in React with a Node backend",
    img1: "./img/screenshots/books-full.png ",
    gitURL: "https://github.com/brianqian/8thlight-react",
    deployURL: "http://bq-8thlight-react.herokuapp.com",
  },
  {
    title: "DevLab",
    stack: ["HTML", "CSS", "Javascript", "jQuery", "Node/Express", "SQL"],
    description:
      "Responsible for: strategy and front end structure, API calls, database models. DevLab is a collaborative resource dedicated to help people learn web development. Resources are pooled into a library where individual users can save content to their own library. Each time content is saved, it's ranked to provide easy access to the most popular resources. Test login: admin@example.org / password",
    img1: "./img/screenshots/devlab-full.png",
    gitURL: "https://github.com/sajeelmalik/Dev-Lab",
    deployURL: "http://devlab.herokuapp.com/",
  },
  {
    title: "EventSpotter",
    stack: ["HTML", "CSS", "Javascript", "jQuery"],
    description:
      "Responsible for strategy, front-end design, API calls. EventSpotter uses both the Spotify API and SeatGeek API to provide upcoming tour dates for your favorite artists or to search by location. Spotify allows the user to listen to artists during your search. A calendar is also provided to help the user plan their dates. As a first project I wanted to use this opportunity to learn CSS Grid and get more exposure to jQuery",
    img1: "./img/screenshots/eventspotter-full.png",
    gitURL: "https://github.com/brianqian/SpotifyEvents",
    deployURL: "https://brianqian.github.io/SpotifyEvents/",
  },
];

export default PortfolioData;
