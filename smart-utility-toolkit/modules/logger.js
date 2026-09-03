
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
};

function timestamp() {
  return new Date().toISOString();
}

function info(message) {
  console.log(`${colors.cyan}[INFO]${colors.reset} ${timestamp()} - ${message}`);
}

function success(message) {
  console.log(`${colors.green}[SUCCESS]${colors.reset} ${timestamp()} - ${message}`);
}

function error(message) {
  console.log(`${colors.red}[ERROR]${colors.reset} ${timestamp()} - ${message}`);
}

function warn(message) {
  console.log(`${colors.yellow}[WARN]${colors.reset} ${timestamp()} - ${message}`);
}


module.exports = { info, success, error, warn };
