# Smart Utility Toolkit

**Course:** Web Dev III (Node.js & Express Backend)
**Assignment:** Lab Assignment 1 – Smart Utility Toolkit
**Unit:** Unit-1

A collection of mini backend utilities built entirely with Node.js **core modules**
(`process`, `http`, `fs`, `crypto`) — no external npm packages or frameworks used.

## Project Structure

```
smart-utility-toolkit/
├── calculator.js         # CLI calculator using process.argv
├── app.js                 # Demonstrates custom module reuse
├── server.js               # HTTP server with multiple routes
├── fileManager.js          # File CRUD operations using fs
├── dice.js                  # Random dice generator using crypto
├── test.txt                  # Sample file used by fileManager.js
├── dice-history.txt          # Auto-generated dice roll history (bonus)
├── modules/
│   ├── isEven.js            # Custom module: checks even/odd
│   └── logger.js             # Custom module: colored, timestamped logs
└── README.md
```

## How to Run

### 1. CLI Calculator
```
node calculator.js add 10 5
node calculator.js subtract 10 5
node calculator.js multiply 10 5
node calculator.js divide 10 5
```

### 2. Custom Module Reuse Demo
```
node app.js
```
Uses `modules/isEven.js` and `modules/logger.js` to check a list of numbers.

### 3. HTTP Server
```
node server.js
```
Then visit in your browser or Postman:
- http://localhost:3000/
- http://localhost:3000/about
- http://localhost:3000/contact
- http://localhost:3000/anything-else (shows 404)

### 4. File Manager (Create → Read → Update → Delete)
```
node fileManager.js
```
Watch the terminal to see each stage of the CRUD lifecycle on `test.txt`.

### 5. Dice Generator
```
node dice.js
node dice.js 5
```
Rolls the dice the given number of times (default 1) using `crypto.randomInt()`
and appends each roll to `dice-history.txt`.

## Learning Objectives Covered

- Running JavaScript outside the browser with Node.js
- Reading CLI input with `process.argv`
- Creating and reusing custom modules with `module.exports` / `require()`
- Building an HTTP server and handling routes with the `http` module
- Performing CRUD file operations with the `fs` module
- Generating secure random values with the `crypto` module
- Observing synchronous vs. asynchronous execution via console logs

## Bonus Features Implemented

- Colored terminal output via ANSI escape codes (`modules/logger.js`)
- Timestamped log messages
- Dice roll history saved to `dice-history.txt`
