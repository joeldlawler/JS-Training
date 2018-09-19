// The this keyword

// this References the object that is executing the current function

// if that function (method) is part of an object
// method ->

// if that function is a regular function and not part of an object
// function -> golbal (window, global)

const video = {
  title: "a",
  play() {
    console.log(this);
  }
};

video.play(); // returns the video object {title: "a", play: ƒ}

// Add a new method
video.stop = function() {
  console.log(this);
};

video.stop(); // returns the video object {title: "a", play: ƒ}

function playVideo() {
  console.log(this);
}

playVideo(); // returns  Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}

// Constructor Function
// new creates a new object {}
// this references the new object

function Video(title) {
  this.title = title;
  console.log(this);
}

const video = new Video("a"); // Video {title: "a"}

const record = {
  title: "c",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(tag);
    });
  }
};

record.showTags(); // returns a, b, c

const cd = {
  title: "c",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(this, tag);
      // ^^^ being in a regular function makes this reference global object Window
    });
  }
};

cd.showTags(); // returns Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …} "a" ...//#endregion

const casset = {
  title: "Nevermind",
  tags: ["Song A", "Song B", "Song C"],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(this.title, tag);
    }, this);
    // ^^^ this this references the current object which
    // is the showTags() method
  }
};

casset.showTags();
// returns
// Nevermind Song A
// Nevermind Song B
// Nevermind Song C
