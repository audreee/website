import React from 'react';

let Tech = () => {
  return (
    <div className="flex-column tech-wrapper">
      <h5>TECHNOLOGIES</h5>
      <div className="flex-row list-container">
      <div className="list-col">
        <h4 className="tech-title">Front End</h4>
        <hr />
        <ul>
          <li>JavaScript (ES5/ES6)</li>
          <li>React</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Flexbox</li>
          <li>CSS Grid</li>
          <li>jQuery</li>
          <li>Boostrap</li>
          <li>Jinja2</li>
        </ul>
      </div>
      <div className="list-col">
      <h4 className="tech-title">Back End</h4>
      <hr />
      <ul>
        <li>Node</li>
        <li>Express</li>
        <li>RESTful APIs</li>
        <li>MySQL</li>
        <li>PostgreSQL</li>
        <li>SQLite3</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>C</li>
        <li>Python</li>
      </ul>
      </div>
      <div className="list-col">
        <h4 className="tech-title">Testing/Deployment</h4>
        <hr />
        <ul>
          <li>Docker</li>
          <li>AWS (EC2, S3)</li>
          <li>Jest</li>
          <li>Enzyme</li>
          <li>Mocha/Chai</li>
          <li>Lighthouse</li>
          <li>CircleCI</li>
          <li>Loader.io</li>
          <li>K6</li>
        </ul>
      </div>
      <div className="list-col">
        <h4 className="tech-title">Developer Tools</h4>
        <hr />
        <ul>
          <li>Vim</li>
          <li>Git</li>
          <li>Postman</li>
          <li>Webpack</li>
          <li>Babel</li>
          <li>npm</li>
          <li>Agile methodology</li>
          <li>Trello</li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Tech;