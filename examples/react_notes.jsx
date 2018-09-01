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
export default App 

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
export default App 

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
export default App

// https://codewithmosh.com/courses/357787/lectures/5634625
// Rendering Classes Dynamically

class App extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "bade m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}
export default App 


// https://codewithmosh.com/courses/357787/lectures/5634610
// Rendering Lists
// *** Each child in an array or iterator should have a unique key

class App extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map(tag => (
            <li kay={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "bade m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}
export default App 



// https://codewithmosh.com/courses/357787/lectures/5634620
// Conditional Rendering

// *** In javascript unlike other programming languages you can 
// apply the logical and && between non bolean values 

// true && true 
// returns true

// true && false
// returns false

// true &&  'Hi'
// returns  "Hi"

// JavaScript tries to convert 'Hi' to truthy or falsey 
// An empty string is considered falsey
// A string that has a least on character is considered truthy

// true && 'Hi' && 1
// retuns 1 
// 1 is considered truthy.  0 would be falsey 


class App extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  renderTags() {
      if(this.state.tags.length ===0) return <p>There are no tags!</p>;
      return <ul> {this.state.tags.map(tag => (<li kay={tag}>{tag}</li>))}</ul>;
  }

  render() {
    return (
      <React.Fragment>
        {this.state.tags.length === 0 && "Please create a new tag!"} 
        {this.renderTags()}
      </React.Fragment>
    );
  }
}
export default App 


// https://codewithmosh.com/courses/357787/lectures/5634622
// Handling Events

class App extends Component {
    state = {
      count: 0
    };
  
    handleIncrement() {
        console.log('Increment Clicked');
    }

    render() {
      return (
        <React.Fragment>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
        </React.Fragment>
      );
    }
  
    getBadgeClasses() {
      let classes = "bade m-2 badge-";
      classes += this.state.count === 0 ? "warning" : "primary";
      return classes;
    }
  
    formatCount() {
      const { count } = this.state;
      return count === 0 ? <h1>Zero</h1> : count;
    }
  }
  export default App 


// https://codewithmosh.com/courses/357787/lectures/5634615
// Binding Event Handlers

// this in JavaScript behaves differently than other languages
// depending on how a function is called this can reference different objects
// if a function is called as part of a reference
// object.method();
// this will always return a reference to that object
// if that function is called as a stand alone fucntion w/o an object reference
// function();
// this by default returns a reference to the window object
// if strict mode is enable this will return undefined
// we use the bind method to solve this problem

class App extends Component {
    state = {
      count: 0
    };
  
    // Possible Solution to this issue
    //      a contstructor is called when the class is created
    //  constructor(){
    //      we have to call the contructor of the parent class using the super key word
    //      this will not be undefined when super is called
    //  super();

    //      functions in javascript are objects
    //      this returns a new instance of the handleIncrement function amd in that function
    //      this is always referencing the current object 
    //  this.handleIncrement = this.handleIncrement.bind(this); 
    // }
    
    // handleIncrement() {
    //     console.log('Increment Clicked', this);
    // }

    // Better Solution
    // Arrow functions don't rebind this key word
    // they inherit it

    handleIncrement = () => {
        console.log('Increment Clicked', this);
    }

    render() {
      return (
        <React.Fragment>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
        </React.Fragment>
      );
    }
  
    getBadgeClasses() {
      let classes = "bade m-2 badge-";
      classes += this.state.count === 0 ? "warning" : "primary";
      return classes;
    }
  
    formatCount() {
      const { count } = this.state;
      return count === 0 ? <h1>Zero</h1> : count;
    }
  }
  export default App 


// https://codewithmosh.com/courses/357787/lectures/5634608
// Updating the state
// react is not automatically aware of state changes
// Angular is monkeypatched, react is not
// we have to use one of the methods we inherit from the base component
// we use setState() to figure out what part of the state has changed
// and based on that will bring the dom insink with the virtual dom

class App extends Component {
    state = {
      count: 0
    };
  
    handleIncrement = () => {
       this.setState({ count: this.state.count + 1 });
    }

    render() {
      return (
        <React.Fragment>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
        </React.Fragment>
      );
    }
  
    getBadgeClasses() {
      let classes = "bade m-2 badge-";
      classes += this.state.count === 0 ? "warning" : "primary";
      return classes;
    }
  
    formatCount() {
      const { count } = this.state;
      return count === 0 ? <h1>Zero</h1> : count;
    }
  }
  export default App 