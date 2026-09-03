
const fs = require("fs");
const path = require("path");
const logger = require("./modules/logger");

const filePath = path.join(__dirname, "test.txt");


function createFile() {
  logger.info("Creating File...");
  fs.writeFile(filePath, "Hello Node.js\n", (err) => {
    if (err) {
      logger.error(`Failed to create file: ${err.message}`);
      return;
    }
    logger.success("File Created");
    readFile();
  });
}


function readFile() {
  logger.info("Reading File...");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      logger.error(`Failed to read file: ${err.message}`);
      return;
    }
    console.log(data.trim());
    updateFile();
  });
}

function updateFile() {
  logger.info("Updating File...");
  fs.appendFile(filePath, "Learning FS Module\n", (err) => {
    if (err) {
      logger.error(`Failed to update file: ${err.message}`);
      return;
    }
    logger.success("File Updated");

  
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        logger.error(`Failed to read updated file: ${err.message}`);
        return;
      }
      console.log(data.trim());
      deleteFile();
    });
  });
}


function deleteFile() {
  logger.info("Deleting File...");
  fs.unlink(filePath, (err) => {
    if (err) {
      
      if (err.code === "ENOENT") {
        logger.warn("File does not exist, nothing to delete.");
      } else {
        logger.error(`Failed to delete file: ${err.message}`);
      }
      return;
    }
    logger.success("File Deleted");
  });
}


createFile();
