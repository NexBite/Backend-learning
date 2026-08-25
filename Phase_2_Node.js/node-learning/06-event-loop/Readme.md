Now we can understand the Event Loop.

A simplified model:

             JavaScript
                 │
                 ▼
           ┌───────────┐
           │ Call Stack│
           └─────┬─────┘
                 │
                 ▼
        Async operation
                 │
                 ▼
        ┌────────────────┐
        │ Runtime / APIs │
        └───────┬────────┘
                │
                ▼
        Callback Queue
                │
                ▼
           Event Loop
                │
                ▼
           Call Stack

The Event Loop essentially keeps checking whether JavaScript can process queued work.

For your setTimeout() example:

console.log("Start")
        ↓
Call Stack
        ↓
Start

setTimeout(...)
        ↓
timer scheduled

console.log("End")
        ↓
Call Stack
        ↓
End

2 seconds pass
        ↓
callback becomes eligible
        ↓
Event Loop
        ↓
Call Stack
        ↓
Timer finished

# ================ Important interview question
# Q: Is Node.js single-threaded?
A good interview answer:
JavaScript execution in Node.js uses a single main thread and a single call stack, but Node.js can perform asynchronous I/O using the runtime and underlying system facilities, allowing it to handle many concurrent operations without blocking the main JavaScript thread.

# Don't simply say:
"Node.js is completely single-threaded."
That's an oversimplification.

# ----- 6. Callback Queue
In the timer example:
setTimeout(() => {
    console.log("Timer finished");
}, 2000);
The callback:
() => {
    console.log("Timer finished");
}
doesn't immediately execute when the timer expires.
It becomes eligible to be processed, and the Event Loop coordinates moving eligible callbacks into JavaScript execution when the Call Stack is available.
Simplified:
setTimeout
    ↓
Timer
    ↓
callback ready
    ↓
Callback Queue
    ↓
Event Loop
    ↓
Call Stack
    ↓
execute callback

# ----- 7.  Important experiment

Try this:

console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

console.log("End");

What do you expect?

Not:

Start
Timer
End

Instead:

Start
End
Timer

Even with:

setTimeout(..., 0);

the callback doesn't mean "execute immediately."

It means roughly:

Schedule this callback to run after the timer threshold has elapsed, when the event loop can process it.