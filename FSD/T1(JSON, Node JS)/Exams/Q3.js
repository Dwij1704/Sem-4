const events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('my_event', (s1, s2, s3) => {
    if (s1 < 0 || s2 < 0 || s3 < 0) {
        console.log("Side Must Be Positive")
    }
    var peri = s1 + s2 + s3;
    if (peri < 0) {
        eventEmitter.emit('negperi')
    }
});
eventEmitter.on('negperi', () => {
    console.log("Negative Perimeter")
})
eventEmitter.emit('my_event',-2,-5,6);