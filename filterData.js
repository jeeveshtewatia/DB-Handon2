const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017/";

const client = new MongoClient(url);

async function main() {
  await client.connect();

  //selecting database from mongo
  const database = client.db("prep");

  //selecting the collectionName

  const collection = database.collection("customer");

  //Query the collection "employee" and list the employees who are having salary more than 30000.
  //creating Query
  const salary = { salary: { $gt: "30000" } };

  const dataSal = await collection.find(salary).toArray();

  console.log("Salary more than 30000......", dataSal);

  //Query the collection "employee" and list the employees who are having experience more than 2 years.
  const expGtTwo = { overallExp: { $gt: "2" } };

  const dataExp = await collection.find(expGtTwo).toArray();

  console.log("Experience .... ", dataExp);

  //Query the collection "employee" and list the employees who are graduated after 2015 and having experience more than 1 year.

  const grad = { yearGrad: { $gt: "2015" }, overallExp: { $gt: "1" } };

  const dataGrad = await collection.find(grad).toArray();

  console.log("Graduated", dataGrad);

  //.Query the collection "employee" and update the salary of the employee whose salary is greater than 70000 to 65000.

  const updat = db.collection.updateMany(
    { salary: { $gt: "70000" } },
    { $set: { salary: "65000" } }
  );
}

//Delete all the documents from "employee" where last company is Y.

const delt = db.collection.deleteMany({ lastCompany: "Y" });

main();
