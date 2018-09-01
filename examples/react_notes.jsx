// JSX expressions must have one parent element
// main is contains the h1
class App extends Component {
  render() {
    return (
      <main className="container">
        <h1>hello</h1>
      </main>
    );
  }
}

// this can also be done like this
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>hello</h1>
      </React.Fragment>
    );
  }
}

// Empedding an expression
class App extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>
      </React.Fragment>
    );
  }

  // return the string 'Zero' if count equals 0 otherwise return count
  formatCount() {
    // pre Destructuring
    // return this.state.count === 0 ? "Zero" : this.state.count;

    // jsx expressions are just like normal javascript objects
    //
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

// https://codewithmosh.com/courses/357787/lectures/5634613
// Setting Attributes

class App extends Component {
  state = {
    count: 0,
    imgeUrl: "https://picsum.photos/200"
  };

  // Set the css
  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  render() {
    return (
      <React.Fragment>
        <img style={{ height: 200 }} src={this.state.imgeUrl} alt="" />
        <span style={this.styles} className="bade badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Inncrement</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}
