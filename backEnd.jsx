// Calling Backend Services
// https://codewithmosh.com/courses/357787/lectures/5867634
// http://jsonplaceholder.typicode.com/

// Promise
//  A promise is an object that holds the result of an
//  asynchronous operation.
//      An asynchronous operation is an operation that
//      is going to complete in the future.
//  Three states
//      pending
//      resolved
//      failure
//          pending > resolved (success) OR rejected (failure)

// apiEndpoint = "http://jsonplaceholder.typicode.com/posts";

// async componentDidMount() {
//      const { data: posts } = await axios.get(apiEndpoint);
//      this.setState({ posts });
// }

// handleAdd = async () => {
//      const obj = { title: "a", body: "b" };
//      const { data: post } = await axios.post(apiEndpoint, obj);
//      -- post is the newly created item
//      -- we add it to the begining of the posts array
//      const posts = [post, ...this.state.posts];
//      this.setState({ posts });
// };

// Note: different async decorations
//      componentDidMount is a method of the parent class
//      handleAdd is a property set to a function

// Put updates the entire object
// Patch updates only the property that is sent

// handleUpdate = async post => {
//     post.title = "UPDATED";
//     const { data } = await axios.put(apiEndpoint + '/' + post.id, post);
//     const { data } = await axios.patch(apiEndpoint + '/' + post.id, {title: post.title});
// };

// Completed
// handleUpdate = async post => {
//     post.title = "UPDATED";
//     await axios.put(apiEndpoint + "/" + post.id, post);

//     const posts = [...this.state.posts];
//     const index = posts.indexOf(post);
//     posts[index] = { ...post };
//     this.setState({ posts });
//   };

// COMPLETE CRUD

// state = {
//     posts: []
//   };

//   async componentDidMount() {
//     const { data: posts } = await axios.get(apiEndpoint);
//     this.setState({ posts });
//   }

//   handleAdd = async () => {
//     const obj = { title: "a", body: "b" };
//     const { data: post } = await axios.post(apiEndpoint, obj);

//     const posts = [post, ...this.state.posts];
//     this.setState({ posts });
//   };

//   handleUpdate = async post => {
//     post.title = "UPDATED";
//     await axios.put(apiEndpoint + "/" + post.id, post);

//     const posts = [...this.state.posts];
//     const index = posts.indexOf(post);
//     posts[index] = { ...post };
//     this.setState({ posts });
//   };

// Optimistic Updates
// Create an original
// try the update
// if fails, use original to fall back

// handleDelete = async post => {
//     const originalPosts = this.state.posts;

//     const posts = this.state.posts.filter(p => p.id !== post.id);
//     this.setState({ posts });

//     try {
//       await axios.delete(apiEndpoint + "/" + post.id);
//    // TESTING  throw new Error("");
//     } catch (ex) {
//       alert("Delete Failed");
//       this.setState({ posts: originalPosts });
//     }
//   };

// Errors - Expected vs Unexpected
// https://codewithmosh.com/courses/357787/lectures/5867619

// Expected errors are api endpoints predict and return
//  CLIENT ERRORS
//      Example - Delete an object with an invalid id
//          (404: not found)
//      Example - Submit a form with invalid data
//          (400: bad request)
//  *** Application should display a specific error

// Unexpected errors are errors that should not happen
// under normal circumstances
//      network down
//      server down
//      db down
//      bug
//  *** Application should display a generic and friendly error

// Axios Interceptor
// Takes 2 parameters - success & error
// pass null to only intercept errors

axios.interceptors.response.use(null, error => {
  // 400's are expected errors
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("Logging the error", error);
    alert("An unexpected error occured");
  }

  return Promise.reject(error);
});

// Extracting a Config Module
// https://codewithmosh.com/courses/357787/lectures/5867628

// Logging Service
// https://sentry.io/
//

import Raven from "raven-js";

function init() {
  Raven.config("https://f4dc953c57b146389d3dacbb97cc9c18@sentry.io/1280628", {
    release: "1-0-0",
    environment: "development-test"
  }).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log
};
