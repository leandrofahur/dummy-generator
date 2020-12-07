import React from "react";

class SearchBar extends React.Component {
  state = { number: 0 };

  onSubmitForm = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.number);
  };

  render() {
    return (
      <React.Fragment>
        <form className='ui form'>
          <input
            type='text'
            name='number'
            id='number'
            placeholder='Number of profiles'
            value={this.state.number}
            onChange={(event) => {
              this.setState({ number: event.target.value });
            }}
          ></input>
          <br></br>
          <br></br>
          <button className='ui button blue' onClick={this.onSubmitForm}>
            Generate
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default SearchBar;
