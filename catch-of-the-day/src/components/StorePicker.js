import React, { Fragment } from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  // event is full of information about what just happened
  goToStore = event => {
      // stop form from submitting
      event.preventDefault();
      // get the text from the input
      const storeName = this.myInput.value.value;
      // change the page to store/whatever-they-entered
      this.props.history.push(`/store/${storeName}`);
  }

  render() {
    return (
      <Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter A Store</h2>
          <input type="text" 
                required
                ref={this.myInput} 
                placeholder="Store Name"
                defaultValue={getFunName()} 
            />
          <button type="submit">Visit Store →</button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;
// also, dont forget to import the css in the index file that is already prepard