
var fs = require("fs");

exports.getStartingPoints= function(){

  console.log("\n *STARTING* \n");
  var contents = fs.readFileSync("botData.json");
  var jsonContent = JSON.parse(contents);
  console.log("timePerTask : ", jsonContent.timePerTask);
  console.log("numOfTask : ", jsonContent.numOfTask);
  console.log("volunteers : ", jsonContent.volunteers);
  console.log("askTime : ", jsonContent.askTime);
  console.log("\n *EXIT* \n");

}
