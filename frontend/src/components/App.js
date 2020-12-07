import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

class App extends React.Component {
  state = { profile: "", number: "" };

  onSubmit = async (number) => {
    const response = await axios.get(
      `https://randomuser.me/api/?results=${number}
    `
    );
    console.log(response.data);
  };

  render() {
    return (
      <React.Fragment>
        <div className='ui container'>
          <div className='ui card'>
            <div className='content'>
              <div className='header'>Dummy Profile Generator</div>
              <br></br>
              <SearchBar onSubmit={this.onSubmit}></SearchBar>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
