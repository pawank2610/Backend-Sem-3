

const http = require("http");
const logger = require("./modules/logger");

const PORT = 3000;

const server = http.createServer((req, res) => {
  logger.info(`Incoming request: ${req.method} ${req.url}`);

  res.setHeader("Content-Type", "text/plain");

  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.end("Welcome to the Smart Utility Toolkit Node Server!");
      break;

    case "/about":
      res.statusCode = 200;
      res.end("About Page: This server is built using Node.js core http module.");
      break;

    case "/contact":
      res.statusCode = 200;
      res.end("Contact Page: Reach us at example@smartutility.com");
      break;

    default:
      res.statusCode = 404;
      res.end("404 Error: Route not found.");
      logger.warn(`Unknown route requested: ${req.url}`);
  }
});

server.listen(PORT, () => {
  logger.success(`Server is running at http://localhost:${PORT}/`);
});
