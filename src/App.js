import React, { Component } from 'react';
import {Route, HashRouter as Router, Link} from 'react-router-dom';
import Quote from './Quote';
import Profile from './Profile';
import GuitarList from './GuitarList';

// import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    profile: {
      name: 'John',
      location: {
        city: 'Bloomington',
        state: 'MN',
      }
    },
    guitars: [
      {id: 1, brand: 'Ibanez', model: 'Iron Label 8'},
      {id: 2, brand: 'Kiesel', model: 'CM-8'},
     
    ],
    quote: {
      quote: `Time heals all wounds, except these crazy eyes.`,
      author: 'Crazy Eyes',
      image: 'https://i.ytimg.com/vi/kCGFoA26y50/hqdefault.jpg'
    }
  }

  render() {
   
    // if (url === "/profile") {
    //   return <Profile />
    // }
    // else if (url === "/harmonicas") {
    //   return <HarmonicaList />
    // }
    // else if (url === "/quotes") {
    //   return <Quote />
    // }

    return (
      <Router>
        <div id="app">
          <header>
            <h1>John's Guitars</h1>
          </header>

          {/* Navigation! */}
          <nav>
            <main>
            <ul>
                  <li><Link to="/">Profile</Link></li>
                  <li><Link to="/guitars">Guitars</Link></li>
                  <li><Link to="/quotes">Quotes</Link></li>
                <li><a href="http://www.google.com">Google</a></li>
              </ul>
            </main>
          </nav>

          <main>
            {/* If URL is /#/, show Profile */}
            <Route path="/" exact>
              <Profile 
                name={this.state.profile.name} 
                location={this.state.profile.location} 
              />
            </Route>

            {/* If URL is /#/guitars, show GuitarList */}
            <Route path="/guitars">
              <GuitarList 
                guitars={this.state.guitars} 
                onDelete={this.onDelete}
              /> 
            </Route>

            {/* If URL is /#/quotes, show <Quote> */}
            <Route path="/quotes">
              <Quote 
                quote={this.state.quote.quote}
                author={this.state.quote.author}
                image={this.state.quote.image}
              />
            </Route>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
