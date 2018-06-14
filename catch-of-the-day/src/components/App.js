import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

class App extends React.Component {
    render() {
      return (
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Fresh Seafood" />
          </div>
          <Order />
          <Inventory />
        </div>
      )
    }
}

export default App;

// state is the home
// props is the car
// try $r in the console