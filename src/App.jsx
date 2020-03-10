// Global
import React from 'react';

// Local
import './style.sass';
import Thread from "./components/Thread";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }


  componentDidMount() {
    // We are using json-server to mock a response.
    const url = "http://localhost:3001/threads";
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ data: data });
      });
  }

  render() {
    const data = this.state.data;
    return (
      <div className="container">
        {data === null ? <div>Loading...</div> : data.map(thread => <Thread thread={thread} />)}
      </div>
    );
  }
}

export default App;
