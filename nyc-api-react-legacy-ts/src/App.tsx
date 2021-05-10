import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      <h1>NY Times video search</h1>
      <div className="wrapper">
        <div className="controls">
          <form>
            <p>
              <label className="search">Enter a SINGLE search term (required): </label>
              <input type="text" id="search" className="search" required/>
            </p>
            <p>
              <label className="start-date">Enter a start date (format YYYYMMDD): </label>
              <input type="date" id="start-date" className="start-date" pattern="[0-9]{8}"/>
            </p>
            <p>
              <label className="end-date">Enter an end date (format YYYYMMDD): </label>
              <input type="date" id="end-date" className="end-date" pattern="[0-9]{8}"/>
            </p>
            <p>
              <button className="submit">Submit search</button>
            </p>
          </form>
        </div>
        <div className="results">
     
        <nav>
          <button className="prev">Previous 10</button>
          <button className="next">Next 10</button>
        </nav>
        <section>

        </section>
        </div>
        </div>
        <script type="text/javascript" src="nyt.js"></script>
    </div>
  );
}

export default App;
