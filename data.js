const fs = require("fs");

// adding person //////////////////////////////////////////////////////////////////////////////////////////////
const add = (id, fName, Lname, city, age) => {
  //load and convert
  const Data = loadData();

  //dublicated data

  const dublicatedData = Data.filter((obj) => {
    return obj.id === id;
  });

  if (dublicatedData.length > 0) {
    console.log("ID NOT VALID");
  } else {
    //make the operation
    Data.push({
      id: id,
      fName: fName,
      Lname: Lname,
      city: city,
      age: age,
    });

    //convert and save
    saveData(Data);
  }
};

// delete person //////////////////////////////////////////////////////////////////////////////////////////////

const deleteOperation = (id) => {
  //load and convert
  const Data = loadData();

  const dataToKeep = Data.filter((obj) => {
    return obj.id !== id;
  });

  //convert and save
  saveData(dataToKeep);
};

// read ///////////////////////////////////////////////////////////////////////////////////////////////////

const read = (id) => {
  //load and convert
  const Data = loadData();

  const person = Data.find((obj) => {
    return obj.id == id;
  });

  if (person) {
    console.log(person);
  } else {
    console.log("No person found with id");
  }
};

// list //////////////////////////////////////////////////////////////////////////////////////////////////
const list = () => {
  //load and convert
  const Data = loadData();

  Data.forEach((obj) => {
    console.log(obj.fName, obj.Lname, obj.age);
  });
};

const loadData = () => {
  try {
    const jsonData = fs.readFileSync("data.json").toString();
    const objData = JSON.parse(jsonData);
    return objData;
  } catch {
    return [];
  }
};

const saveData = (data) => {
  fs.writeFileSync("data.json", JSON.stringify(data));
};

module.exports = {
  add,
  deleteOperation,
  read,
  list,
};
