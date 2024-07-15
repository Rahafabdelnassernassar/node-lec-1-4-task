const fs = require("fs");

// const operation = process.argv[2];
const yargs = require("yargs");

const data = require("./data");

yargs.command({
  command: "add",
  describe: "adding a new person",
  builder: {
    id: {
      describe: "ID of the person",
      demandOption: true,
      type: "number",
    },
    fName: {
      describe: "First name of the person",
      demandOption: true,
      type: "string",
    },
    lName: {
      describe: "Last name of the person",
      demandOption: true,
      type: "string",
    },
    city: {
      describe: "City of the person",
      demandOption: true,
      type: "string",
    },
    age: {
      describe: "Age of the person",
      demandOption: true,
      type: "number",
    },
  },
  handler: (x) => {
    data.add(x.id, x.fName, x.lName, x.city, x.age);
    // console.log("Added  person: " + x + "\n");
  },
});

yargs.command({
  command: "delete",
  describe: "to delete person",
  builder: {
    id: {
      describe: "ID of the person to delete",
      demandOption: true,
      type: "number",
    },
  },
  handler: (x) => {
    data.deleteOperation(x.id);
  },
});

yargs.command({
  command: "read",
  describe: "to read info of a person",
  builder: {
    id: {
      describe: "ID of the person to delete",
      demandOption: true,
      type: "number",
    },
  },
  handler: (x) => {
    data.read(x.id);
  },
});

yargs.command({
  command: "list",
  describe: "list the first name, last name and age of all persons",
  handler: () => {
    data.list();
  },
});

// Parse the command line arguments
yargs.parse();
