function Timer(callback, timeInterval, options) {
  this.timeInterval = timeInterval;

  this.start = () => {
    //set expected time
    this.expected = Date.now() + this.timeInterval;
    this.theTimout = null;

    if(options.immediate){
      callback();
    }

    this.timeout = setTimeout(this.round, this.timeInterval);
    console.log('timer started!');
  }
  //stop timer
  this.stop = () => {
    clearTimeout(this.timeout);
    console.log('timer stopped!');
  }
  //method that takes care of running our callback and adjusting the time interval
  this.round = () => {
    let drift = Date.now() - this.expected;
    //check if drift is greater than timeInterval and run error callback
    if(drift > this.timeInterval){
      if(options.errorCallback){
        options.errorCallback();
      }
    }
    callback();
    this.expected += this.timeInterval;
    console.log('drift', drift);
    console.log('next round time interval:', this.timeInterval - drift);
    this.timeout = setTimeout(this.round, this.timeInterval - drift);
  }
}

export default Timer;

// const myTimer = new Timer(() => {
//   console.log('it ran!')},1000);
// myTimer.start();
