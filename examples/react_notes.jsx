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


// https://codewithmosh.com/courses/357787/lectures/5634611
// What happens when state changes
// The virtual dom is compared to the old dom and only the element
// that has been changed is effected


// https://codewithmosh.com/courses/357787/lectures/5634618
// Passing Event Arguments
// We have to pass a function reference
// this will not work -- <button onClick={this.handleIncrement()} 
// We will use an inline function

class App extends Component {
    state = {
      count: 0
    };
  
    handleIncrement = product => {
        console.log(product);
        this.setState({ count: this.state.count + 1 });
    }

    render() {
      return (
        <React.Fragment>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button onClick={() => this.handleIncrement(product)} className="btn btn-secondary btn-sm">Increment</button>
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


  // Zen Coding
  // tbody>tr>td*4 
  // tab generates the HTML


  // https://codewithmosh.com/courses/357787/lectures/5634624
  // Components
  // Working Bootrap Table Example

import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    const { length: count } = this.state.movies;

    if (count === 0) {
      return <p>There are no movies.</p>;
    }

    return (
      <React.Fragment>
        <p>Showing {count} movies.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
export default Movies;


// Passing Data to Components
// https://codewithmosh.com/courses/357787/lectures/5634713
// Every react component has property called props
// props is a plain javascript object that contains all the attributes that are set in the parent

//Parent
state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

// Child
state = {
    count: this.props.value
  };



// Passing Children
// https://codewithmosh.com/courses/357787/lectures/5634710

//Parent 
<div>
{this.state.counters.map(counter => (
  <Counter key={counter.id} value={counter.value}>
    <h4>Counter #{counter.id}</h4>
  </Counter>
))}
</div>
// Child
{this.props.children}



// Props vs State
// https://codewithmosh.com/courses/357787/lectures/5634715


// Props includes data that we give to a component
// Props is read only and cannot be changed

// State includes data that is local or private to that component 
// State is internal cannot be accessed outside of the component
class Counter extends Component {
    state = {
      count: this.props.value
}
}


// Raising and Handling Events
// https://codewithmosh.com/courses/357787/lectures/5634711
// The component that owns a piece of the state, should be the one
// modifying it.

// Parent
handleDelete = () => {
    console.log("Event Handler Called");
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
          />
        ))}
      </div>
    );
  }

// Child
render() {
    return (
      <div>
        <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2" >Delete </button>
      </div>
    );
  }



// Updating the State
// https://codewithmosh.com/courses/357787/lectures/5634718

// The whole point of using objects is to encapsolate related values
// Passing the entire object will allow for future changes to be passed
// as props without having to update code such as this:

<div>
{this.state.counters.map(counter => (
  <Counter
    key={counter.id}
    onDelete={this.handleDelete}
    counter={counter}
  />
))}
</div>


// Single Source of Truth
// https://codewithmosh.com/courses/357787/lectures/5634714

// Removing the Local State
// https://codewithmosh.com/courses/357787/lectures/5634721
// A controlled component does not have a local state.
// It recieves all of it's data via props
// It raises events when data needs to be changed
// The the controlled component is entirely controlled by it's parent


// Stateless Functional Component
// https://codewithmosh.com/courses/357787/lectures/5634720
// sfc + tab
// This is a component that is a function rather than a class
// There are no LIfecycle Hoots in a Stateless Functional Component

import React, { Component } from "react";

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;

// Destructuring Arguments
// https://codewithmosh.com/courses/357787/lectures/5634724

const NavBar = ({ totalCounters }) => {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </nav>
    );
  };
  
  export default NavBar;


// this.props is Destructured to const making the code cleaner

import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

// Lifecycle Hooks
// https://codewithmosh.com/courses/357787/lectures/5634717

// Mount
// ^ Mount happens when an instance of a component is created
//   and inserted into the DOM   
// 3 Lifecycle Hooks
// * constructor
//      - constructor is only called once when an instance of a class is created
//      - this is the place to initialize properties or props in this instance
//      - a common use is to set the state based on the props recieved

        //  * in order to have access to props it must be passed to the construcor
        //  and to the base class
        // constructor(props) {
        //     super(props);
        //     this.state = this.product.something;
        // }

// * render
//     - when a component is rendered, all of it's children are rendered 
//     recursively
//
// * componentDidMount
//     - componentDidMount is a good place to get data

// Update
// ^ Update happens when the state or props of a component get changed
// 2 Lifecycle Hooks
// * render
// * componentDidUpdate
//      - componentDidUpdate can be used to compare the old state and new state
//      and/or old props and new props

        // componentDidUpdate(prevProps, prevState) {
        //     console.log("prevProps", prevProps);
        //     console.log("prevState", prevState);
        //     if (prevProps.counter.value !== this.props.counter.value) {
        //     // Ajax call and get new data from the server
        //     }
        // }

// Unmount
// ^ Unmount happens when component is removed from the DOM
// 1 Lifecycle Hook
// * componentWillUnmount