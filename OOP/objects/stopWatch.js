function StopWatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function() {
    if (running) throw new Error("Stopwatch has already started.");
    running = true;
    startTime = new Date();
  };

  this.stop = function() {
    if (!running) throw new Error("Stopwatch is not started.");
    running = false;
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function() {}
  });
}

/*
function StopWatch() {
  this.duration = 0;

  let started = false;
  let startTime;
  let stopTime;

  // use to define getters or setters
  Object.defineProperty(this, "duration", {
    get: function() {
      if (!startTime) return 0;

      let outPut = new Date();

      if (startTime && !stopTime) {
        outPut = startTime;
        return outPut;
      }

      if (startTime && stopTime) {
        outPut = stopTime - startTime;
        return outPut;
      }
    },
    set: function(value) {
      return value;
    }
  });

  this.reset = function() {
    startTime = null;
    started = false;
  };
  this.start = function() {
    if (started) throw new Error("Stopwatch has already started.");
    started = true;
    startTime = Date.now();
    return started;
  };
  this.stop = function() {
    if (!started) throw new Error("Stopwatch is not started.");
    console.log("Stopwatch stopped");
    started = false;
    stopTime = Date.now();
    return started;
  };
}

const sw = new StopWatch();

// Step 01
// console.log(sw.duration); PASS

// Step 02
// console.log(sw.start());
// console.log(sw.start());  PASS

// Step 03
// console.log(sw.stop());
// console.log(sw.stop()); PASS

// Step 04
// console.log(sw.start());
// console.log(sw.duration); PASS
*/
