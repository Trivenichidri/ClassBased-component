import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    username: "",
    password: "",
  };
  onChange = (event) => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmit = (event) => {
    event.preventDefault();
    console.log("onSubmit event is held");
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="form">
        <h1>username:{username}</h1>
        <h1>password:{password}</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={username}
            onChange={this.onChange}
            name="username"
          />
          <input
            type="text"
            value={password}
            onChange={this.onChange}
            name="password"
          />
          <button type="submit">Submit Me</button>
        </form>
      </div>
    );
  }
}

export default App;
