

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const logger = require("./modules/logger");

const historyFile = path.join(__dirname, "dice-history.txt");


function rollDice() {

  return crypto.randomInt(1, 7);
}

function saveToHistory(roll) {
  const line = `${new Date().toISOString()} - Dice Rolled: ${roll}\n`;
  fs.appendFile(historyFile, line, (err) => {
    if (err) {
      logger.error(`Could not save roll history: ${err.message}`);
    }
  });
}

const numberOfRolls = Number(process.argv[2]) || 1;

logger.info(`Rolling the dice ${numberOfRolls} time(s)...`);

for (let i = 1; i <= numberOfRolls; i++) {
  const roll = rollDice();
  console.log(`Roll ${i}: Dice Rolled: ${roll}`);
  saveToHistory(roll);
}

logger.success("Dice rolling complete. History saved to dice-history.txt");
