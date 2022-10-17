const fsPromises = require("fs").promises;
const fs = require("fs");
const { format } = require("date-fns");
const path = require("path");

const logEvents = async (msg) => {
  const date = `${format(new Date(), "yyyy\tMM\tdd\tHH:mm:ss")}`;
  const logItem = `${msg}\t date ${date} \n`;
  console.log(logItem);
  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "logs", "logItmes.txt"),
      logItem
    );
  } catch (err) {
    console.error(err);
  }
};

module.exports = logEvents;
