// Changing the Value of "this"

// this References the object that is executing the current function

// if that function (method) is part of an object
// method ->

// if that function is a regular function and not part of an object
// function -> golbal (window, global)

// while this works it is not the ideal approach
const album = {
  title: "Nevermind",
  songs: ["Smells Like Teen Spirit", "In Bloom", "Come as You Are"],
  showSongs() {
    const that = this;
    // ^^^ this is referencing the album object
    this.songs.forEach(function(song) {
      console.log(that.title, song);
    });
  }
};

// album.showSongs();
// returns
// Nevermind Song Smells Like Teen Spirit
// Nevermind Song In Bloom
// Nevermind Song Come as You Are

// bind method
const cd = {
  title: "Nevermind",
  songs: ["Smells Like Teen Spirit", "In Bloom", "Come as You Are"],
  showSongs() {
    this.songs.forEach(
      function(song) {
        console.log(this.title, song);
      }.bind(this)
    );
    // ^^^ this is referencing the cd object
  }
};

// cd.showSongs();
// returns
// Nevermind Song Smells Like Teen Spirit
// Nevermind Song In Bloom
// Nevermind Song Come as You Are

// ES6 Solution
// The modern solution when dealing with this in callback functions
// is to use the => arrow function
const vinyl = {
  title: "Nevermind",
  songs: ["Smells Like Teen Spirit", "In Bloom", "Come as You Are"],
  showSongs() {
    this.songs.forEach(song => {
      console.log(this.title, song);
    });
    // ^^^ => arrow functions inherit this
    // from the containing function
  }
};

vinyl.showSongs();
// returns
// Nevermind Song Smells Like Teen Spirit
// Nevermind Song In Bloom
// Nevermind Song Come as You Are
