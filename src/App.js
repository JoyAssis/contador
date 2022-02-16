import React, { Component } from "react";
import './App.css'

class App extends Component {
  state = {
    count: 0,
    msg:""
  };

  add = () => {
    const {count} = this.state
       if (count < 10) {
         this.setState({
           count: count + 1
         })
       }
  };

  remove = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState({
        count: count - 1
      })
    }
  };

  render() {
    const {count} = this.state
    const {add, remove} = this
    return (
      <div className="container">
        <section className="box">
        <h1>Contador</h1>
        <div className="counter">
        <button onClick={add}> + </button>
        <h2>{count}</h2>
        <button onClick={remove}> - </button>
        </div>
        </section>
      </div>
    );
  }
}

export default App;