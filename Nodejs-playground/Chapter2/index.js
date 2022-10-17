const { error } = require("console");
const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");

// this methode can cause some problems the path is to the file is different from OS to another
// toa void this problem we can use path module
fs.readFile("./read.txt", "utf8", (err, data) => {
  if (err) throw err;
  //console.log(data);
});

// best solution
fs.readFile(path.join(__dirname, "read.txt"), "utf8", (err, data) => {
  if (err) throw err;
  //console.log(data);
  console.log("Reading completed");
});

// if the file does not exist a new file will be created with the same name
fs.writeFile(
  path.join(__dirname, "write.txt"),
  "Nodejs File system module",
  (error) => {
    if (error) throw error;
    console.log("Writing operation completed");
  }
);

// add content to the file if the file does not exist a new file will be created
fs.appendFile(path.join(__dirname, "append.txt"), "ADD content", (error) => {
  if (error) throw error;
  console.log("Append operation completed");
});

//rename file
fs.rename(path.join(__dirname, "read.txt"), "read.txt", (error) => {
  if (error) throw error;
  console.log("rename completed");
});

// delte a given file
fs.unlink(path.join(__dirname, "delete.txt"), (error) => {
  if (error) throw error;
  console.log("deleting completed");
});

// first will be printed on the screen then the content of the file
// readfile methode will be executed at the end

// throw an exception and exit
process.on("uncaughtException", (error) => {
  console.log(error);
  process.exit(1);
});

/*---------------------------------------------------------------------------------------------*/
/*
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
  } catch (error) {
    console.error(error);
  }
};

fileOperations();
*/
