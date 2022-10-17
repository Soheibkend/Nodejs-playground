const fsPromises = require("fs/promises");
const path = require("path");

const fileOperations = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "read.txt"),
      "utf-8"
    );
    console.log(data);

    await fsPromises.writeFile(
      path.join(__dirname, "write.txt"),
      "Writing operation"
    );
    console.log("write completed ");
    await fsPromises.unlink(path.join(__dirname, "delete.txt"));
    console.log("delete completed ");
    await fsPromises.appendFile(
      path.join(__dirname, "append.txt"),
      "ADD content async awiat"
    );
    console.log("append completed ");
  } catch (error) {
    console.error(error);
  }
};

fileOperations();
