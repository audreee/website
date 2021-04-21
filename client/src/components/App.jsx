import React from 'react';
import Navbar from './Navbar.jsx';
import Welcome from './Welcome.jsx'

class App extends React.Component {
  render() {
    return(
      <div className="app-container">
      <div className="section-container">
        <Welcome />
      </div>
        <Navbar />
      </div>
    )
  }
}

export default App;